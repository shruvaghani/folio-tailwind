/**
 * Animate scroll to top button in/off view
 */

const backTop = document.getElementById("backTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backTop.classList.remove(
      "opacity-0",
      "translate-y-14",
      "pointer-events-none"
    );
    backTop.classList.add(
      "opacity-100",
      "translate-y-0",
    );
  } else {
    backTop.classList.add(
      "opacity-0",
      "translate-y-14",
      "pointer-events-none"
    );
    backTop.classList.remove(
      "opacity-100",
      "translate-y-0",
    );
  }
});

backTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

