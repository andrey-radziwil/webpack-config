import { useState } from "react";

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
  

  const Recipes = () => {
      const [recipe, setRecipe] = useState({});
      return ( 
          <div>
              <h3>Current Recipe:</h3>
              <button onClick={() => setRecipe(elvenShieldRecipe)}>Elven Shiel Recipe</button>
              <button onClick={() => setRecipe(elvenGauntletsRecipe)}>Elven Gauntlets Recipe</button>
              <ul>
                  {Object.keys(recipe).map((material) => (
                      <li key={material}>
                          {material}: {recipe[material]}
                      </li>
                  ))}
              </ul>
          </div>
       );
  }
  
  export default Recipes ;