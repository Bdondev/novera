const menuToggle = document.querySelector("[data-menu-toggle]");
const mobileMenu = document.querySelector("[data-mobile-menu]");
const menuLabel = document.querySelector("[data-menu-label]");
const siteHeader = document.querySelector("[data-site-header]");

let scrollFrame = 0;

const updateHeaderOnScroll = () => {
  scrollFrame = 0;
  siteHeader?.classList.toggle("site-header--scrolled", window.scrollY > 24);
};

window.addEventListener(
  "scroll",
  () => {
    if (scrollFrame) return;
    scrollFrame = window.requestAnimationFrame(updateHeaderOnScroll);
  },
  { passive: true }
);

updateHeaderOnScroll();

const setMenuState = (isOpen) => {
  menuToggle?.setAttribute("aria-expanded", String(isOpen));
  mobileMenu?.classList.toggle("hidden", !isOpen);
  if (menuLabel) menuLabel.textContent = isOpen ? "Close menu" : "Open menu";
};

menuToggle?.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  setMenuState(!isOpen);
});

mobileMenu?.addEventListener("click", (event) => {
  if (!(event.target instanceof HTMLAnchorElement)) return;
  setMenuState(false);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && menuToggle?.getAttribute("aria-expanded") === "true") {
    setMenuState(false);
    menuToggle.focus();
  }
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

const filterButtons = [...document.querySelectorAll("[data-filter]")];
const curatedProducts = [...document.querySelectorAll("[data-product-category]")];
const filterStatus = document.querySelector("[data-filter-status]");

const filterCuratedProducts = (category) => {
  let visibleCount = 0;

  curatedProducts.forEach((product) => {
    const isVisible = category === "all" || product.dataset.productCategory === category;
    product.hidden = !isVisible;
    if (isVisible) visibleCount += 1;
  });

  filterButtons.forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.filter === category));
  });

  if (filterStatus) {
    const categoryName = category === "all" ? "all" : category;
    filterStatus.textContent = `Showing ${visibleCount} ${categoryName} ${visibleCount === 1 ? "product" : "products"}.`;
  }
};

filterButtons.forEach((button, index) => {
  button.addEventListener("click", () => filterCuratedProducts(button.dataset.filter));

  button.addEventListener("keydown", (event) => {
    if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
    event.preventDefault();

    let nextIndex = index;
    if (event.key === "ArrowLeft") nextIndex = (index - 1 + filterButtons.length) % filterButtons.length;
    if (event.key === "ArrowRight") nextIndex = (index + 1) % filterButtons.length;
    if (event.key === "Home") nextIndex = 0;
    if (event.key === "End") nextIndex = filterButtons.length - 1;
    filterButtons[nextIndex].focus();
  });
});
