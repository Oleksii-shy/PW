// -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом

// class Girl {
//     constructor(name, age, footsize) {
//         this.name = name;
//         this.age = age;
//         this.footsize = footsize;
//     }
// }

// let girls = [
//     new Girl('Vika', 18, 36),
//     new Girl('Oksana', 21, 37),
//     new Girl('Veronica', 19, 35),
//     new Girl('Olya', 26, 38),
//     new Girl('Anna', 24, 36),
//     new Girl('Yulya', 22, 35),
//     new Girl('Karina', 27, 34),
//     new Girl('Maryana', 28, 40),
//     new Girl('Andriana', 23, 35),
//     new Girl('Solomia', 24, 37),
// ];

// class Boy extends Girl {
//     constructor(name, age, shoe) {
//         super(name, age);
//         this.shoe = shoe;
//     }
// }

// let maxim = new Boy('Max', 25, 40);

// for (let beautyGirl of girls) {
//     if (beautyGirl.footsize === maxim.shoe) {
//         console.log(beautyGirl);
//     }
// }



// -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить


// function Girl(name, age, footsize) {
//             this.name = name;
//             this.age = age;
//             this.footsize = footsize;
//     }
    
//     let girls = [
//         new Girl('Vika', 18, 37),
//         new Girl('Oksana', 21, 37),
//         new Girl('Veronica', 19, 35),
//         new Girl('Olya', 26, 38),
//         new Girl('Anna', 24, 36),
//         new Girl('Yulya', 22, 35),
//         new Girl('Karina', 27, 34),
//         new Girl('Maryana', 28, 36),
//         new Girl('Andriana', 23, 36),
//         new Girl('Solomia', 24, 36),
//     ];
  
//     function Boy(name, age, shoe) {
//         this.name = name;
//         this.age = age;
//         this.shoe = shoe;
//         this.findGirl = function (arr = []) {
//            let theOnlyOne = {age: 30};
//            console.log(theOnlyOne);
//             for (beautyGirl of arr) {
//                 if (beautyGirl.footsize == this.shoe && theOnlyOne.age > beautyGirl.age) {
//                     theOnlyOne = beautyGirl;      
//             }   
//         }  
//         console.log(theOnlyOne);    
//     }
// }

// let oleg = new Boy('Oleg', 27, 36);
//     console.log(oleg);
//     oleg.findGirl(girls);
    

// -  Створити функцію конструктор для об'єкту який описує теги
// Властивості
//  -назва тегу
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити
//  -назву атрибуту
//  -опис дії атрибуту
//  інформацію брати з htmlbook.ru

//  Таким чином описати теги
//  -a
//  -div
//  -h1
//  -span
//  -input
//  -form
//  -option
//  -select
//  Приклад результуючого об'єкту
//    {
//         titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//         attrs: [
//         {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//         {/*some props and values*/},
//         {/*...*/},
//         {/*...*/},
//         ]

//    }


// function TagConstructor(name, action, attrs) {
//     this.name = name;
//     this.action = action;
//     this. attrs = attrs;
// }

// let a = new TagConstructor('a', 'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок.', [{titleOfAttr: 'accesskey', actionOfAttr: 'Активация ссылки с помощью комбинации клавиш.'}, {titleOfAttr: 'coords', actionOfAttr: 'Устанавливает координаты активной области.',}]);


// let div = new TagConstructor('div', 'Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого.', [{ titleOfAttr: 'align', actionOfAttr: 'Задает выравнивание содержимого тега <div>.'},
// {titleOfAttr: 'title', actionOfAttr: 'Добавляет всплывающую подсказку к содержимому.',}]);


// let h1 = new TagConstructor('h1', 'Тег <h1> представляет собой наиболее важный заголовок первого уровня.', [{titleOfAttr: 'align', actionOfAttr: 'Определяет выравнивание заголовка.',}]);


// let span = new TagConstructor('span', 'Тег <span> предназначен для определения строчных элементов документа.', [{titleOfAttr: 'accesskey', actionOfAttr: 'Позволяет получить доступ к элементу с помощью заданного сочетания клавиш.'},
// {titleOfAttr: 'class', actionOfAttr: 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.',}]);


// let input = new TagConstructor('input', 'Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем.', [{titleOfAttr: 'accept', actionOfAttr: 'Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов.'},
// {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к элементу с помощью комбинации клавиш.',}]);


// let form = new TagConstructor('form', 'Тег <form> устанавливает форму на веб-странице.', [{titleOfAttr: 'accept-charset', actionOfAttr: 'Устанавливает кодировку, в которой сервер может принимать и обрабатывать данные.'},
// {titleOfAttr: 'action', actionOfAttr: 'Адрес программы или документа, который обрабатывает данные формы.',}]);


// let option = new TagConstructor('option', 'Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>.', [{titleOfAttr: 'disabled', actionOfAttr: 'Заблокировать для доступа элемент списка.'},
// {titleOfAttr: 'label', actionOfAttr: 'Указание метки пункта списка.',}]);


// let select = new TagConstructor('select', 'Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором, как показано далее.', [{titleOfAttr: 'accesskey', actionOfAttr: 'Позволяет перейти к списку с помощью некоторого сочетания клавиш.'},
// {titleOfAttr: 'autofocus', actionOfAttr: 'Устанавливает, что список получает фокус после загрузки страницы.',}]);


// console.log(a, div, h1, span, input, form, option, select);


// Реалізовуємо свій компютерний магазин.
// ===
// Необхідно реалізувати базовий клас комютера. Який має лише параметри:
// Оперативна память.
// Потужність процесора. (цифра від 0 до 1000)
// Назва.
// В кожного компютера має бути метод включання.


// class Computer {
//     constructor(memory, processor, name) {
//         this.memory = memory;
//         this.processor = processor;
//         this.name = name;
//         }
//     turnOn() {
//         console.log('Hello dear owner, let`s work');
//     }
// }


// let pc = new Computer(2, 500, 'AppleComputer')
// console.log(pc);
// pc.turnOn();


// Від базового компютрера треба реалізувати ноутбук.
// Він має нову властивість дюймаж монітора.
// У нього зявляється нова змінна роботи батареї. Ця змінна визначається як потужність / (дюйми * оперативку)


// class Laptop extends Computer {
//     constructor(memory, processor, name, screenSize) {
//         super(memory, processor, name);
//         this.screenSize = screenSize;
//         this.batery = this.processor/(this.screenSize*this.memory);
//     }
//     turnOn() {
//         console.log('Hello dear owner, let`s work');
//     }
// }

// let laptop = new Laptop(4, 600, 'MacBook', 15);
// laptop.turnOn();
// console.log(laptop);


// Від ноутбука потрібно зробити ультрабук.
// Він має нову змінну ваги.
// При включенні ультрабуку має видаватися помилка, якшо вага більша за 2кг та батарея тримаж менше ніж 4 години.


// class UltraBook extends Laptop {
//     constructor(memory, processor, name, screenSize, weight) {
//         super(memory, processor, name, screenSize);
//         this.weight = weight;
//     }
//     turnOn() {
//         if (this.weight > 2 && this.batery < 4) {
//             console.log('Issue');
//         }
//         else {
//         console.log('Hello dear owner, let`s work');
//         }
//     }
// }

// let ultraBook = new UltraBook(6, 700, 'MacBook', 13, 3);
// ultraBook.turnOn();
// console.log(ultraBook);

// Від базвого класу потрібно створити базовий ПК.
// В нього має бути новий метод запуску ігор.
// Кількість FPS визначається як потужність / опервтивку.
// Example: `You are playing *GAME_NAME* with *FPS_COUNT* FSP`


// class PC extends Computer {
//     constructor(memory, processor, name) {
//         super(memory, processor, name)
//         this.fps = this.processor/this.memory;
//         }
//     turnOn() {
//         console.log('Hello dear owner, let`s work');
//     }
//     playGame(game = '') {
//         console.log(`You are playing ${game} with ${this.fps} FSP`);
//     }
// }


// let basePC = new PC(4, 500, 'Dell');
// console.log(basePC);
// basePC.turnOn();
// basePC.playGame('WarThunder');


// Компютер можна апгрейдити.
// Потужність процесора можна збільшувати максимум на 10%. Зменшувати її не можна.
// Оперативку можна збільшити лише в 2 рази. Зменшувати її не можна.
// Для зміни характеритик мають бути свої методи. Мняти змінну "в лоб" заборонено.


// class PowerPC extends PC {
//     constructor(memory, processor, name) {
//         super(memory, processor, name)
//         }
//         increasePower() {
//             let max = 1.1;
//             let min = 1.0;
//             this.processor *= (Math.random() * (max - min + 0.01) + min);
//             this.processor = Math.round(this.processor);
//         }
//         increaseMemory() {
//             this.memory *= 2;
//         }
//     turnOn() {
//         console.log('Hello dear owner, let`s work');
//     }
//     playGame(game = '') {
//         console.log(`You are playing ${game} with ${this.fps} FSP`);
//     }
// }


// let powerPC = new PowerPC(6, 600, 'Asus');
// console.log(powerPC);
// powerPC.increasePower();
// powerPC.increaseMemory();
// powerPC.turnOn();
// powerPC.playGame('WarThunder');
// console.log(powerPC);


// Від базового ПК необхідно зробити ігровий ПК.
// Кількість ФПС має бути рівно в 2 рази більший ніж в звичайного ПК.
// При запуску однієї гри потужніть процесора має падати на 0.1%.
// Якшо потужність процесора менша ніж 500. І оперативка менша за 8 потрібно видати помилку, (алерт, або консоль)
// що на цьому відрі ігри не запускаються.


// class GamePC extends PC {
//     constructor(memory, processor, name) {
//         super(memory, processor, name)
//         this.fps = basePC.fps * 2;
//     }
//     turnOn() {
//         console.log('Hello dear owner, let`s work');
//     }      
//     playGame(game = '') {
//         if (this.processor < 500 && this.memory < 8) {
//             console.log('На цьому відрі ігри не запускаються!!!!!!!!');
//         }
//         else {
//                 this.processor *= 0.999; 
//                 console.log(`You are playing ${game} with ${this.fps} FSP`);
        
//         }
        
//         }
    
// }

// let gamePC = new GamePC(8, 1000, 'Acer');
// console.log(gamePC);
// gamePC.turnOn();
// gamePC.playGame('WarThunder');
// gamePC.playGame('GTA V');
