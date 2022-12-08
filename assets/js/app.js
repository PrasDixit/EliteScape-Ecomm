const bar = document.querySelector("#bar");
const nav = document.querySelector("#navbar");
const close = document.querySelector("#close");

/* -----Menubar----- */

//* Display
bar.addEventListener("click", () => {
  nav.classList.add("active");
});

//* Close
close.addEventListener("click", () => {
  nav.classList.remove("active");
});
