const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listEl = document.querySelector("#ingredients");

console.log(listEl);

function createMarkUp(ingredients) {
  return ingredients.map((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    li.classList.add("item");
    return li;
  });
}

console.log(createMarkUp(ingredients));

listEl.append(...createMarkUp(ingredients));
