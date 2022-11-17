// Открыть или закрыть блок
const button = document.querySelector('#btn'); // находим кнопку по id
const content = document.querySelector('#content') // находим контект по id

button.addEventListener('click', function(){ // прослушка событий по клику

  if(content.classList.toggle('content-hidden')){ // toggle возвращает true и false в зависимости от того убран был блок или добавлен
    button.textContent = 'Открыть блок'; //меняем надпись кнопки 
  }
  else{
    button.textContent = 'Закрыть блок'; //меняем надпись кнопки 
  }
});
