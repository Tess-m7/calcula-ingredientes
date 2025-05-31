import React, { useState } from 'react';
import { recipes } from './data/recipes';

const App: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedRecipeId, setSelectedRecipeId] = useState<number | null>(null);
  const [chicos, setChicos] = useState<number>(0);
  const [medianos, setMedianos] = useState<number>(0);
  const [grandes, setGrandes] = useState<number>(0);

  const categories = [
    { id: 'desayunos-meriendas', name: 'Desayunos y Meriendas' },
    { id: 'almuerzos-cenas', name: 'Almuerzos y Cenas' },
    { id: 'copa-leche', name: 'Copa de Leche' },
  ];

  const filteredRecipes = selectedCategory
    ? recipes.filter((recipe) => recipe.category === selectedCategory)
    : [];

  const currentRecipe = recipes.find((recipe) => recipe.rId === selectedRecipeId);

  const calcularCantidad = (cantidad: number, baseServings: number) => {
    const total = (chicos * (1 / 3)) + medianos + (grandes * (4 / 3));
    return (cantidad / baseServings) * total;
  };

  return (
    <div className="min-h-screen bg-blue-100 text-blue-900 flex flex-col items-center p-8">
      <h1 className="text-4xl font-bold mb-4">Calculadora de Ingredientes</h1>

      {!selectedCategory && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="bg-white p-4 rounded-lg shadow-md hover:scale-105 cursor-pointer"
              onClick={() => setSelectedCategory(cat.id)}
            >
              <h2 className="text-lg font-semibold">{cat.name}</h2>
            </div>
          ))}
        </div>
      )}

      {selectedCategory && !currentRecipe && (
        <div className="w-full max-w-3xl">
          <h2 className="text-2xl font-bold mb-4">Recetas</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {filteredRecipes.map((recipe) => (
              <div
                key={recipe.rId}
                className="bg-white p-4 rounded-lg shadow-md hover:scale-105 cursor-pointer"
                onClick={() => {
                  setSelectedRecipeId(recipe.rId);
                  setChicos(0);
                  setMedianos(0);
                  setGrandes(0);
                }}
              >
                {recipe.image && (
                  <img
                    src={recipe.image}
                    alt={recipe.name}
                    className="w-full h-40 object-cover rounded-md mb-2"
                  />
                )}
                <h3 className="text-lg font-bold">{recipe.name}</h3>
                <p className="text-sm">Rinde {recipe.baseServings} porciones medianas</p>
              </div>
            ))}
          </div>
          <button
            className="mt-6 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            onClick={() => setSelectedCategory(null)}
          >
            Volver
          </button>
        </div>
      )}

      {currentRecipe && (
        <div className="w-full max-w-3xl bg-white p-6 rounded-lg shadow-lg mt-6">
          {currentRecipe.image && (
            <img
              src={currentRecipe.image}
              alt={currentRecipe.name}
              className="w-full h-60 object-cover rounded-lg mb-4"
            />
          )}

          <h2 className="text-2xl font-bold mb-4">{currentRecipe.name}</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div>
              <label className="block mb-1 font-semibold">Comensales Chicos:</label>
              <input
                type="number"
                value={chicos}
                min={0}
                onChange={(e) => setChicos(Number(e.target.value))}
                className="w-full px-2 py-1 border border-gray-300 rounded bg-white text-black"
              />
            </div>
            <div>
              <label className="block mb-1 font-semibold">Comensales Medianos:</label>
              <input
                type="number"
                value={medianos}
                min={0}
                onChange={(e) => setMedianos(Number(e.target.value))}
                className="w-full px-2 py-1 border border-gray-300 rounded bg-white text-black"
              />
            </div>
            <div>
              <label className="block mb-1 font-semibold">Comensales Grandes:</label>
              <input
                type="number"
                value={grandes}
                min={0}
                onChange={(e) => setGrandes(Number(e.target.value))}
                className="w-full px-2 py-1 border border-gray-300 rounded bg-white text-black"
              />
            </div>
          </div>

          <h3 className="text-lg font-semibold mb-2">Ingredientes:</h3>
          <ul className="list-disc pl-6 mb-4">
            {currentRecipe.ingredients.map((ing, i) => (
              <li key={i}>
                {ing.name}: {calcularCantidad(ing.quantity, currentRecipe.baseServings).toFixed(2).replace('.', ',')} {ing.unit}
              </li>
            ))}
          </ul>

          <h3 className="text-lg font-semibold mb-2">Procedimiento:</h3>
          <ol className="list-decimal pl-6">
            {currentRecipe.steps.map((step, i) => (
              <li key={i}>{step}</li>
            ))}
          </ol>

          <button
            className="mt-6 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            onClick={() => {
              setSelectedRecipeId(null);
              setSelectedCategory(null);
              setChicos(0);
              setMedianos(0);
              setGrandes(0);
            }}
          >
            Volver
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
