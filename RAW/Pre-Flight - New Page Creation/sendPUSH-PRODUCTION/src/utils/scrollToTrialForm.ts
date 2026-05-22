const TRIAL_FORM_ROUTE = "/design-system-template-page";
const TRIAL_FORM_SECTION_ID = "tenant-trial-cta";
const TRIAL_FORM_EMAIL_ID = "wf-tenant-email";

export function scrollToTrialForm(email?: string) {
  if (window.location.pathname !== TRIAL_FORM_ROUTE) {
    if (email) {
      try {
        window.sessionStorage.setItem("wf-pending-trial-email", email);
      } catch {
        // Continue navigation even when storage is unavailable.
      }
    }
    window.location.assign(`${TRIAL_FORM_ROUTE}#${TRIAL_FORM_SECTION_ID}`);
    return;
  }

  if (email) {
    const emailField = document.getElementById(TRIAL_FORM_EMAIL_ID) as HTMLInputElement | null;
    if (emailField) emailField.value = email;
  }
  document.getElementById(TRIAL_FORM_SECTION_ID)?.scrollIntoView({ behavior: "smooth" });
}
