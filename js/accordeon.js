const headers = document.querySelectorAll('[data-name ="accordeon-title"]'); // находим все элементы с помощью селектора по атрибиту data-name

//Отдельно вешаем прослушку по клику на каждый элемент
headers.forEach(function(item){
    item.addEventListener('click', function(){
        this.nextElementSibling.classList.toggle('hidden'); //ссылается на след элемент на который мы кликаем и убирает его
    })
})