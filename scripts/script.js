const toggle = document.getElementById("darkToggle");
const body = document.body;

if (localStorage.getItem("mode") === "dark") {
  body.classList.add("dark");
  toggle.checked = true;
}

toggle.addEventListener("change", function () {
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    localStorage.setItem("mode", "dark");
  } else {
    localStorage.setItem("mode", "light");
  }
});

/* ===== HAMBURGER MENU ===== */
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

/* tutup menu setelah klik */
navMenu.querySelectorAll("").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });
});
