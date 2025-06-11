import React, { useState } from 'react';
import { recipes } from './data/recipes';

const App: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedRecipeId, setSelectedRecipeId] = useState<number | null>(null);
  const [chicos, setChicos] = useState<number>(0);
  const [medianos, setMedianos] = useState<number>(1);
  const [grandes, setGrandes] = useState<number>(0);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [solidUnit, setSolidUnit] = useState<'g' | 'kg'>('g');
  const [liquidUnit, setLiquidUnit] = useState<'ml' | 'l'>('ml');
  const [activeTab, setActiveTab] = useState<'ingredientes' | 'procedimiento' | 'materiales'>('ingredientes');

  const categories = [
    { id: 'desayunos-meriendas', name: 'Desayunos y Meriendas', image: '/images/desayunos.png' },
    { id: 'almuerzos-cenas', name: 'Almuerzos y Cenas', image: '/images/almuerzo.png' },
    { id: 'copa-leche', name: 'Copa de Leche', image: '/images/copa-leche.png' },
  ];

  const filteredRecipes = selectedCategory
    ? recipes.filter(
        (recipe) =>
          recipe.category === selectedCategory &&
          recipe.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  const currentRecipe = recipes.find((recipe) => recipe.rId === selectedRecipeId);

  const calcularCantidad = (cantidad: number, baseServings: number, unidad: string) => {
    const total = (chicos * (1 / 3)) + medianos + (grandes * (4 / 3));
    let resultado = (cantidad / baseServings) * total;

    if (unidad === 'g') {
      return solidUnit === 'kg' ? (resultado / 1000).toFixed(3) : resultado.toFixed(2);
    } else if (unidad === 'ml') {
      return liquidUnit === 'l' ? (resultado / 1000).toFixed(3) : resultado.toFixed(2);
    } else {
      return resultado.toFixed(2);
    }
  };

  const renderInputControl = (
    label: string,
    value: number,
    setValue: React.Dispatch<React.SetStateAction<number>>
  ) => (
    <div>
      <label className="block mb-1 font-semibold">{label}:</label>
      <div className="flex items-center gap-2">
        <button
          onClick={() => setValue((prev) => Math.max(prev - 1, 0))}
          className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          −
        </button>
        <input
          type="number"
          value={value === 0 ? '' : value}
          min={0}
          max={999}
          onFocus={(e) => e.target.select()}
          onChange={(e) => setValue(Number(e.target.value))}
          className="w-20 px-2 py-1 border border-gray-300 rounded bg-white text-black text-center"
        />
        <button
          onClick={() => setValue((prev) => Math.min(prev + 1, 999))}
          className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          +
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-blue-100 text-blue-900 flex flex-col items-center p-4 font-sans">
      <h1 className="text-4xl font-bold mb-4">Calculadora de Ingredientes</h1>

      {!selectedCategory && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="bg-white p-4 rounded-lg shadow-md hover:scale-105 cursor-pointer flex flex-col items-center"
              onClick={() => setSelectedCategory(cat.id)}
            >
              <img src={cat.image} alt={cat.name} className="w-full h-40 object-cover rounded mb-2" />
              <h2 className="text-lg font-semibold">{cat.name}</h2>
            </div>
          ))}
        </div>
      )}

      {selectedCategory && !currentRecipe && (
        <div className="w-full max-w-3xl">
         <button
  className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 hover:bg-blue-200 font-medium rounded-full shadow-sm transition duration-200 mb-4"
  onClick={() => setSelectedCategory(null)}
>
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
  </svg>
  Volver
</button>


          <input
            type="text"
            placeholder="Buscar receta..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full p-2 mb-4 border border-gray-300 rounded bg-white text-black"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {filteredRecipes.map((recipe) => (
              <div
                key={recipe.rId}
                className="bg-white p-4 rounded-lg shadow-md hover:scale-105 cursor-pointer"
                onClick={() => {
                  setSelectedRecipeId(recipe.rId);
                  setChicos(0);
                  setMedianos(1);
                  setGrandes(0);
                  setActiveTab('ingredientes');
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
        </div>
      )}

      {currentRecipe && (
        <div className="w-full max-w-3xl bg-white p-6 rounded-lg shadow-lg mt-6">
         <button
  className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 hover:bg-blue-200 font-medium rounded-full shadow-sm transition duration-200 mb-4"
  onClick={() => setSelectedCategory(null)}
>
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
  </svg>
  Volver
</button>


          {currentRecipe.image && (
            <img
              src={currentRecipe.image}
              alt={currentRecipe.name}
              className="w-full h-60 object-cover rounded-lg mb-4"
            />
          )}

          <h2 className="text-2xl font-bold mb-4">{currentRecipe.name}</h2>

          {/* Checkboxes para unidades */}
          <div className="flex gap-8 mb-6">
            <div>
              <label className="font-semibold block mb-1">Medida en gramos:</label>
              <div className="flex gap-4">
                <label className="flex items-center gap-1 cursor-pointer">
                  <input type="radio" checked={solidUnit === 'g'} onChange={() => setSolidUnit('g')} />
                  Gramos
                </label>
                <label className="flex items-center gap-1 cursor-pointer">
                  <input type="radio" checked={solidUnit === 'kg'} onChange={() => setSolidUnit('kg')} />
                  Kilogramos
                </label>
              </div>
            </div>
            <div>
              <label className="font-semibold block mb-1">Medida líquida:</label>
              <div className="flex gap-4">
                <label className="flex items-center gap-1 cursor-pointer">
                  <input type="radio" checked={liquidUnit === 'ml'} onChange={() => setLiquidUnit('ml')} />
                  Mililitros
                </label>
                <label className="flex items-center gap-1 cursor-pointer">
                  <input type="radio" checked={liquidUnit === 'l'} onChange={() => setLiquidUnit('l')} />
                  Litros
                </label>
              </div>
            </div>
          </div>

          {/* Comensales */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {renderInputControl('Comensales Chicos', chicos, setChicos)}
            {renderInputControl('Comensales Medianos', medianos, setMedianos)}
            {renderInputControl('Comensales Grandes', grandes, setGrandes)}
          </div>

          {/* Pestañas */}
          <div className="flex gap-4 mb-4">
            {['ingredientes', 'procedimiento', 'materiales'].map((tab) => (
              <button
                key={tab}
                className={`px-4 py-2 rounded-t-lg font-semibold capitalize ${
                  activeTab === tab ? 'bg-blue-200 text-blue-900' : 'bg-gray-100 text-gray-600'
                }`}
                onClick={() => setActiveTab(tab as typeof activeTab)}
              >
                {tab === 'ingredientes' ? 'Ingredientes' : tab === 'procedimiento' ? 'Procedimiento' : 'Materiales'}
              </button>
            ))}
          </div>

          {/* Contenido de pestañas */}
          {activeTab === 'ingredientes' && (
            <table className="w-full table-auto border-separate border-spacing-y-2 mb-4">
              <thead>
                <tr className="text-sm text-blue-800">
                  <th className="text-left px-2 py-1">Ingrediente</th>
                  <th className="text-center px-2 py-1">Cantidad</th>
                  <th className="text-left px-2 py-1">Unidad</th>
                </tr>
              </thead>
              <tbody>
                {currentRecipe.ingredients.map((ing, i) => {
                  const isHuevo = ing.name.toLowerCase() === 'huevo' && ing.unit === 'g';
                  return (
                    <tr key={i} className="border-b border-blue-200">
                      <td className="py-2 pr-4">{ing.name}</td>
                      <td className="py-2 px-2 text-center">
                        {isHuevo
                          ? Math.ceil(Number(calcularCantidad(ing.quantity, currentRecipe.baseServings, ing.unit)) / 60) + ' unidades'
                          : calcularCantidad(ing.quantity, currentRecipe.baseServings, ing.unit).replace('.', ',')}
                      </td>
                      <td className="py-2 pl-2">
                        {isHuevo
                          ? 'Unidades'
                          : ing.unit === 'g'
                          ? solidUnit === 'kg'
                            ? 'Kilogramos'
                            : 'Gramos'
                          : ing.unit === 'ml'
                          ? liquidUnit === 'l'
                            ? 'Litros'
                            : 'Mililitros'
                          : ing.unit}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}

          {activeTab === 'procedimiento' && (
            <div className="bg-blue-50 border border-blue-200 rounded p-4">
              <h4 className="font-semibold mb-2 text-blue-800">Pasos:</h4>
              <ol className="list-decimal pl-5 space-y-2 text-sm">
                {currentRecipe.steps.map((step, i) => (
                  <li key={i}>{step}</li>
                ))}
              </ol>
            </div>
          )}

          {activeTab === 'materiales' && (
            <div className="bg-blue-50 border border-blue-200 rounded p-4 text-center text-sm text-blue-800 italic">
              Aquí se mostrarán videos de YouTube relacionados próximamente.
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default App;
