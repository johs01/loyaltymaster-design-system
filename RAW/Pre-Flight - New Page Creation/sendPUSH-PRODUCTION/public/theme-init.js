/**
 * Theme-mode bootstrap.
 *
 * Runs before first paint so the page does not flash the wrong theme.
 * Reads the saved preference from localStorage, falls back to the system
 * setting, then sets `data-theme-mode`, `data-theme`, and `color-scheme`
 * on <html>.
 *
 * Kept in a standalone file (not inlined in the React document) so that the site's
 * Content-Security-Policy can use `script-src 'self'` without needing a
 * per-release SHA-256 hash or a nonce. See SECURITY.md section 5.
 */
(() => {
  const key = "wf-theme-mode";
  const valid = new Set(["light", "dark"]);
  let mode = "";

  try {
    const stored = window.localStorage.getItem(key);
    if (valid.has(stored)) {
      mode = stored;
    }
  } catch (_error) {
    mode = "";
  }

  const systemDark =
    window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  const resolved = mode || (systemDark ? "dark" : "light");

  const root = document.documentElement;
  root.setAttribute("data-theme-mode", resolved);
  root.setAttribute("data-theme", resolved);
  root.style.colorScheme = resolved;
})();
