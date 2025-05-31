import React, { useState } from 'react';
import type { Recipe } from '../data/recipes';

interface RecipeDetailProps {
  recipe: Recipe;
  onBack: () => void;
}

const RecipeDetail: React.FC<RecipeDetailProps> = ({ recipe, onBack }) => {
  const [smallCount, setSmallCount] = useState<number>(0);
  const [mediumCount, setMediumCount] = useState<number>(0);
  const [largeCount, setLargeCount] = useState<number>(0);

  const calculateAdjustedQuantity = (baseQuantity: number) => {
    const mediumTotal = mediumCount;
    const smallTotal = smallCount * (2 / 3); // 1/3 menos
    const largeTotal = largeCount * (4 / 3); // 1/3 más
    const total = mediumTotal + smallTotal + largeTotal;
    return (baseQuantity * total) / recipe.baseServings;
  };

  return (
    <div className="w-full max-w-3xl bg-white p-6 rounded-lg shadow-lg mt-6">
      <h2 className="text-2xl font-bold mb-4">{recipe.name}</h2>

      <div className="flex flex-wrap gap-4 mb-4">
        <label className="flex flex-col text-blue-900">
          Comensales Chicos:
          <input
            type="number"
            value={smallCount}
            min={0}
            onChange={(e) => setSmallCount(Number(e.target.value))}
            className="ml-2 px-2 py-1 border border-gray-300 rounded bg-white text-black"
          />
        </label>
        <label className="flex flex-col text-blue-900">
          Comensales Medianos:
          <input
            type="number"
            value={mediumCount}
            min={0}
            onChange={(e) => setMediumCount(Number(e.target.value))}
            className="px-2 py-1 border border-gray-300 rounded bg-white text-black"
          />
        </label>
        <label className="flex flex-col text-blue-900">
          Comensales Grandes:
          <input
            type="number"
            value={largeCount}
            min={0}
            onChange={(e) => setLargeCount(Number(e.target.value))}
            className="px-2 py-1 border border-gray-300 rounded bg-white text-black"
          />
        </label>
      </div>

      <h3 className="text-lg font-semibold mb-2">Ingredientes:</h3>
      <ul className="list-disc pl-6 mb-4">
        {recipe.ingredients.map((ing, index) => (
          <li key={index}>
            {ing.name}: {calculateAdjustedQuantity(ing.quantity).toFixed(2)} {ing.unit}
          </li>
        ))}
      </ul>

      <h3 className="text-lg font-semibold mb-2">Procedimiento:</h3>
      <ol className="list-decimal pl-6">
        {recipe.steps.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>

      <button
        className="mt-6 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        onClick={onBack}
      >
        Volver
      </button>
    </div>
  );
};

export default RecipeDetail;
