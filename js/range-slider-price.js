const rangeSlider = document.querySelector('#range-slider');


if (rangeSlider) {
    noUiSlider.create(rangeSlider, {
        start: [500, 999999], // Max и min значение слайдреа
        connect: true, // Можно делать несколько ползунков если добавить еще true
        step: 1, // Сколько будет прибавлять за раз
        range: {
            'min': 500,
            'max': 999999
        }
    });

    const inputs = document.querySelectorAll('.filters-price__input')


    rangeSlider.noUiSlider.on('update', function(values, handle){ // Обновляет значения при изменении слайдера values хранит значения, handle выводит 0 если левый ползунок двигается 1 правый
        inputs[handle].value = Math.round(values[handle]); // Управляет двумя инпутами и изменяем значение в строках при движении слайдера
    });

    const setRangeSlider = function(i, value){ // Функция для изменения положения слайдеров 
        let array = [null, null];
        array[i] = value;

        rangeSlider.noUiSlider.set(array); // Изменяет положения нужного слайдера 
    }

    inputs.forEach(function(el, index){
        el.addEventListener('change', function(e){
            //console.log(index)
            setRangeSlider(index, e.currentTarget.value)
        })
    })
}