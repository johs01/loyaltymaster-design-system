"use client";

import { useEffect } from "react";

export interface StructuredDataEntry {
  id: string;
  schema: Record<string, unknown>;
}

function safeJsonLd(schema: Record<string, unknown>) {
  return JSON.stringify(schema).replace(/</g, "\\u003c");
}

export default function StructuredDataLoader({ entries }: { entries: StructuredDataEntry[] }) {
  useEffect(() => {
    const ids = entries.map((entry) => entry.id);

    for (const entry of entries) {
      let script = document.getElementById(entry.id) as HTMLScriptElement | null;

      if (!script) {
        script = document.createElement("script");
        script.id = entry.id;
        script.type = "application/ld+json";
        document.head.appendChild(script);
      }

      script.text = safeJsonLd(entry.schema);
    }

    return () => {
      for (const id of ids) {
        document.getElementById(id)?.remove();
      }
    };
  }, [entries]);

  return null;
}
