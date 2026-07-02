# Phase 12 Loyaltymaster.com Conversion Readiness Audit

Date: 2026-05-22

## Summary

This audit checks whether the current approved Loyaltymaster design-system Lego
set is adequate to convert the public pages on `https://loyaltymaster.com/`.

Verdict: full-site conversion should **not** start yet. A subset of marketing
and product pages can be converted with approved components after content
mapping, but the full site is blocked by missing approved components and
templates for legal documents, long-form content, forms, FAQ/search, indexes,
pricing matrices, industry grids, and confirmation pages.

Normal page conversion remains body-only. Do not create navbar/header/footer
inside converted page bodies.

## Audit Sources

- `https://loyaltymaster.com/wp-sitemap.xml`
- `https://loyaltymaster.com/wp-sitemap-posts-page-1.xml`
- `https://loyaltymaster.com/wp-sitemap-posts-e-landing-page-1.xml`
- `https://loyaltymaster.com/wp-sitemap-posts-bitforms-1.xml`
- Browser-rendered DOM audit of all sitemap URLs at desktop width.
- Local approved sources: `AI_START_HERE.md`, `LLM_MARKDOWN_OUTLINE_PACK.md`,
  `templates/*.md`, `registry/components.json`, and `specs/components/*.md`.

## Inventory Result

- URLs discovered from sitemap: 42
- Browser responses: 42 HTTP 200
- WordPress page bodies: 40
- Elementor landing page entries: 1
- Utility/auth endpoint entries: 1

Classification counts:

| Classification | Count |
|---|---:|
| Ready with approved components | 3 |
| Ready with approved template but needs content mapping | 7 |
| Missing component required | 30 |
| Missing template required | 1 |
| Do not convert / utility endpoint | 1 |

## Approved Component Pool Checked

The audit used only these approved registry IDs as the possible conversion set:

`billing-toggle-button`, `button-email`, `comparison-table`,
`cta-trial-full-form`, `cta-with-button-email`, `faq-accordion`,
`feature-section-2-column-bullets-image`,
`feature-section-2-column-image`, `features-grid`, `footer`,
`geo-fence-use-case`, `hero-main-section`, `image-grid`, `image-strip`,
`navbar-glassmorphism`, `pricing-section`, `process-steps`,
`stats-card-strip`, `testimonial-single`, `testimonials-grid`.

`navbar-glassmorphism` and `footer` remain shell-only exceptions and are not
allowed in normal converted page bodies.

## Page-By-Page Conversion Matrix

| URL | Body evidence from rendered page | Classification | Approved mapping if available | Blocking gap |
|---|---|---|---|---|
| `https://loyaltymaster.com/privacy-policy/` | Policy body with legal prose headings; no forms/tables/images in page body. | Missing component required | None safe enough. | `legal-document-body` and legal/policy template. |
| `https://loyaltymaster.com/digital-reward-cards-loyalty-app/` | Product hero, how-it-works, feature blocks, logo carousel, FAQ, CTA buttons. | Ready with approved template but needs content mapping | `hero-main-section`, `process-steps`, `features-grid`, `image-grid` or `image-strip`, `faq-accordion`, `cta-with-button-email`. | None if long prose is compressed into approved component copy. |
| `https://loyaltymaster.com/price-list/` | Monthly and yearly pricing, six price-table widgets, logo grid. | Missing component required | `pricing-section` is useful for simple pricing, but not this full page. | `pricing-page-matrix` with monthly/yearly groups, plan rows, disclaimers, and billing CTA states. |
| `https://loyaltymaster.com/contact-us/` | Contact intro, email/phone/address, message form with consent. | Missing component required | `cta-trial-full-form` is not a contact/message form. | `contact-form-section` and contact page template. |
| `https://loyaltymaster.com/terms-of-use/` | Long legal terms document. | Missing component required | None safe enough. | `legal-document-body` and legal/policy template. |
| `https://loyaltymaster.com/acceptable-use-policy/` | Long acceptable-use legal document. | Missing component required | None safe enough. | `legal-document-body` and legal/policy template. |
| `https://loyaltymaster.com/subscription-agreement/` | Long subscription agreement with introduction. | Missing component required | None safe enough. | `legal-document-body` and legal/policy template. |
| `https://loyaltymaster.com/features/` | Feature/story sections, images, FAQ, trial CTA. | Ready with approved template but needs content mapping | `hero-main-section`, `features-grid`, `feature-section-2-column-image`, `faq-accordion`, `cta-with-button-email`. | None if content is mapped into approved feature patterns. |
| `https://loyaltymaster.com/stamp-reward-card/` | Product hero, 48-hour launch, icon boxes, tables, FAQ, CTA. | Ready with approved template but needs content mapping | `hero-main-section`, `features-grid`, `comparison-table`, `process-steps`, `faq-accordion`, `cta-with-button-email`. | If the two tables must remain literal data tables, request a `responsive-data-table`; otherwise use `comparison-table`. |
| `https://loyaltymaster.com/ideal-for/` | 24 industry image-box cards plus business-fit story. | Missing component required | `features-grid` is too generic and would become drift. | `industry-use-case-card-grid` and industry/ideal-for template. |
| `https://loyaltymaster.com/about-us/` | About/story prose with image. | Missing component required | `feature-section-2-column-image` can support one section only. | `article-body` or `company-story-section` for approved long narrative content. |
| `https://loyaltymaster.com/cookie-policy/` | Cookie policy legal prose. | Missing component required | None safe enough. | `legal-document-body` and legal/policy template. |
| `https://loyaltymaster.com/core-values-and-mission-statement/` | Mission/value prose. | Missing component required | `features-grid` may support value cards, but not the document body. | `article-body` or `company-values-content-section`. |
| `https://loyaltymaster.com/book-a-virtual-meeting/` | Demo booking page with expectation copy, image, accordion/FAQ, embedded booking logic. | Missing component required | `faq-accordion` can cover FAQ only. | `booking-demo-request-section` with embedded booking/meeting behavior. |
| `https://loyaltymaster.com/some-key-details-about-loyaltymaster/` | Key-details explainer article. | Missing component required | `features-grid` can cover highlights only. | `article-body` / `long-form-content-block`. |
| `https://loyaltymaster.com/blog/` | Blog index heading with article collection intent. | Missing component required | None. | `blog-article-index` and blog index template. |
| `https://loyaltymaster.com/` | Homepage hero, trust/process icons, marquee/image proof, CTA buttons. | Ready with approved components | `hero-main-section`, `features-grid`, `process-steps`, `image-strip`, `stats-card-strip`, `cta-with-button-email`. | None. |
| `https://loyaltymaster.com/get-your-own-customized-digital-reward-card/` | Branded loyalty card application page with Bitforms fields and proof images. | Missing component required | `cta-trial-full-form` is close but not the branded-card application contract. | `branded-card-application-form` and application page template. |
| `https://loyaltymaster.com/thank-you-page-branded-card-application/` | Thank-you confirmation and next-steps copy. | Missing component required | None safe enough. | `thank-you-confirmation-section`. |
| `https://loyaltymaster.com/digital-membership-card/` | Product hero, recurring-income story, feature/icon blocks, CTA. | Ready with approved template but needs content mapping | `hero-main-section`, `features-grid`, `feature-section-2-column-image`, `process-steps`, `faq-accordion`, `cta-with-button-email`. | None if long prose is mapped into approved sections. |
| `https://loyaltymaster.com/digital-stamp-card-5-reasons-to-ditch-paper-stamp-cards/` | Persuasive article with quote, icon boxes, buttons, images. | Missing component required | `comparison-table` and `features-grid` cover parts only. | `article-body` / `long-form-content-block`. |
| `https://loyaltymaster.com/any-questions/` | Questions page with iframe/chat-style embedded widget. | Missing component required | `faq-accordion` is not the iframe/question embed. | `external-embed-panel` or `question-embed-section`. |
| `https://loyaltymaster.com/thank-you-page-virtual-meeting/` | Thank-you confirmation and next steps after booking. | Missing component required | None safe enough. | `thank-you-confirmation-section`. |
| `https://loyaltymaster.com/cookie-policy-2/` | Cookie policy shortcode output. | Missing component required | None safe enough. | `legal-document-body` plus shortcode/legal handling rule. |
| `https://loyaltymaster.com/join-email-newsletter-form/` | Newsletter signup page with email form. | Missing component required | `button-email` is a CTA primitive, not a full newsletter page section. | `newsletter-signup-section`. |
| `https://loyaltymaster.com/thank-you-page-join-email-list/` | Email-list thank-you confirmation with bullet benefits. | Missing component required | None safe enough. | `thank-you-confirmation-section`. |
| `https://loyaltymaster.com/frequently-asked-questions-loyaltymaster/` | Full FAQ index with categories/search-style content. | Missing component required | `faq-accordion` covers a section, not a searchable FAQ index. | `faq-index-search`. |
| `https://loyaltymaster.com/what-is-loyaltymaster/` | Long product explainer with repeated demo/trial CTAs. | Missing component required | Approved CTAs cover buttons only. | `article-body` / product-article hybrid template. |
| `https://loyaltymaster.com/digital-loyalty-card/` | Product hero, integration partners, features, FAQ jump CTA. | Ready with approved template but needs content mapping | `hero-main-section`, `image-grid`, `features-grid`, `feature-section-2-column-image`, `faq-accordion`, `cta-with-button-email`. | None if article-like paragraphs are condensed into approved sections. |
| `https://loyaltymaster.com/paper-stamp-cards-are-costing-you-customers/` | Problem/story page with icon boxes and CTAs. | Missing component required | `comparison-table` and `features-grid` cover parts only. | `article-body` / narrative problem-solution content block. |
| `https://loyaltymaster.com/start-sending-push-notifications-to-your-customers-without-any-app/` | Push-notification product page with image sections, icon boxes, FAQ, CTA. | Ready with approved template but needs content mapping | `hero-main-section`, `features-grid`, `feature-section-2-column-image`, `faq-accordion`, `cta-with-button-email`. | None if mapped section-by-section. |
| `https://loyaltymaster.com/encyclopedia/` | BetterDocs encyclopedia shortcode. | Missing component required | None. | `knowledge-base-index` / docs index template. |
| `https://loyaltymaster.com/what-is-electronic-rewards/` | Short article/explainer. | Missing component required | None safe enough for plain article body. | `article-body` / `long-form-content-block`. |
| `https://loyaltymaster.com/why-keeping-customers-beats-chasing-new-ones/` | Short article/explainer. | Missing component required | None safe enough for plain article body. | `article-body` / `long-form-content-block`. |
| `https://loyaltymaster.com/know-your-customers-and-keep-them/` | Short article/explainer. | Missing component required | None safe enough for plain article body. | `article-body` / `long-form-content-block`. |
| `https://loyaltymaster.com/the-complete-electronic-rewards-solution/` | Short article/explainer with list-style content. | Missing component required | None safe enough for plain article body. | `article-body` / `long-form-content-block`. |
| `https://loyaltymaster.com/electronic-rewards-turns-shoppers-into-regulars/` | Short article/explainer. | Missing component required | None safe enough for plain article body. | `article-body` / `long-form-content-block`. |
| `https://loyaltymaster.com/our-turnkey-solution-how-it-works/` | Process/how-it-works page with images, steps, CTA, marquee. | Ready with approved components | `hero-main-section`, `process-steps`, `feature-section-2-column-image`, `image-strip`, `cta-with-button-email`. | None. |
| `https://loyaltymaster.com/start-sending-push-notifications-no-app-required/` | Push-notification product page with feature sections, FAQ, CTA. | Ready with approved template but needs content mapping | `hero-main-section`, `features-grid`, `feature-section-2-column-image`, `faq-accordion`, `cta-with-button-email`. | None if mapped section-by-section. |
| `https://loyaltymaster.com/electronic-rewards-2/` | Homepage variant with hero, four proof icons, marquee/proof, CTAs. | Ready with approved components | `hero-main-section`, `features-grid`, `process-steps`, `image-strip`, `cta-with-button-email`. | None. |
| `https://loyaltymaster.com/elementor-landing-page-143/` | Simple coming-soon page. | Missing template required | Could use `hero-main-section`, but shell/maintenance intent is not documented. | `coming-soon` or maintenance-page template decision. |
| `https://loyaltymaster.com/bitforms/bitforms-file/` | WordPress login/Bitforms file endpoint. | Do not convert / utility endpoint | None. | Exclude from page conversion scope. |

## Missing Component Backlog

| Proposed component | Pages that need it | Why approved components are not close enough | Existing components considered and rejected | Props/states/accessibility needs | Reference evidence | Drift risk if skipped |
|---|---|---|---|---|---|---|
| `article-body` / `long-form-content-block` | About, key details, what-is pages, electronic rewards articles, paper stamp card article, core values. | The current set has sections/cards, not an approved prose document body. | `features-grid`, `feature-section-2-column-image`, `comparison-table`. | Heading levels, rich text, lists, quotes, inline links, optional CTA insertion, readable line length, accessible landmarks. | Text-editor-heavy Elementor pages with 1-3 article headings. | LLMs will invent generic article CSS or misuse cards for prose. |
| `legal-document-body` | Privacy, terms, acceptable use, subscription, cookie policies. | Legal pages require dense, scannable long-form policy layout. | `article-body` could help, but legal needs stricter heading/list/table rules. | Legal heading hierarchy, numbered clauses, links, effective date, optional table of contents. | Legal pages with long clause copy and no marketing sections. | Legal content becomes visually inconsistent or hard to scan. |
| `contact-form-section` | Contact page. | `cta-trial-full-form` is a sales/trial form, not a message/contact form with address details and consent. | `cta-trial-full-form`, `button-email`. | Name/email/location/message/consent, validation, labels, error/success states, contact method list. | Elementor `form.default` with contact details. | Agents will create ad hoc form layouts and consent copy. |
| `newsletter-signup-section` | Newsletter signup page. | Email CTA is a hero conversion primitive, not a full newsletter signup section. | `button-email`, `cta-with-button-email`. | Email input, submit/loading/success/error, privacy note, optional image. | Email-only form page. | Newsletter pages will drift into generic lead forms. |
| `booking-demo-request-section` | Book a virtual meeting. | Existing components do not cover scheduling embeds or booking expectations. | `faq-accordion`, `cta-with-button-email`. | Booking embed slot, agenda bullets, FAQ, fallback CTA, accessible iframe title. | Demo page with booking expectations and embedded HTML. | Booking pages will improvise embeds and spacing. |
| `branded-card-application-form` | Customized digital reward card application. | The trial form lacks the specific branded-card application fields and proof flow. | `cta-trial-full-form`. | Name, email, business name, website, business type, consent, success/error/loading states. | Bitforms application page with proof images. | Application conversion will either lose fields or invent form variants. |
| `thank-you-confirmation-section` | All thank-you pages. | No approved confirmation/next-steps section exists. | `testimonial-single`, `cta-with-button-email`. | Confirmation heading, next steps, support links, optional image, optional CTA. | Three thank-you pages. | Confirmation pages will become generic success cards. |
| `faq-index-search` | Full FAQ page. | `faq-accordion` handles a section, not a category/search FAQ index page. | `faq-accordion`. | Search input, category filters, accordion groups, keyboard navigation, open states. | FAQ page with categories and search-style content. | Full FAQ will be flattened into a weak accordion. |
| `blog-article-index` | Blog page. | No approved list/index pattern for article cards or empty-state article collections. | `features-grid`, `image-grid`. | Article card title/excerpt/date/category, pagination or empty state, accessible links. | Blog index page. | Blog listing will become a generic SaaS card grid. |
| `industry-use-case-card-grid` | Ideal-for page. | 24 industry image cards need approved layout and card behavior. | `features-grid`, `image-grid`. | Industry cards with image/icon/title/description/link, responsive grid, hover/focus states. | `ideal-for` page has 24 image-box widgets. | Agents will invent repeated image cards. |
| `pricing-page-matrix` | Price list page. | Current `pricing-section` supports simple plan cards, not six monthly/yearly tables. | `pricing-section`, `billing-toggle-button`, `comparison-table`. | Monthly/yearly grouping, 3+ plans, feature lists, disclaimers, CTA buttons, responsive stacking. | Price list has six price-table widgets. | Pricing will be oversimplified or visually wrong. |
| `external-embed-panel` / `question-embed-section` | Any Questions page and some booking/embed cases. | No approved iframe/embed wrapper exists. | `faq-accordion`, `cta-with-button-email`. | Iframe slot, title, fallback link, loading/error copy, accessible title. | Iframe widget page. | Embeds will be dropped into raw boxes with no design rules. |
| `knowledge-base-index` | Encyclopedia page. | BetterDocs shortcode/page index is not represented by current templates. | `blog-article-index` may overlap but docs need separate semantics. | Search, category groups, article links, empty/error states. | BetterDocs encyclopedia shortcode. | Docs pages will be indistinguishable from blog pages. |
| `coming-soon-section` or `coming-soon-template` | Elementor landing page 143. | Maintenance/coming-soon intent is not covered in approved templates. | `hero-main-section`. | Standalone/body-only decision, headline, optional date, optional CTA. | Coming Soon page. | Agents will create a one-off hero variant. |

## Missing Template Backlog

| Proposed template | Needed for | Required components before approval |
|---|---|---|
| `legal-policy-page.md` | Privacy, terms, acceptable use, subscription, cookie policies. | `legal-document-body`. |
| `article-page.md` or stronger `blog-document.md` approval path | Short and long article/explainer pages. | `article-body`. |
| `contact-page.md` | Contact page. | `contact-form-section`. |
| `newsletter-page.md` | Newsletter signup. | `newsletter-signup-section`. |
| `booking-demo-page.md` | Virtual meeting/demo booking. | `booking-demo-request-section`. |
| `application-form-page.md` | Branded card application. | `branded-card-application-form`. |
| `thank-you-page.md` | All thank-you pages. | `thank-you-confirmation-section`. |
| `faq-index-page.md` | Full FAQ page. | `faq-index-search`. |
| `blog-index-page.md` | Blog index. | `blog-article-index`. |
| `industry-index-page.md` | Ideal-for/industry page. | `industry-use-case-card-grid`. |
| `pricing-page.md` | Price list. | `pricing-page-matrix`. |
| `knowledge-base-index-page.md` | Encyclopedia. | `knowledge-base-index`. |
| `coming-soon-page.md` | Coming Soon page. | `coming-soon-section` or explicit decision to exclude. |

## Recommended Build Order

1. Build the foundation content components first: `article-body`,
   `legal-document-body`, and `thank-you-confirmation-section`.
2. Build form and conversion components: `contact-form-section`,
   `newsletter-signup-section`, `booking-demo-request-section`, and
   `branded-card-application-form`.
3. Build index/search components: `faq-index-search`, `blog-article-index`,
   and `knowledge-base-index`.
4. Build specialized marketing components: `industry-use-case-card-grid`,
   `pricing-page-matrix`, and `external-embed-panel`.
5. Decide whether `coming-soon-section` is in conversion scope or whether the
   old Elementor coming-soon page is excluded.

Each new component must follow `templates/new-component-request.md`: registry
entry, spec, screenshot/reference, library implementation, showcase specimen,
visual gate, interaction gate, production-fidelity gate, and explicit approval
before an LLM may use it.

## Conversion Gate Recommendation

Do not start full-site conversion yet.

Safe subset before new components:

- `https://loyaltymaster.com/`
- `https://loyaltymaster.com/electronic-rewards-2/`
- `https://loyaltymaster.com/our-turnkey-solution-how-it-works/`
- Product/marketing pages classified as ready with approved template but needs
  content mapping, if the outline stage proves all prose can be placed inside
  approved component copy.

Blocked subset:

- Legal/policy pages
- Forms and application pages
- FAQ/search/index pages
- Blog/encyclopedia/index pages
- Pricing page
- Ideal-for industry grid
- Thank-you pages
- Article/explainer pages that require long-form body copy

## Verification Notes

- Sitemap crawl accounted for all 42 discovered URLs.
- Browser audit removed global `header`, `nav`, and `footer` before classifying
  body content.
- No proposed page mapping uses unapproved component IDs.
- No converted normal page is allowed to include `navbar-glassmorphism` or
  `footer` by default.
- `https://loyaltymaster.com/bitforms/bitforms-file/` is excluded as a utility
  endpoint, not a page body.

## Rating

Rating: 9/10.

What would make it a 10: capture and store browser screenshots for every gap
category, then use those screenshots as the initial reference evidence when
building the missing components.
