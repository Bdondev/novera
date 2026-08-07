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
