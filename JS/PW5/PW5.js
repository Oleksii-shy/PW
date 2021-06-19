// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
//     a) змінює колір тексту елемнту з ід main_header на назву групи в якій ви вчитесь (mon-year)


// let textWithMain_header = document.getElementById('main_header');
// textWithMain_header.innerText = 'April-2021'

//     b) робить шириниу елементу ul 400px


// let ulWidth = document.getElementsByTagName('ul');
// for (let ul of ulWidth) {
//     ul.style.width = '400px'
// }


//     c) робить шириниу всіх елементів з класом linkList шириною 50%


// let elementsWithLinkList = document.getElementsByClassName('linkList');
// console.log(elementsWithLinkList);
// for (let element of elementsWithLinkList) {
//     element.style.width = '50%';
// }


//     d) отримує текст який зберігається в елементі з класом listElement2


// let listElementText = document.querySelector('li.listElement2 a');
// console.log(listElementText.innerText);



//     e) отримує всі елементи li та змінює ім колір фону на сірий


// let liElements = document.getElementsByTagName('li');
// for (let lishka of liElements) {
//     lishka.style.background = 'silver'
// }


//     f) отримує всі елементи 'a' та додає їм клас anchor


// let aElements = document.getElementsByTagName('a');
// for (let ashka of aElements) {
//     ashka.classList.add = 'anchor';
//     console.log(ashka.classList);
// }


//     g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів


// let aElementsText = document.getElementsByTagName('a');
// for (let aElement of aElementsText) {
//     if (aElement.innerText === 'link3') {
//         aElement.style.fontSize = '40px';
//     }
// }


//     h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a


// let addClassToA = document.querySelectorAll('a');
// for (let ashka of addClassToA) {
//     ashka.classList.add = `element_${ashka.innerText}`
//     console.log(ashka.classList);
// }


//     i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()


// let sub_headerElements = document.getElementsByClassName('sub-header');
// for (let item of sub_headerElements) {
//     item.style.background = prompt('Enter the color');
// }


//     j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()


// let sub_headerTextColor = document.getElementsByClassName('sub-header');
// for (let text of sub_headerTextColor) {
//     if (text.innerText === 'content 2 segment') {
//         text.style.color = prompt('Enter the color')
//     }
// }


//     k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()


// let changeText = document.querySelector('div.content_1 p.text_segment.text1');
// changeText.innerText = prompt('Enter the sentence');


//     l) отримати елементи p та змінити їм padding на 20px


// let pElements = document.getElementsByTagName('p');
// for (let p of pElements) {
//     p.style.padding = '20px';
// }


//     m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year)


// let text2Element = document.getElementsByClassName('text2')[0];
// text2Element.innerText = 'April-2021';


// 2. Створити форму з інпутом для введення ім'я, та action="index2.html".
// При відправці данних з форми, зберігати ім'я в localstorage, та переходити на index2.html.
// На index2.html виводити записане в localstorage ім'я в div


// let form = document.getElementById('f1');
// let nameInput = form.name;
// form.addEventListener('submit', function (e) {
//     let name = nameInput.value;
//     localStorage.setItem('user', name);
// })


// 3. Імітуємо наповнення інтернет магазину товарами :
// Створити форму з наступними полями :
// - назва товару
// - кількість товару
// - ціна товару
// - картинка товару (посилання з інтернету)
// Зберігати товари в масив в локалсорадж. При збережені товару з форми, action не повинно відбуватись.
// створити елемент <a href='list.html'> На сторінку товарів</a>, та list.html, при переході на який відобразити на сторінці всі товари.
// На сторінці  list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.

let form = document.forms.f2;
let productName = form.name;
let amountOfProduct = form.amount;
let productPrice = form.price;
let productPicture = form.picture;

form.addEventListener('submit', function (e) {
    e.preventDefault();
    let name = productName.value;
    let amount = amountOfProduct.value;
    let price = productPrice.value;
    let picture = productPicture.value;
    let productInfo = [];
    productInfo.push(name, amount, price, picture);
    let readyProduct = JSON.stringify(productInfo);
    localStorage.setItem('product', readyProduct);
})

let a = document.getElementsByClassName('goToList')[0];
a.style.textDecoration = 'none';
a.style.color = 'black';


// До кожного товару додати кнопку, при кліку на яку з лс видаляється конкретний обраний  товар