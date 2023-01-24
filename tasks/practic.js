// Задача 1: Проверка на то, что количество скобочек равное или разное.
const checkBrackets = (str) => {
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
const checkPalindrom = (str) => {
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
const fizzbuzz = (n) =>{
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
const findVowels = (str) =>{
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
const fact = (n) =>{
    if (n == 0){
        return 1;
    };
    return fact(n-1) * n;
}

console.log(fact(5));

//Задача 6: Убрать все гласные из предложения
const disemvowel = (str) => {
    str = str.replace(/[aeiou]/gi, '');           
    return str;
}

disemvowel('This website is for losers LOL!');

//Задача 7: Найти сумму чисел числа, делать до того как число получится однозначным
const digitalRoot = (n) => {
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
const duplicateEncode = (word) =>{
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
const humanYearsCatYearsDogYears = (humanYears) => {
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
const solution = (start, finish) => {
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
const summation = (num) => {
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
const hotpo = (n) =>{
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
const fibonacci = () =>{
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

//Задача 15 Завершите решение так, чтобы оно разбило строку на пары из двух символов. Если строка содержит нечетное количество символов, 
//то отсутствующий второй символ последней пары должен быть заменен символом подчеркивания ('_').
const res = (str) => 
{
  let result = [];
  !str ? str :str = str.match(/.{1,2}/g);
  for (let i = 0; i < str.length; i++){
    result.push(str[i].length === 1 ? str[i] + '_' : str[i])

  }
  return result
}
console.log(res('abcdefg'))

//Задача 16 Маркетинговая команда тратит слишком много времени на ввод хэштегов. Давайте поможем им с нашим генератором хэштегов! Вот в чем дело: он должен начинаться с хэштега (#). Во всех словах первая буква должна быть заглавной. Если окончательный результат длиннее 140 символов, он должен вернуть false. 
//Если ввод или результат представляет собой пустую строку, он должен вернуть false.
const generateHashtag = (str) =>{
  let res;
  !str || str.length < 1 ? res = false : res = '#' + str.split(/\s+/).map(word => word[0].toUpperCase() + word.substring(1)).join('')
  res.length > 140 ? res = false : res
  return res
}

//Задача 17 Напишите функцию, которая принимает неотрицательное целое число (секунды) в качестве входных данных и возвращает время в удобочитаемом формате ( HH:MM:SS)
//HH= часы, дополненные до 2 цифр, диапазон: 00–99
//MM= минуты, дополненные до 2 цифр, диапазон: 00–59
//SS= секунды, дополненные до 2 цифр, диапазон: 00–59
//Максимальное время никогда не превышает 359999 ( 99:59:59).
const humanReadable = (seconds) => {
    let hour = Math.floor(seconds / 3600);
    let minute = Math.floor((seconds / 60) - (hour * 60));
    let sec = seconds % 60;
    let time = [hour, minute, sec]
    time = time.map(time => time < 10 ?  time = '0' + time.toString()  : time = time.toString())
    return time[0] + ':' + time[1] + ':' + time[2];
}

//Задача 18 Число триббоначи
const fib = (sig,n) => {
    const size = sig.length
    if (n === 0){
        return []
    }
    else if (n === 1){
        return [1]
    }
    for (let i =0; i< (n-size); i++){
        sig.push(sig[i] + sig[i+1] + sig[i+2])
    }
    return sig
}

//Задача 19 Функция rgb неполная. Завершите его, чтобы передача десятичных значений RGB приводила к возврату шестнадцатеричного представления. 
//Допустимые десятичные значения для RGB: 0–255. Любые значения, выпадающие из этого диапазона, должны быть округлены до ближайшего допустимого значения.
const rgb = (r, g, b) =>{
    const array = [r,g,b]
    result = []
    for (el of array) {
        el > 255 ? el = 255 : el
        el < 0 ? el = 0 : el
        el < 15  ? result.push('0'+ el.toString(16).toUpperCase()) : result.push((el).toString(16).toUpperCase());
    }
    return result.join('');
}
