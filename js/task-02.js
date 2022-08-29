const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

console.dir(ingredients);

// let ingredientsList = [];
// ingredients.forEach((ingredient) => {
//   const ingredientsEl = document.createElement('li');
//   ingredientsEl.textContent = `${ingredient}`;
//   ingredientsEl.classList.add('item');
//   console.log(ingredientsEl);
//   ingredientsList.push(ingredientsEl)
// })

const ingredientsList = ingredients.map((ingredient) => {
  const ingredientsEl = document.createElement('li');
  ingredientsEl.textContent = `${ingredient}`;
  ingredientsEl.classList.add('item');

  return ingredientsEl;
})

const list = document.querySelector('#ingredients');
list.append(...ingredientsList);
console.log(list);


//Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.