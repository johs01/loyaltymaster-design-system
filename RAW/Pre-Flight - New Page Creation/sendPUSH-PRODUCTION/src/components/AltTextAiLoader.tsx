"use client";

import { useEffect } from "react";

const ALTTEXTAI_SCRIPT_ID = "alttextai-ujs";
const ALTTEXTAI_SCRIPT_SRC =
  "https://ujs.alttext.ai/alttextai-ujs.js?site-key=2b7ef6439f08b33c";

export default function AltTextAiLoader() {
  useEffect(() => {
    if (document.getElementById(ALTTEXTAI_SCRIPT_ID)) return;

    const script = document.createElement("script");
    script.id = ALTTEXTAI_SCRIPT_ID;
    script.src = ALTTEXTAI_SCRIPT_SRC;
    script.async = true;
    document.head.appendChild(script);
  }, []);

  return null;
}
