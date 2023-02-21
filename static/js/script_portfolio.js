/* Вся информация взята от сюда: 1)https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference 2)хабр*/
var Slider = function(){ //общая функция 
    
    var Images = function(){
        $(".is-background").imgLiquid(); //изменения размера изображений
    }
    
    var Component = function(){
        var $Slider = $('.js-slider'); //прикольно придумал с $ ды?
        
        // связка прослушивания и событий
        $Slider.on('ready.flickity', function() {
            // Загрузчик
            TweenMax.to($('.js-slider-loader'), 1,{
                delay: 0.5,
                autoAlpha: 0,
                ease: Expo.easeInOut,
                onComplete: function(){
                    // Ползунок...
                    TweenMax.to($Slider, 0.5,{
                        delay: 0,
                        autoAlpha: 1,
                        ease: Expo.easeInOut
                    });

                    // Контент - стили - значения
                    TweenMax.to($('.slider__item__text h1'), 0.8,{
                        delay: 0.3,
                        autoAlpha: 1,
                        ease: Expo.easeInOut
                    });
                    TweenMax.to($('.slider__item__text p'), 0.8,{
                        delay: 0.6,
                        autoAlpha: 1,
                        ease: Expo.easeInOut
                    });
                    TweenMax.to($('.slider__item__text a'), 0.8,{
                        delay: 0.9,
                        autoAlpha: 1,
                        ease: Expo.easeInOut
                    });
                }
            });
        });
        
        $Slider.flickity({ //мерцание
            cellAlign: 'left', //Выравнивание ячеек
            contain: true, //содержание
            draggable: true, //перетаскиваемость
            cellSelector: '.slider__item', //Селектор ячеек
            wrapAround: true, //Обертка
            autoPlay: 3600, //ну это понятно
            pauseAutoPlayOnHover: false, //Приостановка автоматического воспроизведения при наведении //true = не будет само листаться
            prevNextButtons: false //листабельность тачем //https://flickity.metafizzy.co/options.html
        });
        
        // Управления
        $('.js-slider-button-prev').on( 'click', function() {
            $Slider.flickity('previous');
        });
        $('.js-slider-button-next').on( 'click', function() {
            $Slider.flickity('next');
        });
    }

	return{
		init: function(){ //Замыкание 
            Images(); //исполнение в самом верху
            Component(); //исполнение с TweenMax и прочим_
		}
	};
}();

// Пуск!!!!!!!!!!!!!!!!!
Slider.init();