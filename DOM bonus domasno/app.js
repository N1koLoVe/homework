console.log("its working");

const inputs = document.querySelector(".inputs");
const recipeName = document.querySelector("#title");
const numOfIngredients = document.querySelector("#ingredients");
const btn = document.querySelector(".btn");
const recipe = document.querySelector(".recipe");

const Recipe = {
  title: "",
  numOfIngredients: 0,
  ingredients: [],
};

let ingCounter = 1;

let ingredient;
let btnAdd;

btn.addEventListener(`click`, () => {
  Recipe.title = recipeName.value;
  Recipe.numOfIngredients = numOfIngredients.value;

  const html = `
    <div>
      <h2>${Recipe.title}</h2>
      <label for="ing">Ingredients #${ingCounter}</label>
      <div>
        <input type="text" id="ing" />
      </div>
      <button id="add">ADD</button>
    </div>
  `;
  inputs.innerHTML = html;

  inputs.addEventListener("click", (e) => {
    if (!e.target.closest("#add")) return;
    ingCounter++;
    const label = inputs.querySelector("label");
    label.innerText = `Ingredient #${ingCounter}`;
    const ing = inputs.querySelector("#ing");
    Recipe.ingredients.push(ing.value);
    ing.value = "";

    let allIngredients = ``;
    for (const ing of Recipe.ingredients) {
      allIngredients += `<li>${ing}</li>`;
    }

    let html = "";
    if (ingCounter <= Recipe.numOfIngredients) {
      html = `<div>
        <h2>${Recipe.title}</h2>
        <ul>
          ${allIngredients}
        </ul>
        <label for="ing">Ingredients #${ingCounter}</label>
        <div>
          <input type="text" id="ing" />
        </div>
        <button id="add">ADD</button>
      </div>`;
    } else {
      html = `
        <div>
          <h2>${Recipe.title}</h2>
          <ul>
            ${allIngredients}
          </ul>
        </div>
      `;
    }

    inputs.innerHTML = html;
  });
  console.log(Recipe);
});
