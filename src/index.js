import "./styles/index.scss";

const elvenShieldRecipe = {
    leatherStripe: 2,
    ironIngot: 1,
    refineMoonstone: 4,
};

const elvenGauntletsRecipe = {
    ...elvenShieldRecipe,
    leather: 2,
    refineMoonstone: 4,
};

console.log(elvenShieldRecipe);
console.log(elvenGauntletsRecipe);