const mainImg = document.querySelector("#mainimg");
const smallImgs = document.querySelectorAll(".small-img");

smallImgs.forEach((smallImg) => {
  smallImg.addEventListener("click", () => {
    mainImg.src = smallImg.src;
  });
});
