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
window.addEventListener("load", () => {
  const preload = document.querySelector(".preload");
  preload.classList.add("preload-finish");
});
function calc() {
  all = 0;
  let total =
    parseInt(document.getElementById("oral1").value) +
    parseInt(document.getElementById("hand1").value) +
    parseInt(document.getElementById("exam1").value) +
    parseInt(document.getElementById("exam2").value) +
    parseInt(document.getElementById("oral2").value) +
    parseInt(document.getElementById("hand2").value) +
    parseInt(document.getElementById("presen1").value) +
    parseInt(document.getElementById("exam3").value) +
    parseInt(document.getElementById("exam4").value);
  document.getElementById("total2").innerHTML = all += parseInt(total);
}
