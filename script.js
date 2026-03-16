document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".nav-toggle");
  const body = document.body;
  const navLinks = document.querySelectorAll(".nav-menu a");

  if (!toggle) return;

  const setOpen = (open) => {
    toggle.setAttribute("aria-expanded", String(open));
    body.classList.toggle("nav-open", open);
  };

  toggle.addEventListener("click", () => {
    const expanded = toggle.getAttribute("aria-expanded") === "true";
    setOpen(!expanded);
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      setOpen(false);
    });
  });
});
