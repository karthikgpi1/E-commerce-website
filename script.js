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


// products section starts
    let filterBtn = document.querySelectorAll('.filter-buttons .buttons');
    let filterItem = document.querySelectorAll('.products .box-container .box');

    filterBtn.forEach(button =>{
        button.onclick = () =>{
            filterBtn.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            let dataFilter = button.getAttribute('data-filter');

            filterItem.forEach(item =>{

                 item.classList.remove('active');
                 item.classList.add('hide');

                 if(item.getAttribute('data-item') == dataFilter || dataFilter == 'all'){
                    item.classList.remove('hide');
                    item.classList.add('active');
                }
            });
        };
    });
// products section starts




// home section swiper starts

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

  // home section swiper ends


//   featured section starts
var swiper = new Swiper(".featured-slider", {
    
    // spaceBetween: 30,
    centeredSlides: true,
    loop:true,
    spaceBetween:20,

    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        0: {
          slidesPerView: 1,
        //   spaceBetween: 20,
        },
        450: {
            slidesPerView: 2,
          //   spaceBetween: 40,
        },
        768: {
          slidesPerView: 3,
        //   spaceBetween: 40,
        },
        1200: {
          slidesPerView: 4,
        //   spaceBetween: 50,
        },
      },
  });
//   featured section ends

