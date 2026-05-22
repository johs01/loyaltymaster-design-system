const CLOUDINARY_CLOUD_NAME = "loyaltymaster";

export const CLOUDINARY_PLACEHOLDER_PUBLIC_ID = "image_placeholder-640-square_twvooa";

export const CLOUDINARY_PLACEHOLDER_URL =
  `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/f_auto,q_auto/${CLOUDINARY_PLACEHOLDER_PUBLIC_ID}`;

const EXTENSION_PATTERN = /\.(avif|gif|jpe?g|png|svg|webp)$/i;
const CLOUDINARY_TRANSFORMATION_PATTERN = /^[a-z]+_[^/]+(?:,[a-z]+_[^/]+)*$/i;

const legacySourceToPublicId: Record<string, string> = {
  "sendpush/Image02": "Image02_fjguh0",
  "sendpush/image placeholder-640-square": CLOUDINARY_PLACEHOLDER_PUBLIC_ID,
  "sendpush/Lady joining a loyalty program by scanning a QR Code":
    "Lady_joining_a_loyalty_program_by_scanning_a_QR_Code_xuwz32",
  "sendpush/Guy on a Bench reading a push notification":
    "Guy_on_a_Bench_reading_a_push_notification_dunbpi",
  "sendpush/Google logo": "Google_logo_xaut3w",
  "sendpush/Stripe Payment": "Stripe_Payment_tatsda",
  "sendpush/Google Pay Logo": "Google_Pay_Logo_b6egfd",
  "sendpush/Apple Pay Logo": "Apple_Pay_Logo_cpjnmu",
  "sendpush/AWS": "AWS_cnhzho",
  "sendpush/Digital Ocean": "Digital_Ocean_is2bzf",
  "sendpush/Clover POS Logo": "Clover_POS_Logo_gvtcns",
  "sendpush/Touch Bistro": "Touch_Bistro_vri44c",
  "sendpush/Toast integrated with Loyaltymaster": "Toast_integrated_with_Loyaltymaster_tmb3eq",
  "sendpush/Loyaltymaster is Make Ready": "Loyaltymaster_is_Make_Ready_maqg0o",
  "sendpush/Loyaltymaster is Zapier Ready": "Loyaltymaster_is_Zapier_Ready_ikpmoi",
  "sendpush/GDPR Ready": "GDPR_Ready_j1biu9",
  "sendpush/Awards1-3": "Awards1-3_ogsgms",
  "sendpush/Awards 4-6": "Awards_4-6_dflxze",
  "sendpush/Awards 7-9": "Awards_7-9_ghaijh",
  "sendpush/Back to the future de lorean": "Back_to_the_future_de_lorean_cpwyhz",

  // Missing from Cloudinary MCP asset data; use the confirmed placeholder until uploaded.
  "sendpush/Logos/sendPUSH Loyaltymaster Logo": CLOUDINARY_PLACEHOLDER_PUBLIC_ID,
};

function safeDecode(value: string) {
  try {
    return decodeURIComponent(value);
  } catch {
    return value;
  }
}

function normalizeSourceKey(src: string) {
  const [withoutQuery] = src.split(/[?#]/);
  let path = withoutQuery.trim();

  if (/^https?:\/\//i.test(path)) {
    const url = new URL(path);

    if (url.hostname === "res.cloudinary.com") {
      const parts = url.pathname.split("/").filter(Boolean);
      const uploadIndex = parts.findIndex((part) => part === "upload");
      const publicParts = uploadIndex >= 0 ? parts.slice(uploadIndex + 1) : parts;

      while (
        publicParts[0] &&
        (publicParts[0].startsWith("v") || CLOUDINARY_TRANSFORMATION_PATTERN.test(publicParts[0]))
      ) {
        publicParts.shift();
      }

      path = publicParts.join("/");
    } else {
      path = url.pathname;
    }
  }

  return safeDecode(path.replace(/^\/+/, "")).replace(EXTENSION_PATTERN, "");
}

export function resolveCloudinaryPublicId(src: string) {
  return legacySourceToPublicId[normalizeSourceKey(src)] ?? src;
}
