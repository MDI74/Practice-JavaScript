// input[type="text"]
document.querySelector('.btn-1').addEventListener('click', ()=>{ // Прослушка события на input[type="text"]
    let data = document.querySelector('.i-1').value; // Записываем введенные данные в переменную data
    document.querySelector('.out-1').innerHTML = data; // Выводим их в блоке out-1
    document.querySelector('.i-1').value = "Hello"; // Записываем данные в input при нажатии на кнопку
});

// input[type="number"]
document.querySelector('.btn-2').addEventListener('click', ()=>{ // input[type="number"]
    let data = document.querySelector('.i-2').value; // Записываем введенные данные в переменную data в формате '4', а не число
    let data_digit = +document.querySelector('.i-2').value; // Записываем введенные данные в переменную data в формате 4, а не строки
    document.querySelector('.out-2').innerHTML = data; // Выводим их в блоке out-2
    document.querySelector('.i-2').value = 123; // Записываем данные в input при нажатии на кнопку
})

// input[type="color"]
document.querySelector('.btn-3').addEventListener('click', ()=>{ // input[type="color"]
    let data = document.querySelector('.i-3').value; // Записываем введенные данные в переменную data в формате '4', а не число
    document.querySelector('.out-3').innerHTML = data; // Выводим их в блоке out-3
    document.querySelector('.i-3').value = '#FFFFFF'; // Записываем данные в input при нажатии на кнопку
});


// input[type="date"]
document.querySelector('.btn-4').addEventListener('click', ()=>{ // input[type="date"]
    let data = document.querySelector('.i-4').value; // Записываем введенные данные в переменную data в формате '4', а не число
    document.querySelector('.out-4').innerHTML = data; // Выводим их в блоке out-4
});


// input[type="range"]
document.querySelector('.i-5').addEventListener('input', ()=>{ // input[type="range"]
    let data = document.querySelector('.i-5').value; // Записываем введенные данные в переменную data в формате '4', а не число
    document.querySelector('.out-5').innerHTML = data; // Выводим их в блоке out-5
});

// input[type="checkbox"]
document.querySelector('.btn-6').addEventListener('click', ()=>{ // input[type="range"]
    let data = document.querySelector('.i-6').value;
    if (document.querySelector('.i-6').checked){ //Определяет является ли input выбранным
        document.querySelector('.out-6').innerHTML = data; //Если выбрана выводим содержимое value 
    }
    else{
        document.querySelector('.out-6').innerHTML = ''; //Иначе не выводим
    }
    // document.querySelector('.i-6').checked= true; // Сделать чекбокс выбранным при нажатии на кнопку
});


// input[type="radio"]
document.querySelector('.btn-7').addEventListener('click', ()=>{ // input[type="radio"]
    let radio = document.querySelectorAll('.i-7');
    radio.forEach(function(item){
        if(item.checked){
            data = item.value //Присваиваем data значение выбранной radio кнопки
        }
        document.querySelector('.out-7').innerHTML = data;
    })
});

// input[type="password"]
document.querySelector('.btn-8').addEventListener('click', ()=>{ // Прослушка события на input[type="password"]
    let data = document.querySelector('.i-8').value; // Записываем введенные данные в переменную data
    document.querySelector('.out-8').innerHTML = data; // Выводим их в блоке out-8
});

// input[type="email"]
document.querySelector('.btn-9').addEventListener('click', ()=>{ // Прослушка события на input[type="email"]
    let data = document.querySelector('.i-9').value; // Записываем введенные данные в переменную data
    document.querySelector('.out-9').innerHTML = data; // Выводим их в блоке out-9
});

// select
document.querySelector('.btn-10').addEventListener('click', ()=>{ // Прослушка события на select
    let data = document.querySelector('.s-10').value; // Записываем введенные данные в переменную data
    document.querySelector('.out-10').innerHTML = data; // Выводим их в блоке out-10
});


// textarea
document.querySelector('.btn-11').addEventListener('click', ()=>{ // Прослушка события на select
    let data = document.querySelector('.t-11').value; // Записываем введенные данные в переменную data
    document.querySelector('.out-11').innerHTML = data; // Выводим их в блоке out-11
});


//form
document.querySelector('form').addEventListener('submit', (event)=>{ // Прослушка события на select
    event.preventDefault(); //Запрещает отправку формы и перезагрузку страницы
    const form = document.querySelector('form');
    console.dir(form); //выводит элемент в виде DOM-объекта, что удобно для анализа его свойств.
    console.dir(form.elements.myselect.value); //выыодит выбранный элемент по id или name
    console.dir(form.elements.myinput.value); //выыодит выбранный элемент по id или name
});

