const hambar = document.querySelector(".hambar");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hambar.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  links.forEach((link) => {
    link.classList.toggle("fade");
  });
});
// name localstorage
function passname() {
  let name = document.getElementById("name").value;
  localStorage.setItem("textvalue", name);
  return false;
}
// ---
window.addEventListener("load", () => {
  const preload = document.querySelector(".preload");
  preload.classList.add("preload-finish");
});
