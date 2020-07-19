// Ham Bar
const hambar = document.querySelector(".hambar");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hambar.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  links.forEach((link) => {
    link.classList.toggle("fade");
  });
});
// ---
function calc() {
  all = 0;

  let total =
    parseInt(document.getElementById("oral10").value) +
    parseInt(document.getElementById("hand10").value) +
    parseInt(document.getElementById("exam10").value) +
    parseInt(document.getElementById("exam20").value) +
    parseInt(document.getElementById("oral20").value) +
    parseInt(document.getElementById("hand20").value) +
    parseInt(document.getElementById("presen10").value) +
    parseInt(document.getElementById("exam30").value) +
    parseInt(document.getElementById("exam40").value);

  localStorage.setItem("totalmarks10", parseInt(total));
  localStorage.setItem(
    "oral10",
    parseInt(document.getElementById("oral10").value)
  );
  localStorage.setItem(
    "hand10",
    parseInt(document.getElementById("hand10").value)
  );
  localStorage.setItem(
    "exam10",
    parseInt(document.getElementById("exam10").value)
  );
  localStorage.setItem(
    "exam20",
    parseInt(document.getElementById("exam20").value)
  );
  localStorage.setItem(
    "oral20",
    parseInt(document.getElementById("oral20").value)
  );
  localStorage.setItem(
    "hand20",
    parseInt(document.getElementById("hand20").value)
  );
  localStorage.setItem(
    "presen10",
    parseInt(document.getElementById("presen10").value)
  );
  localStorage.setItem(
    "exam30",
    parseInt(document.getElementById("exam30").value)
  );
  localStorage.setItem(
    "exam40",
    parseInt(document.getElementById("exam40").value)
  );
}
window.addEventListener("load", () => {
  const preload = document.querySelector(".preload");
  preload.classList.add("preload-finish");
});
