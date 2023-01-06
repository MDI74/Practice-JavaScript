// Задача 1: Проверка на то, что количество скобочек равное или разное.
function checkBrackets(str) {
    let counterBrackets = 0;
    for(i = 0; i < str.length; i++){
        if (str[i]=='('){
            counterBrackets++;
        }
        else if (str[i]==')'){
            counterBrackets--;
        }
    }
    console.log(counterBrackets)
    if (counterBrackets == 0){
        console.log("Скобочек равное количество");
    }
    else {
        console.log("Скобочек разное количество")
    }
}

checkBrackets('((()))');


// Задача 2: Слово палиндром
function checkPalindrom(str){
    str = str.toLowerCase(); //Преобразует все символы в нижний регистр
    revers_str = str.split('').reverse().join('');
    if (str == revers_str){
        return true;
    }
    else{
        return false;
    }
}

console.log(checkPalindrom('diid'));

//Задача 3: Требуется написать функцию, выводящую в консоль числа от 1 до n, где n — это целое число, которая функция принимает в качестве параметра, с такими условиями:
//вывод fizz вместо чисел, кратных 3;
//вывод buzz вместо чисел, кратных 5;
//вывод fizzbuzz вместо чисел, кратных как 3, так и 5.

function fizzbuzz(n){
    for(let i = 1; i <= n; i++){
        if(i % 3 == 0 && i % 5 == 0){
            console.log('fizzbuzz');
        }
        else if (i % 3 == 0){
            console.log('fizz');
        }
        else if (i % 5 == 0){
            console.log('buzz');
        }
        else{
            console.log(i);
        }
    }
}

fizzbuzz(5);

//Задача 4: Вывод количества гласных букв в переданном слове
function findVowels(str){
    let vowels = ['a','e','i','o','u'];
    let counter = 0;
    for(char of str){
        if (vowels.includes(char)){ // Проверка на нахождения в массиве элемента
            counter++;
        };
    };
    console.log("Количество гласных: ", counter);
}

findVowels('hello');


//Задача 5: Факториал
function fac(n){
    if (n == 0){
        return 1;
    };
    return fac(n-1) * n;
}

console.log(fac(5));


//Задача 6: Убрать все гласные из предложения
function disemvowel(str) {
    str = str.replace(/[aeiou]/gi, '');           
    return str;
}

disemvowel('This website is for losers LOL!');


//Задача 7: Найти сумму чисел числа, делать до того как число получится однозначным
function digitalRoot(n) {
    sum = 0;
    while (n) {
      sum += n % 10;
      n = Math.floor(n / 10);
    }
    if (sum < 10){
        return sum;
    }
    else{
       return digitalRoot(sum);
    }
}

console.log(digitalRoot(493193));

//Задача 8: Цель этого упражнения - преобразовать строку в новую строку, где каждый символ в новой строке является"(", 
//если этот символ появляется только один раз в исходной строке, или ")"если этот символ появляется более одного раза в исходной строке. 
//Игнорируйте заглавные буквы при определении того, является ли символ дубликатом.
function duplicateEncode(word){
    word = word.toLowerCase()
    duplicate = [];
    prev = []
    new_word = ''
    for (let i = 0; i < word.length; i++){
        if (prev.includes(word[i]) ){
            duplicate.push(word[i])
        }
        else{
            prev.push(word[i])
        }
    }
    for (let i = 0; i < word.length; i++){
        if (duplicate.includes(word[i]) ){
           new_word += ')'
        }
        else {
            new_word += '('
        }
    }
    return new_word
}

console.log(duplicateEncode('Success'))


//Задача 9: Вывести года человека, кошки собаки
/*Кошачьи Годы
15 кошачьи годы для первого года
+9 кошачьи годы на второй год
+4 кошачьи годы для каждого последующего года
Собачьи годы
15 собачьи годы за первый год
+9 собачьи годы на второй год
+5 собачьи годы за каждый последующий год*/
var humanYearsCatYearsDogYears = function(humanYears) {
    catYears = 0;
    dogYears = 0;
    for (let i=1; i <=humanYears; i++){
        console.log(i);
      if (i==1){
        catYears+=15;
        dogYears+=15;
      }
      else if (i==2){
        catYears+=9;
        dogYears+=9;
      }
      else{
         catYears+=4;
         dogYears+=5;
      }
      
    }
    return [humanYears,catYears,dogYears];
}
  
console.log(humanYearsCatYearsDogYears(10), [10,56,64]);


//Задача 10: бесконечное количество полок расположены одна над другой в шахматном порядке.
//Кошка может перепрыгнуть на 3 полки одновременно: с полки 1 на полку 2 или 4 (кошка не может залезть на полку прямо над своей головой)
function solution(start, finish) 
{
 move = 0 
 while (start != finish){
   start+=3;
   if (start <= finish){
     move +=1;
   }
   else{
     start-=2;
     move+=1;
   }
 }
 return move;
}


//Задача 11: Напишите программу, которая находит суммирование каждого числа от 1 до num. Число всегда будет положительным целым числом, большим 0.
var summation = function (num) {
    if (num ==1){
      return 1;
    }
    return (num)+summation(num-1);
}

//Задача 12: Функция bar_triang() получает координаты трех вершин A, B and C в виде трех разных аргументов и выводит координаты барицентра Oв виде массива [xO, yO]
function barTriang(p1, p2, p3){
    return [Math.round(((p1[0]+p2[0]+p3[0])/3) * Math.pow(10, 4)) / Math.pow(10, 4), Math.round(((p1[1]+p2[1]+p3[1])/3) * Math.pow(10, 4)) / Math.pow(10, 4)]
}

//Задача 13: Вы получите trash1и trash2, что может быть следующими значениями:
//[], false, '', new Array(), null, NaN, undefined, 0, -0, 0n, -0n, '0'
//Вы должны вернуть логическое значение, если они строго равны.
//Нельзя использовать === !===
function compareTrash(trash1, trash2){
    if (typeof(trash1) == "undefined" && typeof(trash2) == "undefined"){
      return true;
    }
    if (isNaN(trash1) && isNaN(trash2)){
      return false;
    }
    if (typeof trash1 == 'number'){
      trash1 = Math.abs(trash1);
    }
    if (typeof trash2 == 'number'){
      trash2 = Math.abs(trash2);
    }

    if (Object.is(trash1, trash2)){
        return true;
    }
    else{
        return false;
    }
}

console.log(compareTrash(undefined, undefined))

//Задача 14: Гипотеза Коллатца (также известная как гипотеза 3n + 1) - это гипотеза о том, что, применяя следующий алгоритм к любому числу, мы всегда в конечном итоге достигнем единицы:

//[This is writen in pseudocode]
//if(number is even) number = number / 2
//if(number is odd) number = 3*number + 1
//Ваша задача - создать функцию hotpo, которая принимает положительное 
//n значение в качестве входных данных и возвращает количество раз,
//которое вам нужно выполнить , чтобы получить этот алгоритм n = 1.
var hotpo = function(n){
    if(n == 0 || n == 1) return 0; 
    counter = 0;
    while(n != 1)
      if (n % 2 ==0){
        n = n / 2;
        counter+=1;
      }
      else{
        n = 3*n+1;
        counter+=1;
      } 
    return counter;   
}

//Мемоизация числа фиббоначи 
let fibonacci = (function (){
    let memo = [0,1];
        let result = memo[n];
        if (typeof result !== 'number'){
            result = fib(n-1) + fib(n-2);
            memo[n] = result;
        }
        return result;
    }
    return fib;
}())

console.log(fibonacci(8))
console.log(fibonacci(7))
