const cart = document.querySelector(".cart");
const avatar = document.querySelector(".avatar");
const cartContainer = document.getElementById("cart-container");

// Change the cart image on mouseover
cart.addEventListener("mouseover", () => {
  cart.src = "./images/icon-cart-active.svg";
});

cart.addEventListener("mouseout", () => {
  cart.src = "./images/icon-cart.svg";
});

// Opens the checkout list when the clicked on the avatar image
avatar.addEventListener("click", () => {
  cartContainer.classList.toggle("open");
});

const images = document.querySelectorAll(".image");
const imagesClass = document.getElementsByClassName("image");
const mainImage = document.querySelector(".main-image");

// Changing the image src of the main image when a thumbnail image clicked
images.forEach((image) => {
  image.addEventListener("click", (e) => {
    mainImage.src = e.target.src;
  });
});

imagesClass[0].style.opacity = "0.5";
imagesClass[0].style.border = "3px solid hsl(26, 100%, 55%)";

function show(n) {
  for (let i = 0; i < imagesClass.length; i++) {
    imagesClass[i].style.opacity = "1";
    imagesClass[i].style.border = "0px solid hsl(26, 100%, 55%)";
  }
  imagesClass[n].style.opacity = "0.5";
  imagesClass[n].style.border = "3px solid hsl(26, 100%, 55%)";
}

// Setting up the bill card section
const count = document.getElementById("count");
const amount = document.querySelector(".amount"); // In the bill card
const total = document.querySelector(".total"); // In the bill card
const currentCartValue = document.querySelector(".current-cart");

let currentCount = 0;

function add(c) {
  currentCount += c;
  if (currentCount < 0) {
    currentCount = 0;
  }
  count.textContent = currentCount;
  amount.textContent = currentCount;
  currentCartValue.textContent = currentCount;
  total.textContent = `$${125 * currentCount}.00`;
}

// Checkout button section
const checkoutBtn = document.getElementById("checkout-button");
const billBoard = document.querySelector(".content");
const emptyMsg = document.querySelector(".empty");
const bin = document.querySelector(".bin");
const warning = document.querySelector(".warning");

function toggle() {
  billBoard.classList.toggle("flexOpen");
  emptyMsg.classList.toggle("flexHide");
}

checkoutBtn.addEventListener("click", () => {
  if (currentCount !== 0) {
    toggle();
    checkoutBtn.classList.add("btn-disable");
    currentCartValue.style.display = "block";
    warning.classList.remove("warn");
  } else {
    warning.classList.add("warn");
  }
});

bin.addEventListener("click", () => {
  toggle();
  checkoutBtn.classList.remove("btn-disable"); // Disable the btn
  currentCartValue.style.display = "none";
});

// slide show thumbnail section

const imagesSlideShow = document.querySelectorAll(".image-slide-show");
const mainImageSlideShow = document.querySelector(".main-image-slide-show");
const imagesSlideShowClass =
  document.getElementsByClassName("image-slide-show");

imagesSlideShow.forEach((slideImg) => {
  slideImg.addEventListener("click", (e) => {
    mainImageSlideShow.src = e.target.src;
  });
});

// Full image slide show thumbnail functionality

function showSlide(n) {
  for (let i = 0; i < imagesSlideShowClass.length; i++) {
    imagesSlideShowClass[i].style.opacity = "1";
    imagesSlideShowClass[i].style.border = "0px solid hsl(26, 100%, 55%)";
  }
  imagesSlideShowClass[n].style.border = "3px solid hsl(26, 100%, 55%)";
}

const pre = document.querySelector(".pre");
const next = document.querySelector(".next");

let slideIndex = 1;

function plusDivs(i) {
  slideIndex += i;
  if (slideIndex === 0) {
    slideIndex = 4;
  }
  if (slideIndex > 4) {
    slideIndex = 1;
  }
  mainImageSlideShow.src = `./images/image-product-${slideIndex}.jpg`;
}

const close = document.getElementById("close");
const slideShow = document.querySelector(".slide-show");

// Close button image src changes on mouseover
close.addEventListener("mouseover", () => {
  close.innerHTML = `<img src="./images/icon-close-active.svg" alt="Close">`;
});

close.addEventListener("mouseout", () => {
  close.innerHTML = `<img src="./images/icon-close.svg" alt="Close">`;
});

close.addEventListener("click", () => {
  slideShow.style.display = "none";
});

mainImage.addEventListener("click", () => {
  slideShow.style.display = "flex";
});

// Small Screen Slide Show

let slideIndexSmall = 1;
function plusDivsSmall(ii) {
  slideIndexSmall += ii;
  if (slideIndexSmall === 0) {
    slideIndexSmall = 4;
  }
  if (slideIndexSmall > 4) {
    slideIndexSmall = 1;
  }
  mainImage.src = `./images/image-product-${slideIndexSmall}.jpg`;
}

// Responsive Side Navigation bar in small screens

const sideNav = document.querySelector(".side-navigation");
const bars = document.getElementById("bars");
const sideNavClose = document.querySelector(".side-nav-close");

function openSideMenu() {
  sideNav.classList.toggle("openSide");
}

bars.addEventListener("click", openSideMenu);
sideNavClose.addEventListener("click", openSideMenu);

// Pasindu Codes
