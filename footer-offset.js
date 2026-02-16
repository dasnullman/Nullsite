(function () {
  function updateFooterOffset() {
    const footer = document.getElementById("footer");
    if (!footer) {
      return;
    }

    const footerHeight = Math.ceil(footer.getBoundingClientRect().height);
    document.documentElement.style.setProperty("--footer-offset", `${footerHeight + 16}px`);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", updateFooterOffset, { once: true });
  } else {
    updateFooterOffset();
  }

  window.addEventListener("resize", updateFooterOffset, { passive: true });

  if (window.ResizeObserver) {
    const footer = document.getElementById("footer");
    if (footer) {
      const footerObserver = new ResizeObserver(updateFooterOffset);
      footerObserver.observe(footer);
    }
  }
})();
