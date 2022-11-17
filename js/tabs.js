const tabHeaders = document.querySelectorAll('[data-tab]'); // находим все заголовки табов с помощью селектора по атрибиту data-tab
const contentBoxes = document.querySelectorAll('[data-tab-content'); // находим все контент боксы

tabHeaders.forEach(function (item) { 
    item.addEventListener('click', function () { 

       const contentBox = document.querySelector('#' + this.dataset.tab); //Выбираем нужный элемент по полученому data-tab с помощью конкретинации 

       contentBoxes.forEach(function (item) { //обходим все контент боксы
            item.classList.add('hidden'); //добавляем к каждому hidden
       })

       contentBox.classList.remove('hidden'); //удалаяем класс hidden у выбранного 

    })
 })