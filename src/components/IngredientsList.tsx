import React from 'react';

interface Ingredient {
  name: string;
  quantity: number;
  unit: string;
}

interface IngredientsListProps {
  ingredients: Ingredient[];
  factor: number;
}

const IngredientsList: React.FC<IngredientsListProps> = ({ ingredients, factor }) => {
  return (
    <div>
      <h2>Ingredientes:</h2>
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index}>
            {ingredient.name}: {(ingredient.quantity * factor).toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} {ingredient.unit}

          </li>
        ))}
      </ul>
    </div>
  );
};

export default IngredientsList;
