AOS.init();

// 수강생 리뷰 슬라이드
var swiper = new Swiper(".sec03-content03-swiper", {
    slidesPerView: 1,
    centeredSlides: true,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false
    },
    breakpoints: {
        768: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 4,
        },
    }

});

// 섹션13-k디지털 트레이닝 예시 탭메뉴 구현
const tabList = document.querySelectorAll('.tab_menu .list li');
const contents = document.querySelectorAll('.tab_menu .cont_area .cont')
let activeCont = ''; // 현재 활성화 된 컨텐츠 (기본:#tab1 활성화)

for(var i = 0; i < tabList.length; i++){
    tabList[i].querySelector('.btn').addEventListener('click', function(e){
    e.preventDefault();
    for(var j = 0; j < tabList.length; j++){
        tabList[j].classList.remove('is_on');

        contents[j].style.display = 'none';
    }

    this.parentNode.classList.add('is_on');

    activeCont = this.getAttribute('href');
    document.querySelector(activeCont).style.display = 'block';
    });
}

var swiper = new Swiper(".sec14-swiper", {
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: true
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
    },
});

var swiper = new Swiper(".sec16-swiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false
    },
    breakpoints: {
        768: {
            slidesPerView: "auto",
        },
    }
});

$(function(){
    $('.btn-counseling').hover(function(){
        $(this).find('img').attr('src','./assets/img/ico_counseling_wt.png')
    },function(){
        $(this).find('img').attr('src','./assets/img/ico_counseling.png')
    });

    $('.btn-enroll').hover(function(){
        $(this).find('img').attr('src','./assets/img/ico_enroll_wt.png')
    },function(){
        $(this).find('img').attr('src','./assets/img/ico_enroll.png')
    });
});

var swiper = new Swiper(".sec20-swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false
    },
    breakpoints: {
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
    }
});