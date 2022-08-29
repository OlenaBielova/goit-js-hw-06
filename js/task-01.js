
const categories = document.querySelectorAll('li.item');
const numberOfCategories = categories.length;
console.log(`Number of categories: ${numberOfCategories}`);


categories.forEach((category) => {
    console.log(`Category: ${category.querySelector('.item h2').textContent}`);
    console.log(`Elements: ${(category.querySelectorAll('li li')).length}`);
});


// const categoryEl = categories.forEach(category =>
//     console.log(`Category: ${category.querySelector('.item h2').textContent}`));

// const categoryElLength = categories.forEach(category =>
//     console.log((category.querySelectorAll('li li')).length));





//Напиши скрипт, який:
// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного элемента li.item у спику ul#categories, знайде і виведе в консоль текст 
// заголовку елемента(тегу < h2 >) і кількість елементів в категорії(усіх < li >, вкладених в нього).
// В результаті, в консолі будуть виведені наступні повідомлення.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

