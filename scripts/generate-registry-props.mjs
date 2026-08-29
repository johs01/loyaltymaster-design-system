// Regenerate each registry entry's `props` JSON Schema and `slots` list from
// the real exported *Props interface in its libraryPath TSX. The TSX is the
// contract; run this after any library prop change, then re-run the
// validators. Use --check to diff without writing.
import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const require = createRequire(path.join(root, "library", "package.json"));
const ts = require("typescript");

const registryPath = path.join(root, "registry", "components.json");
const registry = JSON.parse(fs.readFileSync(registryPath, "utf8"));

// ponytail: syntactic walk over a uniform codebase, not full checker inference;
// upgrade to TypeChecker types if the library ever grows generics/mapped types.
const sharedFiles = [
  "library/src/types.ts",
  "library/src/components/_internal.tsx",
  "library/src/components/RunbookPromotionPrimitives.tsx",
];

function parse(relPath) {
  const abs = path.join(root, relPath);
  return ts.createSourceFile(abs, fs.readFileSync(abs, "utf8"), ts.ScriptTarget.Latest, true);
}

function collectDecls(sourceFile, table) {
  sourceFile.forEachChild((node) => {
    if (ts.isInterfaceDeclaration(node) || ts.isTypeAliasDeclaration(node)) {
      table.set(node.name.text, node);
    }
  });
}

const sharedTable = new Map();
for (const f of sharedFiles) collectDecls(parse(f), sharedTable);

function mapTypeNode(node, table, depth) {
  if (!node) return {};
  switch (node.kind) {
    case ts.SyntaxKind.StringKeyword:
      return { type: "string" };
    case ts.SyntaxKind.NumberKeyword:
      return { type: "number" };
    case ts.SyntaxKind.BooleanKeyword:
      return { type: "boolean" };
  }
  if (ts.isArrayTypeNode(node)) {
    return { type: "array", items: mapTypeNode(node.elementType, table, depth) };
  }
  if (ts.isLiteralTypeNode(node) && ts.isStringLiteral(node.literal)) {
    return { type: "string", enum: [node.literal.text] };
  }
  if (ts.isUnionTypeNode(node)) {
    const parts = node.types.filter(
      (t) => !(ts.isLiteralTypeNode(t) && (t.literal.kind === ts.SyntaxKind.NullKeyword)) &&
        t.kind !== ts.SyntaxKind.UndefinedKeyword
    );
    const literals = parts
      .filter((t) => ts.isLiteralTypeNode(t) && ts.isStringLiteral(t.literal))
      .map((t) => t.literal.text);
    if (literals.length === parts.length && literals.length > 0) {
      return { type: "string", enum: literals };
    }
    return mapTypeNode(parts[0], table, depth);
  }
  if (ts.isFunctionTypeNode(node)) {
    return { description: "Runtime callback; not set from Markdown outlines." };
  }
  if (ts.isParenthesizedTypeNode(node)) {
    return mapTypeNode(node.type, table, depth);
  }
  if (ts.isTypeLiteralNode(node)) {
    return objectSchema(node.members, table, depth);
  }
  if (ts.isTypeReferenceNode(node)) {
    const name = ts.isIdentifier(node.typeName) ? node.typeName.text : node.typeName.getText();
    if (name === "Array" && node.typeArguments?.length === 1) {
      return { type: "array", items: mapTypeNode(node.typeArguments[0], table, depth) };
    }
    if (name === "ReactNode" || name === "JSX.Element" || name === "ReactElement") {
      return { description: "ReactNode content; supplied as JSX by the build, not set from Markdown outlines." };
    }
    const decl = table.get(name);
    if (decl && depth < 4) {
      if (ts.isInterfaceDeclaration(decl)) return objectSchema(decl.members, table, depth + 1);
      if (ts.isTypeAliasDeclaration(decl)) return mapTypeNode(decl.type, table, depth + 1);
    }
    return { type: "object" };
  }
  return {};
}

function objectSchema(members, table, depth) {
  const properties = {};
  const required = [];
  for (const member of members) {
    if (!ts.isPropertySignature(member) || !member.name) continue;
    const key = ts.isIdentifier(member.name) || ts.isStringLiteral(member.name)
      ? member.name.text
      : member.name.getText();
    properties[key] = mapTypeNode(member.type, table, depth);
    if (!member.questionToken) required.push(key);
  }
  const schema = { type: "object", properties };
  if (required.length) schema.required = required;
  schema.additionalProperties = false;
  return schema;
}

let changed = 0;
const check = process.argv.includes("--check");
for (const component of registry.components) {
  const source = parse(component.libraryPath);
  const table = new Map(sharedTable);
  collectDecls(source, table);
  let propsDecl = null;
  source.forEachChild((node) => {
    if (ts.isInterfaceDeclaration(node) && node.name.text.endsWith("Props")) propsDecl = node;
  });
  if (!propsDecl) {
    console.error(`FAIL: no exported *Props interface in ${component.libraryPath}`);
    process.exitCode = 1;
    continue;
  }
  const schema = objectSchema(propsDecl.members, table, 0);
  const slots = Object.keys(schema.properties).map((name) => ({
    name,
    required: (schema.required ?? []).includes(name),
    description: `Approved ${name} content/input slot.`,
  }));
  const before = JSON.stringify({ p: component.props, s: component.slots });
  const after = JSON.stringify({ p: schema, s: slots });
  if (before !== after) {
    changed += 1;
    if (check) console.log(`DRIFT: ${component.id}`);
    component.props = schema;
    component.slots = slots;
  }
}

if (check) {
  if (changed) {
    console.error(`FAIL: registry props drift from TSX in ${changed} component(s); run node scripts/generate-registry-props.mjs`);
    process.exitCode = 1;
  } else {
    console.log("Registry props match TSX for all components.");
  }
} else {
  fs.writeFileSync(registryPath, JSON.stringify(registry, null, 2) + "\n");
  console.log(`Regenerated props+slots; ${changed} component(s) updated, ${registry.components.length} total.`);
}
