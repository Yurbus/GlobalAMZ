
var swiper = new Swiper(".mySwiper", {
    cssMode: true,
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
    breakpoints: {
        580: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        890: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
    },
});
var swiper = new Swiper(".mySwiper2", {
    cssMode: true,
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
    breakpoints: {
        580: {
            slidesPerView: 2,
        },
        890: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 4,
        },
    },
});
var swiper = new Swiper(".mySwiper3", {
    cssMode: true,
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
    breakpoints: {
        580: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        890: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
    },
});
var swiper = new Swiper(".mySwiper4", {
    slidesPerView: 1,
    slidesPerGroup: 1,
    // grid: {
    //     rows: 2,
    // },
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
    mousewheel: false,
    keyboard: true,
    breakpoints: {
        580: {
            slidesPerView: 2,
            slidesPerGroup: 1,
        },
        960: {
            slidesPerView: 3,
            slidesPerGroup: 2,
            
        },
        1024: {
            slidesPerView: 4,
            slidesPerGroup: 4,
        
        },
    },
});

var swiper = new Swiper(".mySwiper5", {
    slidesPerView: 1,
    slidesPerGroup: 1,
    autoHeight: true,
    // grid: {
    //     rows: 2,
    // },
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
    mousewheel: false,
    keyboard: true,
});
