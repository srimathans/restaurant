'use strict';

const hamburger = document.querySelector(".hamburger");
const mainNavList = document.querySelector(".main-nav-list");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    mainNavList.classList.toggle("active");
  });


const profilePhotos = document.querySelectorAll('.profile-photo');

profilePhotos.forEach(item => {
  item.addEventListener('click', function() {
  item.classList.toggle('enlarged');
  });
});
 
