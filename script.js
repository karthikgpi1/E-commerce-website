let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
}


let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
}


window.onscroll = () =>{
    searchForm.classList.remove('active');
    navbar.classList.remove('active');
} 

// home section swiper

var swiper = new Swiper(".home-slider", {
    
    // spaceBetween: 30,
    centeredSlides: true,
    loop:true,

    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });