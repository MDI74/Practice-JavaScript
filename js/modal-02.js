const buttons = document.querySelectorAll('[data-modal-button]'); // находим кнопки по data-modal-button
const buttonsClose = document.querySelectorAll('[data-modal-close]') // находим кнопки для закрытия по data-modal-close
const modals = document.querySelectorAll('[data-modal]'); // находим все модальные окна по data-modal

//Прослушиваем клик по кнопке открытия и открываем модальное окно
buttons.forEach(function(item){
    item.addEventListener('click', function(){
       const modalID = this.dataset.modalButton; //Находим id нажатой кнопки
       const modal = document.querySelector('#' + this.dataset.modalButton);
       modal.classList.remove('hidden');

       //Находим внутри открывемой модалки .modal-window и запрещаем передавать клики родителям
       modal.querySelector('.modal-window').addEventListener('click', function(event){ // поиск только внутри данного элемента modal и прослушка по клику
            event.stopPropagation(); // останавливает передачу события выше т.е родителям это позволяет кликать внутри окна и не закрывать модальное окно
       })
    })
})


//Кнопки закрыть модальное окно
buttonsClose.forEach(function (item) {
    item.addEventListener('click', function(){
        const modal = this.closest('[data-modal]');
        modal.classList.add('hidden');
    })
})

// Закрытие модального окна по клику вне его
modals.forEach(function (item){
    item.addEventListener('click', function () {
        const modal = this.closest('[data-modal]');
        modal.classList.add('hidden');
    })
})
