const previewGroups = {
  foundations: [
    {
      title: "Primary Colors",
      description: "Yellow, orange, blue, ink, and the soft yellow accent that anchor the system.",
      file: "preview/colors-primary.html",
      search: "primary colors yellow orange blue ink accent soft yellow palette",
      height: 166,
    },
    {
      title: "Surface Colors",
      description: "Peach, cyan, salmon, yellow, and panel surfaces used to alternate sections.",
      file: "preview/colors-surfaces.html",
      search: "surface colors peach cyan salmon yellow panel section backgrounds",
      height: 166,
    },
    {
      title: "Text & Tag Colors",
      description: "Ink, muted, subtle, and tag fill values for copy hierarchy and chips.",
      file: "preview/colors-text.html",
      search: "text colors ink muted subtle tag",
      height: 166,
    },
    {
      title: "Feedback Colors",
      description: "Error, warning, success, and info pairs with their matching tinted backgrounds.",
      file: "preview/colors-feedback.html",
      search: "feedback colors error warning success info alerts",
      height: 170,
    },
    {
      title: "Rodger Specimen",
      description: "The bundled display family across regular, italic, bold, bold italic, and black.",
      file: "preview/type-specimen.html",
      search: "rodger specimen display type typography family italic bold black",
      height: 212,
    },
    {
      title: "Display Stats",
      description: "Rodger regular numerals for stat values and short pricing numbers.",
      file: "preview/type-display.html",
      search: "type display stats numerals pricing rodger regular",
      height: 152,
    },
    {
      title: "H1 Scale",
      description: "Primary hero headline sizing, spacing, and letter-spacing rules.",
      file: "preview/type-h1.html",
      search: "h1 headline hero scale rodger bold",
      height: 136,
    },
    {
      title: "H2 / H3 Scale",
      description: "Section and card-heading sizes for the marketing flow.",
      file: "preview/type-h2-h3.html",
      search: "h2 h3 section heading card title scale",
      height: 166,
    },
    {
      title: "Body & Eyebrow",
      description: "Onest sentence-case body text with the uppercase eyebrow treatment above sections.",
      file: "preview/type-body.html",
      search: "body eyebrow onest uppercase text",
      height: 176,
    },
    {
      title: "Weight Range",
      description: "The full Rodger weight spread from thin through black.",
      file: "preview/type-weights.html",
      search: "type weights rodger thin regular semibold bold black",
      height: 314,
    },
    {
      title: "Spacing Rhythm",
      description: "4-based spacing ladder plus the 56, 72, and 84 section paddings.",
      file: "preview/spacing.html",
      search: "spacing rhythm section padding gaps 4 8 12 16 24 84",
      height: 208,
    },
    {
      title: "Radius Tokens",
      description: "8, 12, 16, 20, pill, and the small 7px brand-dot rounding.",
      file: "preview/radii.html",
      search: "radii radius tokens pill 8 12 16 20 brand dot",
      height: 170,
    },
    {
      title: "Shadow Tokens",
      description: "Base card, hover card, and badge shadows used through the system.",
      file: "preview/shadows.html",
      search: "shadows card base hover badge",
      height: 178,
    },
    {
      title: "Motion Tokens",
      description: "220ms, 280ms, and 560ms timings with the standard and gentle easing curves.",
      file: "preview/motion.html",
      search: "motion timings easing reveal hover 220 280 560",
      height: 176,
    },
    {
      title: "Section Backgrounds",
      description: "The section tint sequence from peach hero through ink final CTA.",
      file: "preview/section-bgs.html",
      search: "section backgrounds peach cyan salmon yellow panel ink",
      height: 160,
    },
  ],
  assets: [
    {
      title: "Logo System",
      description: "Primary lockup, wordmark, chevron treatment, and favicon.",
      file: "preview/logos.html",
      search: "logos wordmark chevron favicon lockup brand assets",
      height: 150,
    },
    {
      title: "Partner Marks",
      description: "Filtered grayscale integrations and platform badges for proof strips.",
      file: "preview/partners.html",
      search: "partners integrations stripe apple pay google pay aws toast clover zapier",
      height: 160,
    },
  ],
  components: [
    {
      title: "Buttons",
      description: "Primary yellow pill, transparent secondary, and dark utility variant.",
      file: "preview/buttons.html",
      search: "buttons primary secondary dark cta pill",
      height: 134,
    },
    {
      title: "Form Fields",
      description: "Labeled inputs, warm-light fills, and tinted error states.",
      file: "preview/form-fields.html",
      search: "form fields input labels error validation",
      height: 138,
    },
    {
      title: "Email CTA",
      description: "The signature email capture shell with the inset yellow treatment.",
      file: "preview/email-cta.html",
      search: "email cta capture shell form start free",
      height: 130,
    },
    {
      title: "Checklist",
      description: "Square yellow checks paired with direct benefit-led copy.",
      file: "preview/checklist.html",
      search: "checklist checkmarks benefits yellow",
      height: 152,
    },
    {
      title: "Toggle & Tags",
      description: "Billing toggle state, 30% off chip, and small status tags.",
      file: "preview/toggle-tags.html",
      search: "toggle tags chips pricing yearly monthly beta new",
      height: 138,
    },
    {
      title: "Icons",
      description: "Outline icons with rounded terminals and a 1.7-ish stroke rhythm.",
      file: "preview/icons.html",
      search: "icons outline svg mail phone pin calendar sun moon chevron",
      height: 182,
    },
    {
      title: "Glass Nav",
      description: "Blurred pill shell, center links, and the compact CTA.",
      file: "preview/nav-glass.html",
      search: "glass nav navigation sticky header blur pill",
      height: 124,
    },
    {
      title: "Feature Cards",
      description: "White cards with gradient icon tiles and short noun-phrase headings.",
      file: "preview/feature-cards.html",
      search: "feature cards icon tiles segments triggers calendar",
      height: 144,
    },
    {
      title: "Process Cards",
      description: "Tinted step cards for Invite, Segment, and Send.",
      file: "preview/process-cards.html",
      search: "process cards invite segment send steps",
      height: 144,
    },
    {
      title: "Pricing Cards",
      description: "Three tiers with the warm highlighted middle plan treatment.",
      file: "preview/pricing-cards.html",
      search: "pricing cards starter pro scale most popular",
      height: 188,
    },
    {
      title: "Testimonial Cards",
      description: "Stars, italic quote body, and a compact operator identity block.",
      file: "preview/testimonial.html",
      search: "testimonials reviews stars quotes cards",
      height: 160,
    },
    {
      title: "FAQ Accordion",
      description: "Single-column questions with the circular chevron control.",
      file: "preview/faq.html",
      search: "faq accordion questions answers chevron",
      height: 180,
    },
  ],
};

const filterLabels = {
  all: "Across previews and section demos",
  foundations: "In foundations",
  assets: "In assets",
  components: "In components",
  sections: "In sections",
};

function createPreviewCard(item, group) {
  const card = document.createElement("article");
  card.className = "preview-card filterable reveal";
  card.dataset.group = group;
  card.dataset.search = `${item.title.toLowerCase()} ${item.description.toLowerCase()} ${item.search}`;
  card.style.setProperty("--frame-height", `${item.height}px`);

  card.innerHTML = `
    <div class="preview-card__meta">
      <div>
        <span class="meta-chip meta-chip--${group}">${group.slice(0, -1) || group}</span>
        <h3 class="preview-card__title">${item.title}</h3>
        <p class="preview-card__text">${item.description}</p>
      </div>
      <a class="preview-card__open" href="${item.file}" target="_blank" rel="noreferrer">Open preview</a>
    </div>
    <div class="preview-frame">
      <iframe src="${item.file}" title="${item.title}" loading="lazy"></iframe>
    </div>
  `;

  return card;
}

function renderPreviewCards() {
  const gridMap = {
    foundations: document.getElementById("foundationsGrid"),
    assets: document.getElementById("assetsGrid"),
    components: document.getElementById("componentsGrid"),
  };

  Object.entries(previewGroups).forEach(([group, items]) => {
    const grid = gridMap[group];
    if (!grid) return;
    items.forEach((item) => {
      grid.appendChild(createPreviewCard(item, group));
    });
  });
}

function setupThemeToggle() {
  const html = document.documentElement;
  const toggle = document.getElementById("themeToggle");
  const media = window.matchMedia("(prefers-color-scheme: dark)");
  const stored = window.localStorage.getItem("sendpush-showcase-theme");

  const setTheme = (theme) => {
    const dark = theme === "dark";
    if (dark) {
      html.setAttribute("data-theme", "dark");
    } else {
      html.removeAttribute("data-theme");
    }
    toggle.textContent = dark ? "Light mode" : "Dark mode";
    toggle.setAttribute("aria-pressed", String(dark));
  };

  setTheme(stored || (media.matches ? "dark" : "light"));

  toggle.addEventListener("click", () => {
    const dark = html.getAttribute("data-theme") === "dark";
    const next = dark ? "light" : "dark";
    window.localStorage.setItem("sendpush-showcase-theme", next);
    setTheme(next);
  });
}

function setupFiltering() {
  const searchInput = document.getElementById("catalogSearch");
  const filterButtons = Array.from(document.querySelectorAll(".filter-chip"));
  const resultCount = document.getElementById("resultCount");
  const resultLabel = document.getElementById("resultLabel");
  const emptyState = document.getElementById("emptyState");

  const state = {
    filter: "all",
    query: "",
  };

  const matchesQuery = (value, query) => {
    if (!query) return true;
    return query
      .split(/\s+/)
      .filter(Boolean)
      .every((part) => value.includes(part));
  };

  const applyFilter = () => {
    const items = Array.from(document.querySelectorAll(".filterable"));
    let visible = 0;

    items.forEach((item) => {
      const group = item.dataset.group || "";
      const searchText = item.dataset.search || item.textContent.toLowerCase();
      const matchesGroup = state.filter === "all" || group === state.filter;
      const show = matchesGroup && matchesQuery(searchText, state.query);
      item.hidden = !show;
      if (show) visible += 1;
    });

    document.querySelectorAll("[data-cluster]").forEach((cluster) => {
      const anyVisible = Array.from(cluster.querySelectorAll(".filterable")).some((item) => !item.hidden);
      cluster.hidden = !anyVisible;
      const section = cluster.closest(".catalog-section, .sections-stage");
      if (section) {
        section.hidden = !anyVisible;
      }
    });

    emptyState.hidden = visible !== 0;
    resultCount.textContent = `${visible} match${visible === 1 ? "" : "es"}`;
    resultLabel.textContent = filterLabels[state.filter];
  };

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      state.filter = button.dataset.filter;
      filterButtons.forEach((chip) => {
        chip.classList.toggle("is-active", chip === button);
      });
      applyFilter();
    });
  });

  searchInput.addEventListener("input", (event) => {
    state.query = event.target.value.trim().toLowerCase();
    applyFilter();
  });

  applyFilter();
}

function setupBillingToggle() {
  const buttons = Array.from(document.querySelectorAll("[data-billing]"));
  const prices = Array.from(document.querySelectorAll("[data-price]"));

  const setBilling = (mode) => {
    buttons.forEach((button) => {
      const active = button.dataset.billing === mode;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-selected", String(active));
    });

    prices.forEach((price) => {
      const nextValue = price.dataset[mode];
      if (nextValue) {
        price.textContent = `$${nextValue}`;
      }
    });
  };

  buttons.forEach((button) => {
    button.addEventListener("click", () => setBilling(button.dataset.billing));
  });

  setBilling("yearly");
}

function setupAccordion() {
  const items = Array.from(document.querySelectorAll(".faq-item"));

  items.forEach((item) => {
    const button = item.querySelector(".faq-button");
    const panel = item.querySelector(".faq-panel");
    if (!button || !panel) return;

    button.addEventListener("click", () => {
      const isOpen = item.classList.contains("is-open");

      items.forEach((entry) => {
        const entryButton = entry.querySelector(".faq-button");
        const entryPanel = entry.querySelector(".faq-panel");
        entry.classList.remove("is-open");
        if (entryButton) entryButton.setAttribute("aria-expanded", "false");
        if (entryPanel) entryPanel.hidden = true;
      });

      if (!isOpen) {
        item.classList.add("is-open");
        button.setAttribute("aria-expanded", "true");
        panel.hidden = false;
      }
    });
  });
}

function setupReveal() {
  const revealItems = Array.from(document.querySelectorAll(".reveal"));
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  revealItems.forEach((item, index) => {
    const order = Number(item.dataset.revealOrder || index % 4);
    item.style.setProperty("--reveal-delay", `${order * 80}ms`);
  });

  if (reduceMotion.matches) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealItems.forEach((item) => observer.observe(item));
}

renderPreviewCards();
setupThemeToggle();
setupFiltering();
setupBillingToggle();
setupAccordion();
setupReveal();
