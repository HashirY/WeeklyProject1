let togglebtn = document.querySelector(".togglebtn");
let nav = document.querySelector(".navlinks");
let links = document.querySelector(".navlinks li");

togglebtn.addEventListener("click", function () {
  togglebtn.classList.toggle("click");
  nav.classList.toggle("open");
});

let typed = new Typed(".input", {
  strings: ["Student", "Problem Solver", "Web Developer"],
  typeSpeed: 70,
  backSpeed: 55,
  loop: true,
});
