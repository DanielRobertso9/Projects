var emailInput = document.querySelector("#email");
var signUpBtn = document.querySelector("#sign-up");
var signUpForm = document.querySelector(".email-sign-up");
var footer = document.querySelector("footer");
var cartCount = 0;
var cart = document.querySelector("#cart");
var mesa = document.querySelector("button");

function addToCart() {
  cartCount += 1;
  cart.textContent = cartCount;
  console.log(cartCount);
}

function emailSubmit() {
  var confirmtionMsg = document.createElement("p");
  confirmtionMsg.textContent =
    "Thank You, " + emailInput.value + " for signing up.";
  signUpForm.remove();
  footer.appendChild(confirmtionMsg);
}

signUpBtn.addEventListener("click", emailSubmit);

let slideIndex = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
let slideId = [
  "slide1",
  "slide2",
  "slide3",
  "slide4",
  "slide5",
  "slide6",
  "slide7",
  "slide8",
  "slide9",
  "slide10",
  "slide11",
  "slide12"
];
showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);
showSlides(1, 3);
showSlides(1, 4);
showSlides(1, 5);
showSlides(1, 6);
showSlides(1, 7);
showSlides(1, 8);
showSlides(1, 9);
showSlides(1, 10);
showSlides(1, 11);

function plusSlides(n, no) {
  showSlides((slideIndex[no] += n), no);
}

function showSlides(n, no) {
  let i;
  let x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {
    slideIndex[no] = 1;
  }
  if (n < 1) {
    slideIndex[no] = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex[no] - 1].style.display = "block";
}
