//TODO ຕົວປ່ຽນເກັບຂໍ້ມູນທີ່ອ້າງອີງມາຈາກຟາຍ Index
const switchToggle = document.querySelector('input[type="checkbox"]');
const toggleIcon = document.getElementById("toggle-icon");
const nav = document.getElementById("nav");
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");

//TODO ຟັງຊັ້ນຫຼັກໃນການສະວິດໂໝດ
function switchMode(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    darkMode();
    imageSwitchMode("dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    lightMode();
    imageSwitchMode("light");
  }
}
function darkMode() {
  console.log("DarkMode");
  toggleIcon.children[0].textContent = "ໂໝດກາງຄືນ";
  toggleIcon.children[1].classList.replace("fa-sun", "fa-moon");
  nav.style.backgroundColor = "rgb(0 0 0 / 50%)";
}
function lightMode() {
  console.log("LightMode");
  toggleIcon.children[0].textContent = "ໂໝດກາງເວັນ";
  toggleIcon.children[1].classList.replace("fa-moon", "fa-sun");
  nav.style.backgroundColor = "rgb(255 255 255 / 50%)";
}
function imageSwitchMode(mode) {
  image1.src = `../IMG/web_dev_${mode}.svg`;
  image2.src = `../IMG/dev_program_${mode}.svg`;
  image3.src = `../IMG/freelance_${mode}.svg`;
}

//TODO ເອົາຟັງຊັ້ນທັງໝົດມາໃສ່ໃນປຸ່ມກົດ
switchToggle.addEventListener("change", switchMode);

//* Script for Toggle Menu

var navLinks = document.getElementById("navLinks");

function showMenu() {
  navLinks.style.left = "0";
}
function hideMenu() {
  navLinks.style.left = "-200px";
}
