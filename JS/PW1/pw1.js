// 1. Оголосіть змінні str, num, flag и txt зі значеннями «Привіт», 123, true, «true». За допомогою typeof переконайтесь, що значення змінних належать типам: string, number и  boolean.

// let str = 'Привіт';
// let num = 123;
// let flag = true;
// let txt = 'true';

// console.log(typeof str);
// console.log(typeof num);
// console.log(typeof flag);
// console.log(typeof txt);

// 2. Оголосіть змінні a1, a2, a3, a4, a5. За домогою 3х математичних оператцій отримайте числа:
//     34,
//     12,
//     66,
//     90,
//     87
//     Старайтесь використовувати різні оператори.
//     Example: 88 = (16 / 2) * 11

// let a1 = (18/9)+32;
// let a2 = (48+12)/5;
// let a3 = (5*11)+11;
// let a4 = (50+50)-10;
// let a5 = (150-70)+7;

// console.log(a1);
// console.log(a2);
// console.log(a3);
// console.log(a4);
// console.log(a5);


// 3.  Створіть змінні a6, a7, a8, a9, a10. Запишіть в них результати виразів:
    // 5 % 3;
    // 3 % 5;
    // 5 + '3';
    // '5' - 3;
    // 75 + 'кг';

// let a6 = 2;
// let a7 = 3;
// let a8 = '53';
// let a9 = 2;
// let a10 = '75kg';


// 4. Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width). Значееня площі зберігати в змінній s.


// let height = 23;
// let width = 10;

// let s = height*width;

// alert(s);


// 5.  Напиши код, который находит объем цилиндра высотой 10м (переменная heightC) и диаметром основания 4м (dC), результат поместите в переменную v.


// let heightC = 10;
// let dC = 4;
// let p = 3.14;

// let v = p*(dC/2)*heightC;

// console.log(v);


// 6. У прямоугольного треугольника две стороны n (со значением 3) и m (со значением 4). Найдите гипотенузу k по теореме Пифагора (нужно использовать функцию Math.pow(число, степень) или оператор возведения в степень ** ).


// let n = 3;
// let m = 4;

// let k = Math.pow(Math.pow(n, 2) + Math.pow(m, 2), 0.5);

// console.log(k);


// 7. Напишите скрипт, который выводит "Hello world", создавши переменную str и выводить спомощью document.write, alert и console.log


// let str = 'Hello world';

// document.write(str);
// alert(str);
// console.log(str);


// 8. Вывести в окно браузера при помощи метода alert() следующие данные: Ваше ФИО, возраст, хобби (каждой на новой строки спомощью \n).


// let name = 'Shyika Oleksii Yaroslavovych';
// let age = 20;
// let hobby = 'driving';

// alert(`${name} \n ${age} \n ${hobby}`);


// 9. Создать 4 переменные с использованием ключевого слова let с именами str1, str2, str3, concatenation.
//   Переменной str1 присвоить фразу ‘Кто ‘, str2 – ‘ты ‘, str3 – ‘такой?’
//   Локальной переменной concatenation присвоить результат конкатенации 3-х строк: str1, str2, str3.
//   Вывести в документ содержимое переменной concatenation спомощью document.write


// let str1 = 'Кто ';
// let str2 = 'ты ';
// let str3 = 'такой?';
// let concatenation = str1 + str2 + str3;

// document.write(concatenation);


// 10. Подумайте Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
//     let str = "20"; 
//      let a = 5;
//      document.write(str + a + "<br/>"); 205
//      document.write(str - a + "<br/>"); 15
//      document.write(str * "2" + "<br/>"); 40
//      document.write(str / 2 + "<br/>"); 10


// 11. Какие значения выведет в окно консоли следующий фрагмент кода если его поместить в console.log?
//     parseInt("3.14")  3
//     parseInt("-7.875") -7
//     parseInt("435") 435
//     parseInt("Вася") NaN


// 12.  С помощью окна ввода, вызываемого методом prompt, пользователь может ввести данные, которые будут использоваться далее, повторите код ниже
    
// let str = prompt('Enter something, ho-ho');

// console.log(str);


// 13. С помощью окна ввода, вызываемого методом prompt, сделать сложение двух чисел, а вывод результата при помощи метода alert


// let a = +prompt('Type the number');
// let b = +prompt('Type the number');

// let c = a+b;

// alert(c);


// 14. С помощью окна ввода, вызываемого методом prompt, пользователь последовательно выводит имя, фамилию и возраст, а вам не обходимо вывести строку такого вида
//       Доброго вечера Иван Иванов, мои поздравления что вам 32 , а вывод результата при помощи метода alert


    //   let name = prompt('What is your name?');
    //   let surname = prompt('What is your surname?');
    //   let age = prompt('How old are you?');

    //   alert(`Доброго вечера  ${name} ${surname}, мои поздравления что вам  ${age}`);
    //   alert ('Доброго вечера' + ' ' + name + ' ' + surname + ', мои поздравления что вам ' + age);


    // =====================
    // ======ДОП============
    // =====================
    
    
// 1. Три різних числа вводяться через prompt(). За допомоги if else вивести іх в порядку зростання. (відсортувати по зростанню)

// let a = prompt('Type the number');
// let b = prompt('Type the number');
// let c = prompt('Type the number');

// if (a<b && b<c) {

//     alert(`${a}, ${b}, ${c}`);
// }

// else if (a<c&&c<b) {
//     alert(`${a}, ${c}, ${b}`);
// }

// else if (b<a&&a<c) {
//     alert(`${b}, ${a}, ${c}`);
// }

// else if (b<c&&c<a) {
//     alert(`${b}, ${c}, ${a}`)
// }

// else if (c<a&&a<b) {
//     alert(`${c}, ${a}, ${b}`);
// }

// else {
//     alert(`${c}, ${b}, ${a}`);
// }


// 2.
// Все параматры получаем с клавиатуры!!!!
// Имитируем поведение пешехода на перекстке.
// Если светофор зеленый - вывести "иди".
// Если светофор желтый - вывести "подожди".
// Если светофор красный - вывести "стой".
// Если светофор в аварийном режиме вывести "делай что хочешь"!

// let light = prompt('Manage the road light (green, yellow, red, issue)');

// switch (light) {
//     case 'green':
//     alert('Go!');
//     break;
    
//     case 'yellow':
//     alert('Wait');
//     break;
    
//     case 'red':
//     alert('Stop!');
//     break;
    
//     case 'issue':
//     alert('Do what ever you want');
//     break;
// }


// 3
// Все параметры получаем с клавиатуры!!!!(prompt , confirm)
// Создать переменную isRoadClear которая характеризирует наличие на дороге машин.
// Улучшаем предыдущее задание.
// Если светофор зеленый и машин нет - вывести "иди".
// Если светофор зеленый и машины есть  - вывести подожди пока нарушители проедут".
// Если светофор желтый и машины есть - вывести "жди".
// Если светофор желтый и машин нет - вывести "все рано жди".
// Если светофор красный и машин нет- вывести "стой все рано".
// Если светофор красный - и машины есть вывести "стой и жди".
// Если светофор в аварийном режиме вывести "делай что хочешь"!

// let light = prompt('Manage the road light (green, yellow, red, issue)');
// let lookAround = confirm('Look tothe left and to the right');
// let isRoaClear = confirm('Is there a car?');

// if (light == 'green' && isRoaClear == false) {
//     alert('Go!');
// }
// else if (light == 'green' && isRoaClear == true) {
//     alert('Wait until safety');
// }
// else if (light == 'yellow' && isRoaClear == true) {
//     alert('Wait');
// }
// else if (light == 'yellow' && isRoaClear == false) {
//     alert('Anyway wait');
// }
// else if (light == 'red' && isRoaClear == false) {
//     alert('Stop');
// }
// else if (light == 'red' && isRoaClear == true) {
//     alert('Stop and wait');
// }
// else if (light == 'issue') {
//     alert('Do what ever you want');
// }
