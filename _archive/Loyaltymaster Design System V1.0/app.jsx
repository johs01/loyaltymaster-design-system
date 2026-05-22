// Reveal-on-scroll observer
(function setupReveal() {
  const apply = () => {
    const els = document.querySelectorAll("[data-reveal]");
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("is-visible");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    els.forEach((el) => io.observe(el));
  };
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => setTimeout(apply, 50));
  } else {
    setTimeout(apply, 50);
  }
})();

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <IndustryStrip />
      <Problem />
      <HowItWorks />
      <Features />
      <UseCases />
      <Testimonials />
      <Pricing />
      <FinalCTA />
      <Footer />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
