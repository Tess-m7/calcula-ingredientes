import React from 'react';

interface RecipeSelectorProps {
  onSelectRecipe: (recipeId: number) => void;
}

const RecipeSelector: React.FC<RecipeSelectorProps> = ({ onSelectRecipe }) => {
  const recipes = [
    { id: 1, name: "Pizza Margarita" },
    { id: 2, name: "Ensalada Mixta" },
    { id: 3, name: "Tortilla de Papas" }
  ];

  return (
    <div>
      <h2>Selecciona una receta:</h2>
      <select onChange={(e) => onSelectRecipe(Number(e.target.value))}>
        <option value="">-- Selecciona --</option>
        {recipes.map((recipe) => (
          <option key={recipe.id} value={recipe.id}>
            {recipe.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default RecipeSelector;
