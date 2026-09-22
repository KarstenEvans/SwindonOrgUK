(() => {
  "use strict";

  const DEFAULT_POPUP_WIDTH = 900;
  const DEFAULT_POPUP_HEIGHT = 760;

  function popupFeatures(width, height) {
    const availableWidth = window.screen && window.screen.availWidth ? window.screen.availWidth : width;
    const availableHeight = window.screen && window.screen.availHeight ? window.screen.availHeight : height;
    const left = Math.max(0, Math.round((availableWidth - width) / 2));
    const top = Math.max(0, Math.round((availableHeight - height) / 2));

    return [
      "popup=yes",
      "width=" + width,
      "height=" + height,
      "left=" + left,
      "top=" + top,
      "resizable=yes",
      "scrollbars=yes"
    ].join(",");
  }

  function handlePopupClick(event) {
    const link = event.target.closest("a[data-swindon-popup]");
    if (!link) return;
    if (event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;

    const width = Number(link.dataset.popupWidth) || DEFAULT_POPUP_WIDTH;
    const height = Number(link.dataset.popupHeight) || DEFAULT_POPUP_HEIGHT;
    const name = link.target && link.target !== "_blank" ? link.target : "swindonPopup";
    const popup = window.open(link.href, name, popupFeatures(width, height));

    if (popup) {
      event.preventDefault();
      popup.focus();
    }
  }

  async function loadSharedFooter() {
    const slots = document.querySelectorAll("[data-site-footer]");
    if (!slots.length) return;

    try {
      const response = await fetch("/footer.html", { cache: "no-cache" });
      if (!response.ok) throw new Error("Footer request failed");
      const html = await response.text();
      slots.forEach(slot => {
        slot.innerHTML = html;
      });
    } catch (error) {
      // Keep any fallback footer already present in the page.
    }
  }

  document.addEventListener("click", handlePopupClick);

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", loadSharedFooter, { once: true });
  } else {
    loadSharedFooter();
  }
})();
