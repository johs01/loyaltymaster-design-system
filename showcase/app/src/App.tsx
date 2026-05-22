import "../../../tokens/fonts.css";
import "../../../tokens/tokens.css";
import "../../../library/src/styles.css";
import registry from "../../../registry/components.json";
import { specimens } from "./specimens";
import { getTemplateFixture, templateFixtures, type TemplateFixture } from "./templateFixtures";
import "./showcase.css";

interface RegistryComponent {
  id: string;
  name: string;
  category: string;
  clientBoundary: "server" | "client";
  specPath: string;
  screenshotPath: string;
  libraryPath: string;
  description: string;
}

const components = registry.components as RegistryComponent[];

function assetUrl(relativePath: string): string {
  return `/@fs${__REPO_ROOT__}/${relativePath}`;
}

function getSpecimen(id: string) {
  return specimens.find((specimen) => specimen.id === id);
}

function TemplateReviewPage({ fixture }: { fixture: TemplateFixture }) {
  const selectedComponents = fixture.componentIds.map((componentId) => components.find((component) => component.id === componentId));

  return (
    <main className="phase8-template-review" data-template-fixture={fixture.id}>
      <aside className="phase8-template-sidebar" aria-label={`${fixture.name} review evidence`}>
        <p className="phase5-eyebrow">Phase 8B rendered template gate</p>
        <h1>{fixture.name}</h1>
        <p>
          This page proves the approved Markdown recipe can be assembled into a
          real React `.tsx` artifact using only approved Loyaltymaster
          components.
        </p>

        <dl className="phase8-template-meta">
          <div>
            <dt>Source Template</dt>
            <dd>{fixture.sourceTemplate}</dd>
          </div>
          <div>
            <dt>Artifact Type</dt>
            <dd>{fixture.artifactType}</dd>
          </div>
          <div>
            <dt>Approval Status</dt>
            <dd>{fixture.approvalStatus}</dd>
          </div>
          <div>
            <dt>Local Review URL</dt>
            <dd>{fixture.localReviewUrl}</dd>
          </div>
        </dl>

        <section aria-labelledby={`${fixture.id}-components`}>
          <h2 id={`${fixture.id}-components`}>Approved Component Evidence</h2>
          <div className="phase8-template-component-list">
            {selectedComponents.map((component) => component ? (
              <article key={component.id}>
                <h3>{component.name}</h3>
                <p>{component.id}</p>
                <dl>
                  <div>
                    <dt>Spec</dt>
                    <dd>{component.specPath}</dd>
                  </div>
                  <div>
                    <dt>Library</dt>
                    <dd>{component.libraryPath}</dd>
                  </div>
                </dl>
              </article>
            ) : null)}
          </div>
        </section>

        <section aria-labelledby={`${fixture.id}-references`}>
          <h2 id={`${fixture.id}-references`}>Reference Pages</h2>
          <ul className="phase8-reference-list">
            {fixture.referenceUrls.map((url) => (
              <li key={url}>
                <a href={url}>{url}</a>
              </li>
            ))}
          </ul>
        </section>
      </aside>

      <section className="phase8-template-preview" aria-label={`${fixture.name} rendered page`}>
        {fixture.render()}
      </section>
    </main>
  );
}

export function App() {
  const captureId = new URLSearchParams(window.location.search).get("capture");
  const templateMatch = window.location.pathname.match(/^\/template-tests\/([^/]+)\/?$/);

  if (captureId) {
    const component = components.find((item) => item.id === captureId);
    const specimen = getSpecimen(captureId);

    return (
      <main className="phase5-capture" data-capture-page={captureId}>
        <div className="phase5-render-target phase5-capture-target" data-render-target={captureId} data-capture-target={captureId}>
          {component && specimen ? specimen.render() : <p>Missing specimen renderer for {captureId}.</p>}
        </div>
      </main>
    );
  }

  if (templateMatch) {
    const fixture = getTemplateFixture(templateMatch[1]);

    return fixture ? (
      <TemplateReviewPage fixture={fixture} />
    ) : (
      <main className="phase8-template-review phase8-template-review--missing">
        <section className="phase8-template-sidebar">
          <p className="phase5-eyebrow">Phase 8B rendered template gate</p>
          <h1>Unknown template fixture</h1>
          <p>No approved rendered template fixture exists for `{templateMatch[1]}`.</p>
          <ul>
            {templateFixtures.map((fixtureItem) => (
              <li key={fixtureItem.id}>
                <a href={`/template-tests/${fixtureItem.id}`}>{fixtureItem.name}</a>
              </li>
            ))}
          </ul>
        </section>
      </main>
    );
  }

  return (
    <main className="phase5">
      <header className="phase5-hero">
        <p className="phase5-eyebrow">Loyaltymaster Phase 7F</p>
        <h1>Component showcase and production fidelity review</h1>
        <p>
          Every Wave 1 registry component is rendered from the React library
          with the canonical local font runtime and checked against both local
          references and live sendPUSH production-fidelity targets.
        </p>
      </header>

      <nav className="phase5-index" aria-label="Component index">
        {templateFixtures.map((fixture) => (
          <a key={fixture.id} href={`/template-tests/${fixture.id}`}>
            {fixture.name}
          </a>
        ))}
        {components.map((component) => (
          <a key={component.id} href={`#${component.id}`}>
            {component.name}
          </a>
        ))}
      </nav>

      <section className="phase5-grid" aria-label="Component specimens">
        {components.map((component) => {
          const specimen = getSpecimen(component.id);
          return (
            <article
              key={component.id}
              id={component.id}
              className="phase5-specimen"
              data-specimen-id={component.id}
            >
              <div className="phase5-specimen-header">
                <div>
                  <p className="phase5-eyebrow">{component.category}</p>
                  <h2>{component.name}</h2>
                  <p>{component.description}</p>
                </div>
                <dl>
                  <div>
                    <dt>Component ID</dt>
                    <dd>{component.id}</dd>
                  </div>
                  <div>
                    <dt>Boundary</dt>
                    <dd>{component.clientBoundary}</dd>
                  </div>
                  <div>
                    <dt>Spec</dt>
                    <dd>{component.specPath}</dd>
                  </div>
                  <div>
                    <dt>Library</dt>
                    <dd>{component.libraryPath}</dd>
                  </div>
                  <div>
                    <dt>Screenshot</dt>
                    <dd>{component.screenshotPath}</dd>
                  </div>
                </dl>
              </div>

              <div className="phase5-compare">
                <section className="phase5-live" aria-label={`${component.name} live render`}>
                  <div className="phase5-panel-label">Live library render</div>
                  <div className="phase5-render-target" data-render-target={component.id}>
                    {specimen ? specimen.render() : <p>Missing specimen renderer.</p>}
                  </div>
                </section>
                <section className="phase5-reference" aria-label={`${component.name} approved screenshot`}>
                  <div className="phase5-panel-label">Approved screenshot reference</div>
                  <img src={assetUrl(component.screenshotPath)} alt={`${component.name} approved screenshot`} />
                </section>
              </div>
            </article>
          );
        })}
      </section>
    </main>
  );
}
