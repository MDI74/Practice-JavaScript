// Инициализация Jquery
$(document).ready(function(){
    $('.slider').slick({
        arrows:true, //Отображение стрелок
        dots:true, // Отображение точек
        adaptiveheight:true, // Автоматическая адаптиваная высота слайдера
        slidesToShow:1, //Количество картинок для отображения
        slidesToScroll:1, //Сколько слайдов прокручивается за раз
        speed:300, //Скорость прокрустки слайдера
        easing:'linear',//Тип анимации при прокрутке
        infinite:true, //Отвечает за то будет ли слайдер бесконечным
        initialSlide:1, //Отвечает за то с какого слайда будет стартовать
        autoplay:false, // Автоматическая прокурутка слайдера
        autoplaySpeed:500, //Интервал прокрутки слайдера
        pauseOnFocus:true, //При нажатии отключает автоматическую прокурутку слайдера
        pauseOnHover:true,//При наведении отключает автоматическую прокурутку слайдера
        pauseOnDotsHover:true, //При наведении на точки отключает автоматическую прокурутку слайдера
        draggable:true, // Для ПК. Отвечате за управления мышкой, false запрещает перелистывать слайды мышкой
        swipe:true, // Для телефонов. Отвечате за управления свайпом, false запрещает перелистывать слайды свайпом
        touchThreshold:5, // Расстония при котором переключается картинка при свайпе
        touchMove:true, //Включает все возможности тачскрина
        waitForAnimate:true, //Дожидается конца анимации, и после этого срабатывает переключение 
        centerMode:true, // Главный слайдер всегда по центру 
        variableWidth:true, //Автоматически определяет ширину для слайдеров
        rows:1, //Количество рядом слайдера
        slidesPerRow:1, //Количество слайдов в ряду
        vertical:false, //Включает вертикальный слайдер
        verticalSwiping:false, //Включает вертикальный свайп
        //asNavFor: ".sliderbig", //Связывается два слайдера и при перелистывании одного другой тоже листается
        responsive:[
            {
                breakpoint: 768, //Разрешения при котором будут меняться настройки
                settings: { //Настройки 
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 480, //Разрешения при котором будут меняться настройки
                settings: { //Настройки 
                    slidesToShow: 1,
                }
            },
        ],
        //mobileFirst:true, // Менят max-width на min-width
        //appendArrows:$('.content'), // Обертывает в нужный тег 
        // appendDots:$('.content'),
    });
    $('.slider').on('beforeChange', function(evet, slick, currentSlide,nextSlide){ // События до смены слайда
        //console.log(currentSlide);

    });

    $('.slider').on('afterChange', function(evet, slick, currentSlide,nextSlide){ // События после смены слайда
        //console.log(currentSlide);

    });

    //$('.slider').slick('setPosition'); // Метод для перезагрузки слайдера, рассчитывыет размеры слайдера в зависимостри от контейнера
    //$('.slider').slick('goTo',3); // Позволяет пролестнуть слайдер до нужного элемента
    //$('.slider').slick('slickPrev'); // Позволяет пролестнуть слайдер назад
    //$('.slider').slick('slickNext'); // Позволяет пролестнуть слайдер вперед
    //$('.slider').slick('slickPlay'); // Позволет включить слайдер
    //$('.slider').slick('slickPause'); // Позволет поставить на паузу слайдер
    //$('.slider').slick('slickAdd', '<p>ergergergg</p>'); //Позволяет добавить объекты в слайдер
    // Также есть фильтрация filter
    //let s =$('.slider').slick('slickGetOption', 'slidesToShow') // Получить значение параметра слайдера
    //$('.slider').slick('slickSetOption', 'slidesToShow', 2) //Можно переназначать параметры на другие значения
    //$('.slider').slick('unslick') //Отключает наш слайдер

 


    $('.sliderbig').slick({
        arrows:false, //Отображение стрелок
        fade:true, // Заменяет картинку в слайде
        autoplay:true, // Автоматическая прокурутка слайдера
        autoplaySpeed:1000, //Интервал прокрутки слайдера
        //asNavFor: ".slider", //Связывается два слайдера и при перелистывании одного другой тоже листается

    });
});