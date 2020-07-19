const hambar = document.querySelector(".hambar");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hambar.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  links.forEach((link) => {
    link.classList.toggle("fade");
  });
});
// // name localstorage
// function passname() {
//   let name = document.getElementById("name").value;
//   localStorage.setItem("textvalue", name);
//   return false;
// }
// // ---
function check() {
  let p1 = document.getElementById("pass1").value;
  let p2 = document.getElementById("pass2").value;
  if (p1 !== p2 || (p1 == "" && p2 == "")) {
    alert("اااا");
  }
}
