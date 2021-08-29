// СЛАЙДЕР SLICK
$(document).ready(function() {
    $('.FS_slider').slick({
        arrows: true, //стрелки.
        dots: false, //"кнопки" (доты) выбора слайдов.
        adaptiveHeight: false, //автоподгонка высоты слайдера под высоту слайдов.
        slideToShow: 1, //кол-во одновременно отображаемых слайдов.
        slideToScroll: 1, //кол-во слайдов в прокрутке.
        speed: 1000, //скорость перелистывания слайдов.
        easing: 'linear', //метод отрисовки.. ease.
        infinite: true, //"бесконечная" (кольцо) прокрутка.
        initialSlide: 0, //слайд с которого стартует слайдер.
        autoplay: false, //автопрокрутка.
        autoPlaySpeed: 3000, //скорость автопрокрутки.
        pauseOnFocus: true, //пауза при попадании в фокус.
        pauseOnHover: true, //пауза при наведении мышью.
        pauseOnDotsHover: true, //пауза при наведении на "кнопки" (доты) слайдов.
        draggable: false, //перелистывание на ПК.
        swipe: true, //перелистывание на мобильниках.
        touchThreshhold: 5, //при увеличении значения - уменьшается расстояние, необходимое для свайпа, чтобы перелистнуть слайдер.
        touchMove: true, //перемещение слайдов пальцем\мышью удержия "контакт".
        waitForAnimate: true, //дождаться завершения анимации, перед следующим перелистыванием.
        centerMode: false, //добавляет класс slick-center, позволяющий обращаться к центральному (главному) слайду.
        variableWidth: false, //плавающая ширина слайдов (собирает их в кучу, сразу друг за другом, "образая" края правого слайда). Возможно использование в адаптивных вариантах. При использовании совместно с centerMode:true обрезает "лишние" слайды и слева и справа, оставаясь адаптивным.
        rows: 1, //кол-во строк - вертикализирует слайдер
        slidesPerRow: 1, //количество слайдов в ряду (строке).
        vertical: false, //делает слайдер вертикальным - вертикальная прокрутка. Желательно указывать высоту непосредственно.
        verticalSwiping: false, //возможность свайпить вертикально.
        fade: false, //устанавливает "проявляемость" слайда при его выборе.
        asNavFor: "", //связывает два слайдера друг с другом, например большой и маленький. Указывается взаимно в двух разных слайдерах.
    });
});

// Плавный скролл и класс pageup
$(window).scroll(function () {
    /* console.log($(this).scrollTop()) */
    if ($(this).scrollTop() > 700) {
        $('.pageup').fadeIn();
    } else {
        $('.pageup').fadeOut();
    }
});

$("a[href^='#up']").click(function () { // При клике на ссылку, в которой значение атрибута href начинается с #:
    var _href = $(this).attr("href");  // создаём переменную _href и записываем в неё значение аттрибута href из кликнутой ссылки
    $("html, body").animate({scrollTop: '0'});
    /* КАК РАБОТАЕТ ФУНКЦИЯ НИЖЕ - ПОКА НЕ ПОНЯЛ..
    $("html, body").animate({scrollTop: $(_href).offset().top+"px"}); */
    return false;
});

window.addEventListener('DOMContentLoaded', () => {
const menuSalonsBtn = document.querySelector('.menu__linkbar-btn'),
        salonsLinks = document.querySelector('.ourSalonsLinks'),
        salonsItem = document.querySelectorAll('.ourSalonsLinks__item'),
        salonsOverlay = document.querySelector('.ourSalonsLinks__overlay');
    
    salonsItem.forEach(item => {
        item.addEventListener('click', () => {
            menuSalonsBtn.classList.toggle('active')
            salonsLinks.classList.toggle('active')
        });
    });
    salonsOverlay.addEventListener('click', () => {
        salonsLinks.classList.toggle('active')
    });

    menuSalonsBtn.addEventListener('click', () => {
        salonsLinks.classList.toggle('active')
    });
});


