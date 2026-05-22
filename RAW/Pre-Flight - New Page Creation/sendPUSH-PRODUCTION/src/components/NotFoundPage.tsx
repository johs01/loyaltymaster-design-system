import { useEffect, useRef, type CSSProperties } from "react";
import { motion } from "framer-motion";
import { navigate } from "../utils/navigate";

const DELOREAN_404_IMAGE =
  "https://res.cloudinary.com/loyaltymaster/image/upload/f_auto,q_auto/Back_to_the_future_de_lorean_cpwyhz";

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.13,
      delayChildren: 0.05,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 68,
      damping: 20,
    },
  },
};

const imageVariant = {
  hidden: { opacity: 0, scale: 0.96 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 48,
      damping: 20,
      delay: 0.25,
    },
  },
};

const btnShadowRest =
  "rgb(243, 125, 57) 0px 5px 0px 0px, rgba(48, 33, 39, 0.12) 0px 8px 14px 0px";
const btnShadowHover =
  "rgb(243, 125, 57) 0px 7px 0px 0px, rgba(48, 33, 39, 0.18) 0px 12px 18px 0px";
const btnShadowPress =
  "rgb(243, 125, 57) 0px 1px 0px 0px, rgba(48, 33, 39, 0.08) 0px 2px 4px 0px";

const headingFont =
  '"Rodger Bold", "Rodger Bold Placeholder", Arial, sans-serif';

export default function NotFoundPage() {
  const isHoveringBtn = useRef(false);

  useEffect(() => {
    const previous = document.title;
    document.title = "Page Not Found | sendPUSH";
    return () => {
      document.title = previous;
    };
  }, []);

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div
      id="not-found-main"
      className="min-h-screen w-full flex items-center justify-center overflow-hidden transition-colors duration-300"
      style={
        {
          "--font-heading": headingFont,
          backgroundColor: "rgb(254, 240, 233)",
          padding: "72px 0",
        } as CSSProperties
      }
    >
      <span
        aria-hidden="true"
        style={{
          position: "fixed",
          inset: 0,
          backgroundImage:
            "radial-gradient(ellipse 80% 60% at 50% 30%, rgba(252,184,39,0.13) 0%, rgba(243,125,57,0.06) 45%, transparent 80%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div
        className="relative z-10 mx-auto w-full grid items-center not-found-grid"
        style={{
          maxWidth: "1280px",
          paddingLeft: "48px",
          paddingRight: "48px",
          gridTemplateColumns: "minmax(0, 560px) minmax(0, 560px)",
          gap: "64px",
        }}
      >
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="flex flex-col items-start"
          aria-labelledby="not-found-heading"
        >
          <motion.p
            variants={fadeUp}
            style={{
              color: "rgb(151, 144, 147)",
              fontSize: "15px",
              lineHeight: "15px",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              fontWeight: 700,
              margin: "0 0 18px 0",
            }}
          >
            Page not found
          </motion.p>

          <motion.h1
            id="not-found-heading"
            variants={fadeUp}
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 700,
              fontSize: "clamp(64px, 10vw, 100px)",
              lineHeight: "1",
              letterSpacing: "-1px",
              color: "rgb(48, 33, 39)",
              margin: "0",
            }}
          >
            Error 404
          </motion.h1>

          <motion.span
            variants={fadeUp}
            aria-hidden="true"
            style={{
              display: "block",
              width: "56px",
              height: "4px",
              borderRadius: "99px",
              backgroundColor: "rgb(252, 184, 39)",
              margin: "24px 0 0 0",
            }}
          />

          <motion.div
            variants={imageVariant}
            initial="hidden"
            animate="show"
            style={{
              marginTop: "40px",
              width: "100%",
            }}
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <img
                src={DELOREAN_404_IMAGE}
                alt="DeLorean time machine from Back to the Future"
                style={{
                  display: "block",
                  width: "100%",
                  maxWidth: "540px",
                  height: "auto",
                  objectFit: "contain",
                  filter: "drop-shadow(0 24px 32px rgba(48,33,39,0.18))",
                }}
              />
            </motion.div>
          </motion.div>
        </motion.section>

        <motion.section
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="flex flex-col items-start not-found-right"
          style={{ paddingTop: "16px" }}
        >
          <motion.h2
            variants={fadeUp}
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 700,
              fontSize: "clamp(52px, 7vw, 80px)",
              lineHeight: "1",
              letterSpacing: "-0.5px",
              color: "rgb(48, 33, 39)",
              margin: "0",
            }}
          >
            Ooops.
          </motion.h2>

          <motion.p
            variants={fadeUp}
            style={{
              fontWeight: 700,
              fontSize: "22px",
              lineHeight: "30px",
              letterSpacing: "-0.3px",
              color: "rgb(48, 33, 39)",
              margin: "28px 0 0 0",
              maxWidth: "460px",
            }}
          >
            You must be from the Future?
            <br />
            As we still need to create this page.
          </motion.p>

          <motion.p
            variants={fadeUp}
            style={{
              fontSize: "18px",
              lineHeight: "28px",
              letterSpacing: "-0.3px",
              fontWeight: 400,
              color: "rgb(111, 99, 104)",
              margin: "16px 0 0 0",
              maxWidth: "420px",
            }}
          >
            To fix this problem, please click the time travel button below.
          </motion.p>

          <motion.div variants={fadeUp} style={{ marginTop: "40px" }}>
            <button
              type="button"
              onClick={handleGoHome}
              aria-label="Go to home page"
              onMouseEnter={(e) => {
                isHoveringBtn.current = true;
                const el = e.currentTarget;
                el.style.transform = "translateY(-2px)";
                el.style.boxShadow = btnShadowHover;
                const shimmer = el.querySelector("[data-shimmer]") as HTMLElement | null;
                if (shimmer) shimmer.style.transform = "translateX(100%)";
              }}
              onMouseLeave={(e) => {
                isHoveringBtn.current = false;
                const el = e.currentTarget;
                el.style.transform = "translateY(-1.5px)";
                el.style.boxShadow = btnShadowRest;
                const shimmer = el.querySelector("[data-shimmer]") as HTMLElement | null;
                if (shimmer) {
                  shimmer.style.transition = "none";
                  shimmer.style.transform = "translateX(-100%)";
                  requestAnimationFrame(() => {
                    if (shimmer) shimmer.style.transition = "transform 0.7s ease";
                  });
                }
              }}
              onMouseDown={(e) => {
                const el = e.currentTarget;
                el.style.transform = "translateY(4px)";
                el.style.boxShadow = btnShadowPress;
              }}
              onMouseUp={(e) => {
                const el = e.currentTarget;
                if (isHoveringBtn.current) {
                  el.style.transform = "translateY(-2px)";
                  el.style.boxShadow = btnShadowHover;
                } else {
                  el.style.transform = "translateY(-1.5px)";
                  el.style.boxShadow = btnShadowRest;
                }
              }}
              style={{
                position: "relative",
                isolation: "isolate",
                overflow: "hidden",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "58px",
                whiteSpace: "nowrap",
                backgroundColor: "rgb(252, 184, 39)",
                color: "rgb(42, 31, 22)",
                fontSize: "18px",
                lineHeight: "18px",
                letterSpacing: "0.08em",
                fontWeight: 700,
                textTransform: "uppercase",
                transform: "translateY(-1.5px)",
                boxShadow: btnShadowRest,
                border: "1px solid rgba(243, 125, 57, 0.48)",
                borderRadius: "999px",
                padding: "0 32px",
                cursor: "pointer",
                transition:
                  "transform 0.28s cubic-bezier(0.2,0.8,0.2,1), box-shadow 0.28s cubic-bezier(0.2,0.8,0.2,1)",
                willChange: "transform, box-shadow",
              }}
            >
              <span
                data-shimmer=""
                aria-hidden="true"
                style={{
                  position: "absolute",
                  display: "block",
                  backgroundImage:
                    "linear-gradient(112deg, rgba(255,255,255,0) 14%, rgba(255,255,255,0.36) 44%, rgba(255,255,255,0) 68%)",
                  top: 0,
                  bottom: 0,
                  left: "-20%",
                  width: "140%",
                  transform: "translateX(-100%)",
                  transition: "transform 0.7s ease",
                  pointerEvents: "none",
                  borderRadius: "999px",
                }}
              />
              <span style={{ position: "relative", zIndex: 10 }}>
                <span>GO TO HOME</span>
              </span>
            </button>
          </motion.div>
        </motion.section>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .not-found-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
            padding-left: 28px !important;
            padding-right: 28px !important;
          }
          .not-found-right {
            padding-top: 0 !important;
          }
        }
      `}</style>
    </div>
  );
}
