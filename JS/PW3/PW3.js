// - створити функцію яка обчислює та повертає площу прямокутника висотою A m, шириною B m.


// function square(a = '', b = '') {
//     let calSquare;
//     return calSquare = a * b;
// }
// let result = square(4, 8);
// console.log(result);


// - створити функцію яка обчислює та повертає площу кола. 


// function returnSquare(r = '') {
//     let circleSquare;
//     return circleSquare = 2 * 3.14 * r**2;
// }
// let result = returnSquare(5);
// console.log(result);


// - створити функцію яка обчислює та повертає площу циліндру.


// function returnSquare(r = '', h = '') {
//     let square;
//     return square = (2 * 3.14 * r * h) + (2 * 3.14 * r**2);
// }
// let result = returnSquare(3, 7);
// console.log(result);


// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);


// function findNumbers() {
//     let smaller = arguments[0];
//     let bigger = arguments[1];
//     for (let i = 0; i < arguments.length; i++) {
//         if (arguments[i] > bigger) {
//             bigger = arguments[i];
//         }
//         else if (arguments[i] < smaller) {
//             smaller = arguments[i];
//         }
//     }
//     console.log(`This is the biggest: ${bigger}`);
//     return smaller;
// }
// let result = findNumbers(56, 74, 2, 38, 1, 96, 138);
// console.log(`This is the smallest: ${result}`);


// - Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]


// function changePlace(arr = [], i = '') {
//     for (y = 0; y < arr.length; y++) {
//         if (y == i) {
//             arr.splice(y+1, 0, arr.splice(y, 1)[0]);      
//         }
//     }
//     console.log(arr);
// }

// changePlace([9,8,0,4], 0);  


// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]


// function moveZero(arr =[]) {
//     for (let y = 0; y < arr.length; y++) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === 0) {
//             arr.push(arr.splice(i, 1)[0]);
//         }
//     }
// }
//     console.log(arr);
// }
// let randomNumArr = [1, 40, 0, 0, 0, 49, 5624, 0, 47, 23, 0, 0, 27, 0, 13, 0];
// moveZero(randomNumArr);


// - Дано список імен.
// let n1 = '    Harry       Potter      '
// let n2 = '    Ron       Whisley      '
// let n3 = '    Hermione       Granger      '
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'


// function fixNames(name = '') {
//     let fixedName = name.trim()
//     fixedName = fixedName.split(' ');
//     for (y = 0; y < fixedName.length; y++) {
//     for (i = 0; i < fixedName.length; i++) {
//         if (fixedName[i] == '') {
//             fixedName.splice(i, 1);
//         }
//     }
// }
//     fixedName = fixedName.join(' ');
//     console.log(fixedName);
// }


// // function fixNames(name = '') {
// //     let fixedName = name.trim().replace(/\s+/, " ");
// //     console.log(fixedName);
// // }

// let n1 = '    Harry        Potter      '
// let n2 = '    Ron       Whisley      '
// let n3 = '    Hermione       Granger      '
// fixNames(n1);