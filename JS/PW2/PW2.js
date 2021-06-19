// - Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.


// let arr = ['a', 'b', 'c'];

// for (let i = 1; i < 4; i++) {
//     arr.push(i)
//    console.log(arr);
// }


// - Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].


// let arr = [1, 2, 3];

// arr[0] = 3;
// arr[2] = 1;

// console.log(arr);


// let arr = [1, 2, 3];

// let newArr = [];

// for (i = 3; i > 0; i--) {
//     newArr.push(i);
//     console.log(newArr);
// }


// - Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.


// let arr = [1, 2, 3];

// arr.push(4, 5, 6);

// console.log(arr);


// - Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.


// let arr = [1, 2, 3];

// arr.unshift(4, 5, 6);

// console.log(arr);


// - Дан масив [1, 2, 3, 4, 5]. Перетворіть масив в [4, 5].


// let arr = [1, 2, 3, 4, 5];

// for (i = 0; i < 3; i++) {
//     arr.shift(i);
//     console.log(arr);
// }


// - Дан масив [1, 2, 3, 4, 5]. Перетворіть масив в [1,2].


// let arr = [1, 2, 3, 4, 5];

// for (i = 4; i > 1; i--) {
//     arr.pop(i);
//     console.log(arr);
// }


// - Дан масив [1, 2, 3, 4, 5]. Зробіть з нього масив [1, 2, 3, 'a', 'b', 'c'].


// let arr = [1, 2, 3, 4, 5];

// arr.splice(3, 5, 'a', 'b', 'c');
// console.log(arr);


// let arr = [1, 2, 3, 4, 5];

// for (i = 4; i > 2; i--) {
//     arr.pop(i);
// }

// arr.push('a', 'b', 'c');

// console.log(arr);


// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.


// let arr = [1, 2, 12, 4, 16, 6, 7, 8, 9, 10];

// for (i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//         console.log(arr[i]);
//     }
// }


// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.


// let arr = [1, 2, 3, 4, 5, 28, 7, 8, 9, 11];
// let newArr = [];

// for (let i = 0; i < arr.length; i++) {
//     newArr.push(arr[i]);
// }

// console.log(newArr);


// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.


// let arr = [ 'a', 'b', 'c'];

// let word = '';

// for (let i = 0; i < arr.length; i++) {
//     word = word + arr[i];
// }
// console.log(word);


// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.


// let arr = [ 'a', 'b', 'c'];

// let word = '';

// let i = 0;

// while (i < arr.length) {
//     word = word + arr[i];
//     i++
// }
// console.log(word);


// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.


// let arr = [ 'a', 'b', 'c'];

// let word = '';

// for (letter of arr) {
//     word = word + letter;
// }
// console.log(word);


// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
// 1. перебрати його циклом while


// let arr = [2,17,13,6,22,31,45,66,100,-18];

// let i = 0;

// while (i < arr.length) {
//     console.log(arr[i]);
//     i++
// }


// 2. перебрати його циклом for


// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for (number of arr) {
//     console.log(number);
// }


// 3. перебрати циклом while та вивести  числа тільки з непарним індексом


// let i = 0;

// while (i < arr.length) {
//     if (i % 2 !== 0) {
//         console.log(arr[i]);
//     }
//     i++
// }


// 4. перебрати циклом for та вивести  числа тільки з непарним індексом


// for (i = 0; i < arr.length; i++) {
//     if (i % 2 !== 0) {
//         console.log(arr[i]);
//     }
// }


// 5. перебрати циклом while та вивести  числа тільки парні  значення


// let i = 0;

// while (i < arr.length) {
//     if (arr[i] % 2 === 0) {
//         console.log(arr[i]);
//     }
//     i++
// }


// 6. перебрати циклом for та вивести  числа тільки парні  значення


// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//         console.log(arr[i]);
//     }
// }


// 7. замінити кожне число кратне 3 на слово "okten"


// for (i= 0; i < arr.length; i++) {
//     if (arr[i] % 3 === 0) {
//         arr[i] = 'okten'
//     }
// }

// console.log(arr);


// 8. вивести масив в зворотньому порядку.

// arr.reverse();
// console.log(arr);


// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

// let arr = [2,17,13,6,22,31,45,66,100,-18];

// let i = arr.length - 1;
// while (i >= 0) {
//     console.log(arr[i]); 
//     i--
// }


// for (let i = arr.length - 1; i >= 0; i--) {
//     console.log(arr[i]);
// }


// let i = arr.length - 1;
// while (i >= 0) {
//     if (i % 2 !== 0) {
//         console.log(arr[i]);
//     }
//     i--
// }


// for (let i = arr.length - 1; i >= 0; i--) {
//     if (i % 2 !== 0) {
//         console.log(arr[i]);
//     }
// }


// let i = arr.length - 1;
// while(i >= 0) {
//     if (arr[i] % 2 === 0) {
//         console.log(arr[i]);
//     }
//     i--
// }


// for (let i = arr.length - 1; i >= 0; i--) {
//     if (arr[i] % 2 === 0) {
//         console.log(arr[i]);
//     }
// }


// for (let i = arr.length - 1; i >= 0; i--) {
//     if (arr[i] % 3 === 0) {
//         arr[i] = 'okten'
//     }
// }
// console.log(arr.reverse());


// 10
//  створити пустий масив та :
// - заповнити його 50 парними числами за допомоги циклу.


// let arr = [];
// for (i = 1; i <= 100; i++) {
//     if (i % 2 === 0) {
//         arr.push(i);
//     }
// }
// console.log(arr);


// - заповнити його 50 непарними числами за допомоги циклу.


// let arr = [];
// for (let i = 1; i <= 100; i++) {
//     if (i % 2 !== 0) {
//         arr.push(i);
//     }
// }
// console.log(arr);


// 1. Створити пустий масив та :
//        a. заповнити його 50 парними числами за допомоги циклу.


       // let arr = [];
// for (i = 1; i <= 100; i++) {
//     if (i % 2 === 0) {
//         arr.push(i);
//     }
// }
// console.log(arr);


    //    b. заповнити його 50 непарними числами за допомоги циклу.


       // let arr = [];
// for (let i = 1; i <= 100; i++) {
//     if (i % 2 !== 0) {
//         arr.push(i);
//     }
// }
// console.log(arr);


    //    c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)


    //    let arr = [];
    //    for (i = 0; i < 20; i++) {
    //        arr.push(Math.ceil(Math.random(i)*100))
    //    }
    //    console.log(arr);


    //    d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)


    // let arr = [];
    // for (let i = 0; i < 20; i++) {
    //     let max = 732;
    //     let min = 8;
    //     arr.push(Math.floor(Math.random(i)*(max - min + 1)) + min)
    // }
    // console.log(arr);


    // 2. Вивести за допомогою console.log кожен третій елемен


    // for (let i = 0; i < arr.length; i++) {
    //     if (i % 3 === 0 && i !== 0) {
    //         console.log(i, arr[i]);
    //     }
    // }


    // 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.


    // for (let i = 0; i < arr.length; i++) {
    //     if (i % 3 === 0 && i !== 0) {
    //         if (arr[i] % 2 === 0) {
    //             console.log(i, arr[i]);
    //         }
    //     }
    // }


    // 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив


//     let newArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (i % 3 === 0 && i !== 0) {
//             if (arr[i] % 2 === 0) {
//                 newArr.push(arr[i]);
//             }
//         }
//     }
// console.log(newArr);


// 5. Вивести кожен елемент масиву, сусід справа якого є парним
//   EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56


// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//         console.log(arr[i - 1]);
//     }
// }


// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.


// let arr = [100,250,50,168,120,345,188];
// let middlePrice = 0;
// for (let y = 0; y < 1; y++) {
//     for (let i = 0; i < arr.length; i++) {
//         middlePrice = middlePrice + arr[i];
//     }
//     middlePrice = Math.round(middlePrice/arr.length);
// }
// console.log(middlePrice);


// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
   

// let arr = [];

// for (let i = 0; i < 10; i++) {
//     let max = 100;
//     let min = 1;
//     arr.push(Math.floor(Math.random(i) * (max - min + 1)) + min);
// }
// console.log(arr);

// let newArr = [];

// for (let i = 0; i < arr.length; i++) {
//     newArr.push(arr[i]*5);
// }
//     console.log(newArr);


    // 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.


    // let arr = [1, true, 'hello', '28', false, 'true', 29, 'abc', 45];
    // let newArr = [];

    // for (let num of arr) {
    //     if (typeof num === 'number') {
    //         newArr.push(num);
            
    //     }
    // }
    // console.log(newArr);


//     - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:

// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// Записати цей об'єкт в новий масив
// Example:
// let usersWithCities = [
//     {
//         id: 1, // <===
//         name: 'vasya',
//         age: 31,
//         status: false,
//         address: {
//             user_id: 1, // <===
//             country: 'Ukraine',
//             city: 'Ternopil'
//         }
//     },
    
// ]


// let usersWithId = [
//     {id: 1, name: 'vasya', age: 31, status: false},
//     {id: 2, name: 'petya', age: 30, status: true},
//     {id: 3, name: 'kolya', age: 29, status: true},
//     {id: 4, name: 'olya', age: 28, status: false}
// ];

// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];

// let usersWithCities = [];


// for (y = 0; y < usersWithId.length; y++) {
// for (i = 0; i < citiesWithId.length; i++) {
//     if (usersWithId[y].id === citiesWithId[i].user_id) {
//         usersWithId[y].address = citiesWithId[i];
//     }
   
// }

// }
// usersWithCities.push(usersWithId);
// console.log(usersWithCities);


