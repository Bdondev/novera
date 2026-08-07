const menuToggle = document.querySelector("[data-menu-toggle]");
const mobileMenu = document.querySelector("[data-mobile-menu]");

menuToggle?.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  mobileMenu?.classList.toggle("hidden", isOpen);
});

mobileMenu?.addEventListener("click", (event) => {
  if (!(event.target instanceof HTMLAnchorElement)) return;
  menuToggle?.setAttribute("aria-expanded", "false");
  mobileMenu.classList.add("hidden");
});

document.querySelector("[data-announcement-close]")?.addEventListener("click", (event) => {
  const announcement = event.currentTarget.closest("aside");
  announcement?.remove();
});

const productRail = document.querySelector("[data-product-rail]");
const previousButton = document.querySelector("[data-carousel-previous]");
const nextButton = document.querySelector("[data-carousel-next]");

if (productRail instanceof HTMLElement) {
  const getScrollAmount = () => {
    const card = productRail.querySelector(".product-card");
    if (!(card instanceof HTMLElement)) return productRail.clientWidth;

    const gap = Number.parseFloat(getComputedStyle(productRail).columnGap) || 0;
    return card.offsetWidth + gap;
  };

  const updateCarouselControls = () => {
    const maxScrollLeft = productRail.scrollWidth - productRail.clientWidth;
    const startOffset = Number.parseFloat(getComputedStyle(productRail).paddingInlineStart) || 0;
    const atStart = productRail.scrollLeft <= startOffset + 2;
    const atEnd = productRail.scrollLeft >= maxScrollLeft - 2;

    if (previousButton instanceof HTMLButtonElement) previousButton.disabled = atStart;
    if (nextButton instanceof HTMLButtonElement) nextButton.disabled = atEnd;
  };

  const scrollProducts = (direction) => {
    productRail.scrollBy({
      left: getScrollAmount() * direction,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth"
    });
  };

  previousButton?.addEventListener("click", () => scrollProducts(-1));
  nextButton?.addEventListener("click", () => scrollProducts(1));

  productRail.addEventListener("keydown", (event) => {
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
    event.preventDefault();
    scrollProducts(event.key === "ArrowRight" ? 1 : -1);
  });

  productRail.addEventListener("scroll", updateCarouselControls, { passive: true });
  new ResizeObserver(updateCarouselControls).observe(productRail);
  updateCarouselControls();
}
