// Полифилл для метода forEach для NodeList
if (window.NodeList && !NodeList.prototype.forEach) {
	NodeList.prototype.forEach = function (callback, thisArg) {
		thisArg = thisArg || window;
		for (var i = 0; i < this.length; i++) {
			callback.call(thisArg, this[i], i, this);
		}
	};
}


const dropDown = document.querySelectorAll('.dropdown')

dropDown.forEach(function(dropDownWrapper){

    const dropDownBtn = dropDownWrapper.querySelector('.dropdown__button');
    const dropDownList = dropDownWrapper.querySelector('.dropdown__list');
    const dropDownItem = dropDownList.querySelectorAll('.dropdown__list-item');
    const dropDownInput = dropDownWrapper.querySelector('.dropdown__input-hidden');

    // При клике на кнопку открыть закрыть select
    dropDownBtn.addEventListener('click', function(){
        dropDownList.classList.toggle('dropdown__list--visible'); 
        dropDownBtn.classList.add('dropdown__button--active');
    });


    // Выбор элемента списка. Запомнить выбранное значение. Закрыть dropdown
    dropDownItem.forEach(function (item) { 
        item.addEventListener('click', function(e){
            e.stopPropagation();
            dropDownBtn.innerText = this.innerText; // Заменяем текст на кнопки на нужный
            dropDownBtn.focus();
            dropDownInput.value = this.dataset.value; // Подставляем выбранное значение в input
            dropDownList.classList.remove('dropdown__list--visible'); 
        });
    });

    // Клик снаружи dropdown. Закрыть dropdown
    document.addEventListener('click', function(e){
        if(e.target !== dropDownBtn){ // если клик не по кнопкам
            dropDownList.classList.remove('dropdown__list--visible'); 
            dropDownBtn.classList.remove('dropdown__button--active');
        };
    });

    // Закрываем и снимае фокус с кнопки при нажатие на клавиши Tab и Escape
    document.addEventListener('keydown', function(e){
        if(e.key === 'Tab' || e.key == 'Escape') { 
            dropDownList.classList.remove('dropdown__list--visible'); 
            dropDownBtn.classList.remove('dropdown__button--active');
        };
    });

})


