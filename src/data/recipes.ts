export interface Recipe {
  rId: number;
  category: string;
  name: string;
  baseServings: number;
  image: string; // <-- Agregamos la propiedad image
  ingredients: { name: string; quantity: number; unit: string }[];
  steps: string[];
}

export const recipes: Recipe[] = [
  {
    rId: 101,
    category: 'almuerzos-cenas',
    name: 'Bocaditos de pollo',
    baseServings: 1,
    image: '/images/1-BOCADITOS.jpg', // <-- Ruta de la imagen
    ingredients: [
      { name: 'Suprema', quantity: 80, unit: 'g' },
      { name: 'Avena', quantity: 20, unit: 'g' },
      { name: 'Huevo', quantity: 15, unit: 'g' },
      { name: 'Sal', quantity: 0.5, unit: 'g' },
      { name: 'Hierbas (orégano, albahaca, tomillo, perejil)', quantity: 1, unit: 'g' },
      { name: 'Aceite (asadera)', quantity: 5, unit: 'ml' }
    ],
    steps: [
      "Cortar la suprema en cubos o bastones.",
      "Batir los huevos con las hierbas picadas y la sal.",
      "Macerar la suprema en esta mezcla durante 30 minutos, en heladera.",
      "Escurrir.",
      "Rebozar con avena hasta cubrir toda la superficie.",
      "Colocar sobre una placa aceitada.",
      "Hornear hasta que estén dorados y bien cocidos por dentro."
    ]
  }
];
