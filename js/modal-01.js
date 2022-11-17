const button = document.querySelector('[data-modal-button]'); // находим кнопку по data-modal-button
const modal = document.querySelector('[data-modal]'); // находим модальное окно по data-modal
const buttonClose = document.querySelector('[data-modal-close]'); // находим кнопку закрытия по data-modal-close


//Прослушиваем клик по кнопке открытия и открываем модальное окно
button.addEventListener('click', function() {

    modal.classList.remove('hidden');

    //Прослушиваем клик по кнопке закрытия и закрываем модальное окно
    buttonClose.addEventListener('click', function (){
        modal.classList.add('hidden');
    })

    //Прослушиваем клик по фону и закрываем модальное окно 
    modal.addEventListener('click', function(){
        modal.classList.add('hidden');
    })

    modal.querySelector('.modal-window').addEventListener('click', function(event){ // поиск только внутри данного элемента modal и прослушка по клику
        //console.log(event); // хранит в себе информацию по выполненному событию 
        event.stopPropagation() // останавливает передачу события выше т.е родителям это позволяет кликать внутри окна и не закрывать модальное окно

    }); 
})