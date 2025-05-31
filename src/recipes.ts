export interface Recipe {
  rId: number;
  name: string;
  baseServings: number;
  ingredients: { name: string; quantity: number; unit: string }[];
  steps: string[];
}

export const recipes: Recipe[] = [
  {
    rId: 101,
    name: 'Bocaditos de pollo',
    baseServings: 10, // Ajusta este valor si es necesario
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
  },
  // A partir de acá, seguimos agregando más recetas
  {
    rId: 102,
    name: 'Budín de pescado',
    baseServings: 10, // Ajusta este valor si es necesario
    ingredients: [
      { name: 'Pescado', quantity: 50, unit: 'g' },
      { name: 'Zanahoria', quantity: 30, unit: 'g' },
      { name: 'Cebolla', quantity: 10, unit: 'g' },
      { name: 'Ajo', quantity: 1, unit: 'g' },
      { name: 'Pulpa de tomate', quantity: 20, unit: 'ml' },
      { name: 'Huevo', quantity: 23, unit: 'g' },
      { name: 'Pan rallado', quantity: 5, unit: 'g' },
      { name: 'Queso rallado', quantity: 5, unit: 'g' },
      { name: 'Almidón de maíz', quantity: 2, unit: 'g' },
      { name: 'Sal', quantity: 0.5, unit: 'g' },
      { name: 'Aceite', quantity: 5, unit: 'ml' },
      { name: 'Laurel', quantity: 0.1, unit: 'hoja por porción' } // Ajuste de la unidad
    ],
    steps: [
      "Pelar, lavar y rallar o procesar la cebolla, el ajo y la zanahoria.",
      "Hervir el pescado fresco junto con el laurel, una vez cocido escurrir el agua y desmenuzar el pescado. Reservar.",
      "Rehogar la zanahoria, la cebolla y el ajo.",
      "Mezclar en un recipiente los huevos batidos, el queso, el almidón de maíz, pan rallado, el aceite y la sal.",
      "Agregar a esta mezcla el pescado y las verduras rehogadas y la pulpa de tomate.",
      "Disponer esta mezcla en una asadera aceitada.",
      "Cocinar en horno moderado aproximadamente 30 minutos.",
      "En la variante con pescado enlatado, escurrir el atún, rehogar las verduras con el ajo, y seguir el mismo procedimiento de mezcla y cocción."
    ]
  },
  {
    rId: 103,
    name: 'Carbonada criolla',
    baseServings: 10, // Ajusta este valor si es necesario
    ingredients: [
      { name: 'Carne en cubos', quantity: 50, unit: 'g' },
      { name: 'Fideos', quantity: 40, unit: 'g' },
      { name: 'Papa/boniato', quantity: 30, unit: 'g' },
      { name: 'Zanahoria', quantity: 40, unit: 'g' },
      { name: 'Zapallo/calabaza', quantity: 40, unit: 'g' },
      { name: 'Choclo', quantity: 15, unit: 'g' },
      { name: 'Arvejas', quantity: 15, unit: 'g' },
      { name: 'Cebolla', quantity: 10, unit: 'g' },
      { name: 'Morrón', quantity: 15, unit: 'g' },
      { name: 'Pulpa de tomate', quantity: 30, unit: 'g' },
      { name: 'Ajo', quantity: 1, unit: 'g' },
      { name: 'Sal', quantity: 1, unit: 'g' },
      { name: 'Aceite', quantity: 10, unit: 'g' },
      { name: 'Perejil', quantity: 2, unit: 'g' }
    ],
    steps: [
      "Pelar, lavar y picar o procesar la cebolla, el ajo y la zanahoria.",
      "Lavar y picar o procesar el morrón.",
      "Pelar, lavar y cortar en cubos la papa/boniato y el zapallo/calabaza.",
      "Rehogar la cebolla, el morrón y el ajo.",
      "Condimentar.",
      "Incorporar la carne.",
      "Agregar la zanahoria, la pulpa de tomate y el agua necesaria.",
      "Incorporar la papa/boniato.",
      "Agregar agua hasta cubrir todos los ingredientes.",
      "A los 10 minutos agregar el zapallo y los fideos.",
      "Agregar las arvejas y el choclo.",
      "Una vez finalizada la cocción apagar el fuego, agregar el aceite y el perejil picado y mezclar bien."
    ]
  },
  {
    rId: 104,
    name: 'Carne a la portuguesa',
    baseServings: 10, // Ajusta este valor si es necesario
    ingredients: [
      { name: 'Carne entera', quantity: 50, unit: 'g' },
      { name: 'Cebolla', quantity: 10, unit: 'g' },
      { name: 'Morrón', quantity: 15, unit: 'g' },
      { name: 'Zanahoria', quantity: 40, unit: 'g' },
      { name: 'Arvejas', quantity: 25, unit: 'g' },
      { name: 'Pulpa de tomate', quantity: 40, unit: 'g' },
      { name: 'Ajo', quantity: 1, unit: 'g' },
      { name: 'Sal', quantity: 0.5, unit: 'g' },
      { name: 'Aceite', quantity: 5, unit: 'ml' },
      { name: 'Perejil', quantity: 1, unit: 'g' },
      { name: 'Agua', quantity: 10, unit: 'ml' }
    ],
    steps: [
      "Pelar, lavar y picar o procesar la cebolla, el ajo.",
      "Pelar, lavar y cortar en rodajas la zanahoria.",
      "Lavar y picar o procesar el morrón.",
      "Cortar en cubos la carne.",
      "Rehogar la cebolla, el morrón y el ajo.",
      "Condimentar.",
      "Incorporar la carne.",
      "Agregar la zanahoria y la pulpa de tomate.",
      "Agregar agua hasta cubrir todos los ingredientes.",
      "Continuar la cocción hasta que los vegetales estén tiernos.",
      "Agregar las arvejas.",
      "Una vez finalizada la cocción apagar el fuego, agregar la mitad del aceite y el perejil picado y mezclar bien."
    ]
  },
  {
    rId: 105,
    name: 'Cazuela de lentejas',
    baseServings: 10, // Ajusta este valor si es necesario
    ingredients: [
      { name: 'Carne picada o en cubos', quantity: 50, unit: 'g' },
      { name: 'Lentejas', quantity: 20, unit: 'g' },
      { name: 'Arroz', quantity: 30, unit: 'g' },
      { name: 'Pulpa de tomate', quantity: 30, unit: 'ml' },
      { name: 'Zapallo/calabaza', quantity: 60, unit: 'g' },
      { name: 'Boniato', quantity: 15, unit: 'g' },
      { name: 'Papa', quantity: 15, unit: 'g' },
      { name: 'Zanahoria', quantity: 40, unit: 'g' },
      { name: 'Cebolla', quantity: 10, unit: 'g' },
      { name: 'Morrón', quantity: 15, unit: 'g' },
      { name: 'Ajo', quantity: 1, unit: 'g' },
      { name: 'Apio', quantity: 1, unit: 'g' },
      { name: 'Laurel', quantity: 0.1, unit: 'hoja por porción' }, // Ajuste descriptivo
      { name: 'Sal', quantity: 1, unit: 'g' },
      { name: 'Aceite', quantity: 10, unit: 'ml' },
      { name: 'Agua', quantity: 250, unit: 'ml' }
    ],
    steps: [
      "Dejar las lentejas entre 1 y 4 horas en remojo refrigeradas. En caso de porotos/garbanzos llevan de 12 a 24 horas de remojo.",
      "Pelar, lavar, picar o procesar la cebolla, el ajo.",
      "Lavar y picar o procesar el apio y el morrón.",
      "Pelar, lavar y cortar en cubos la papa, boniato, zanahoria y el zapallo.",
      "Rehogar la cebolla, el apio, el morrón y el ajo.",
      "Incorporar la zanahoria, las lentejas, la carne, la pulpa de tomate y el agua.",
      "Condimentar.",
      "Agregar agua hasta cubrir todos los ingredientes.",
      "Continuar la cocción durante 20 minutos a fuego suave.",
      "Agregar el arroz, el zapallo y el agua.",
      "Continuar cocinando.",
      "Una vez finalizada la cocción apagar el fuego, agregar el aceite y mezclar bien."
    ]
  },
  {
    rId: 106,
    name: 'Chop suey de cerdo',
    baseServings: 10, // Ajusta este valor si es necesario
    ingredients: [
      { name: 'Carne de cerdo', quantity: 50, unit: 'g' },
      { name: 'Cebolla', quantity: 10, unit: 'g' },
      { name: 'Morrón', quantity: 15, unit: 'g' },
      { name: 'Zanahoria', quantity: 40, unit: 'g' },
      { name: 'Zapallito', quantity: 20, unit: 'g' },
      { name: 'Berenjena', quantity: 25, unit: 'g' },
      { name: 'Repollo', quantity: 15, unit: 'g' },
      { name: 'Ajo', quantity: 2, unit: 'g' },
      { name: 'Tomillo', quantity: 0.5, unit: 'g' },
      { name: 'Sal', quantity: 0.5, unit: 'g' },
      { name: 'Aceite', quantity: 5, unit: 'ml' }
    ],
    steps: [
      "Pelar, lavar y picar o procesar la cebolla y la zanahoria.",
      "Lavar y picar o procesar el morrón.",
      "Lavar y cortar en cubos el zapallito y la berenjena.",
      "Lavar y cortar en juliana el repollo.",
      "Cortar en cubos la carne de cerdo.",
      "Rehogar la cebolla, morrón, zanahoria.",
      "Agregar la carne y luego la berenjena, el zapallito y por último el repollo.",
      "Condimentar.",
      "Continuar la cocción hasta que todas las verduras estén tiernas y la carne bien cocida evitando la sobre cocción para que las verduras no se reduzcan demasiado.",
      "Una vez finalizada la cocción apagar el fuego, agregar la mitad del aceite y mezclar bien.",
      "Elaborar el arroz o los fideos de acuerdo a las proporciones y al procedimiento especificado en Recetas Base.",
      "Para la variante con leguminosas: hidratar las leguminosas (relación leguminosa/agua=1/2) en heladera, hervir por aproximadamente 1 hora, verificar cocción, y luego agregarlas al procedimiento de los vegetales."
    ]
  },
  {
    rId: 107,
    name: 'Chupín de pescado y verduras',
    baseServings: 10, // Ajusta este valor si es necesario
    ingredients: [
      { name: 'Pescado', quantity: 60, unit: 'g' },
      { name: 'Papa', quantity: 26, unit: 'g' },
      { name: 'Cebolla', quantity: 10, unit: 'g' },
      { name: 'Zanahoria', quantity: 50, unit: 'g' },
      { name: 'Morrón', quantity: 15, unit: 'g' },
      { name: 'Pulpa de tomate', quantity: 20, unit: 'g' },
      { name: 'Arvejas', quantity: 30, unit: 'g' },
      { name: 'Ajo', quantity: 1, unit: 'g' },
      { name: 'Sal', quantity: 0.5, unit: 'g' },
      { name: 'Aceite', quantity: 5, unit: 'ml' },
      { name: 'Perejil', quantity: 1.5, unit: 'g' },
      { name: 'Agua', quantity: 25, unit: 'ml' }
    ],
    steps: [
      "Pelar, lavar la cebolla, el ajo, la zanahoria y la papa.",
      "Picar el ajo.",
      "Cortar en cubos la cebolla, en rodajas la zanahoria y la papa.",
      "Lavar y cortar en cubos el morrón.",
      "Cortar en cubos el pescado sin espinas.",
      "Rehogar la cebolla, el morrón y el ajo.",
      "Incorporar la zanahoria y el pescado.",
      "Condimentar.",
      "Agregar la pulpa de tomate y el agua.",
      "Agregar la pulpa y las arvejas.",
      "Una vez finalizada la cocción apagar el fuego, agregar la mitad del aceite y el perejil picado y mezclar bien.",
      "Elaborar el arroz de acuerdo a las proporciones y al procedimiento especificado en Acompañamientos."
    ]
  },
  {
    rId: 108,
    name: 'Croquetas de atún y papas',
    baseServings: 10, // Ajusta este valor si es necesario
    ingredients: [
      { name: 'Papa', quantity: 160, unit: 'g' },
      { name: 'Atún', quantity: 60, unit: 'g' },
      { name: 'Cebolla', quantity: 20, unit: 'g' },
      { name: 'Queso rallado', quantity: 5, unit: 'g' },
      { name: 'Huevo', quantity: 22, unit: 'g' },
      { name: 'Mix de verdes (perejil, ciboulette)', quantity: 1, unit: 'g' },
      { name: 'Ajo', quantity: 1, unit: 'g' },
      { name: 'Polenta', quantity: 20, unit: 'g' },
      { name: 'Aceite (asadera)', quantity: 7.5, unit: 'g' }
    ],
    steps: [
      "Pelar, lavar y cocinar las papas. Hacer un puré y reservarlo.",
      "Pelar, lavar, picar o procesar la cebolla y el ajo.",
      "Lavar y picar el mix de verdes.",
      "Rehogar la cebolla y el ajo.",
      "Escurrir el atún.",
      "Batir ligeramente los huevos con el mix de verdes.",
      "Mezclar el puré de papas con la cebolla, el ajo, el atún y los huevos formando una pasta.",
      "Formar bolitas y rebozar con polenta.",
      "Llevar a la heladera unos 15 minutos.",
      "Precalentar el horno.",
      "Untar una asadera con aceite, disponer las bolitas y cocinarlas de ambos lados en horno moderado.",
      "Para la variante con pescado fresco y arroz: cocinar el arroz según procedimiento anexo en recetas básicas, hervir el pescado, escurrir y reservar. Realizar el procedimiento anterior reemplazando el atún y puré por pescado fresco desmenuzado, arroz y sal. Armar y cocinar como se indica."
    ]
  },
  {
    rId: 109,
    name: 'Ensalada completa de pollo',
    baseServings: 10, // Ajusta este valor si es necesario
    ingredients: [
      { name: 'Arroz', quantity: 40, unit: 'g' },
      { name: 'Lentejas', quantity: 20, unit: 'g' },
      { name: 'Suprema de pollo', quantity: 50, unit: 'g' },
      { name: 'Zanahoria', quantity: 40, unit: 'g' },
      { name: 'Tomate', quantity: 40, unit: 'g' },
      { name: 'Choclo', quantity: 20, unit: 'g' },
      { name: 'Sal', quantity: 0.75, unit: 'g' },
      { name: 'Aceite', quantity: 5, unit: 'ml' },
      { name: 'Mayonesa', quantity: 15, unit: 'g' }
    ],
    steps: [
      "Dejar las lentejas en remojo 1-4 horas refrigeradas.",
      "Cocinarlas en agua (tres partes de agua por una de lentejas).",
      "Reservarlas.",
      "Cortar en cubos el pollo y hervirlo. Reservarlo.",
      "Cocinar el arroz según procedimiento anexo en recetas base. Reservarlo.",
      "Lavar y desinfectar la zanahoria y el tomate.",
      "Rallar o procesar la zanahoria.",
      "Cortar el tomate en cubitos.",
      "Mezclar el pollo con el arroz, las lentejas y las verduras incluido el choclo. Aderezar con aceite, mayonesa vegetal y mezclar bien.",
      "En caso de agregar huevos por sustitución: cocinarlos durante 13 minutos luego de que hierva el agua, pelarlos, rallarlos y reservarlos. Agregarlos al final."
    ]
  },
  {
    rId: 110,
    name: 'Ensalada completa de atún',
    baseServings: 10, // Ajusta este valor si es necesario
    ingredients: [
      { name: 'Arroz', quantity: 40, unit: 'g' },
      { name: 'Lentejas', quantity: 20, unit: 'g' },
      { name: 'Atún', quantity: 60, unit: 'g' },
      { name: 'Zanahoria', quantity: 40, unit: 'g' },
      { name: 'Tomate', quantity: 40, unit: 'g' },
      { name: 'Choclo', quantity: 20, unit: 'g' },
      { name: 'Sal', quantity: 0.75, unit: 'g' },
      { name: 'Aceite', quantity: 5, unit: 'ml' },
      { name: 'Mayonesa vegetal', quantity: 15, unit: 'g' }
    ],
    steps: [
      "Dejar las lentejas en remojo 1-4 horas refrigeradas.",
      "Cocinarlas en agua (tres partes de agua por una de lentejas).",
      "Reservarlas.",
      "Escurrir el atún.",
      "Cocinar el arroz según procedimiento anexo en recetas base. Reservarlo.",
      "Lavar y desinfectar la zanahoria y el tomate.",
      "Rallar o procesar la zanahoria.",
      "Cortar el tomate en cubitos.",
      "Mezclar el atún con el arroz, las lentejas y las verduras incluido el choclo. Aderezar con aceite, mayonesa vegetal y mezclar bien.",
      "En caso de agregar huevos por sustitución: cocinarlos durante 13 minutos luego de que hierva el agua, pelarlos, rallarlos y reservarlos. Agregarlos al final."
    ]
  },
  {
    rId: 111,
    name: 'Hamburguesa de pescado',
    baseServings: 10, // Ajusta este valor si es necesario
    ingredients: [
      { name: 'Pescado', quantity: 60, unit: 'g' },
      { name: 'Avena', quantity: 10, unit: 'g' },
      { name: 'Zanahoria', quantity: 25, unit: 'g' },
      { name: 'Morrón', quantity: 15, unit: 'g' },
      { name: 'Cebolla', quantity: 15, unit: 'g' },
      { name: 'Huevo', quantity: 15, unit: 'g' },
      { name: 'Perejil', quantity: 1.5, unit: 'g' },
      { name: 'Ajo', quantity: 1, unit: 'g' },
      { name: 'Sal', quantity: 0.4, unit: 'g' },
      { name: 'Aceite (asadera)', quantity: 2.25, unit: 'ml' }
    ],
    steps: [
      "Para la versión con pescado fresco: Pelar, lavar y picar o procesar la cebolla, el ajo y la zanahoria. Lavar y picar o procesar el morrón. Hervir el pescado fresco (puede agregarse al agua de cocción hojas de laurel). Escurrir el agua y desmenuzar. Batir el huevo. Mezclar el pescado desmenuzado con los vegetales, la avena, condimentos y la sal. Por último agregar el huevo batido y unir hasta que quede una mezcla homogénea. Formar hamburguesas y colocar en asadera aceitada (que puede espolvorearse con pan rallado). Cocinar en horno moderado aproximadamente 30 minutos. Deben quedar doradas por fuera.",
      "Para la versión con atún: Pelar, lavar y picar o procesar la cebolla y la zanahoria. Lavar y picar o procesar el morrón. Escurrir el agua del atún. Batir el huevo. Mezclar el atún con los vegetales, la avena y los condimentos. Por último agregar el huevo batido y unir hasta que quede una mezcla homogénea. Formar hamburguesas y colocar en asadera aceitada (que puede espolvorearse con pan rallado). Cocinar en horno moderado aproximadamente 30 minutos. Deben quedar doradas por fuera."
    ]
  },
  {
    rId: 112,
    name: 'Lasaña',
    baseServings: 10, // Ajusta este valor si es necesario
    ingredients: [
      { name: 'Acelga', quantity: 100, unit: 'g' },
      { name: 'Carne picada', quantity: 40, unit: 'g' },
      { name: 'Zanahoria', quantity: 40, unit: 'g' },
      { name: 'Cebolla', quantity: 10, unit: 'g' },
      { name: 'Morrón', quantity: 15, unit: 'g' },
      { name: 'Ajo', quantity: 1, unit: 'g' },
      { name: 'Avena', quantity: 10, unit: 'g' },
      { name: 'Pimentón', quantity: 0.05, unit: 'g' },
      { name: 'Sal', quantity: 0.5, unit: 'g' },
      { name: 'Aceite (asadera)', quantity: 5, unit: 'g' },
      { name: 'Salsa blanca', quantity: 1, unit: 'porción' },
      { name: 'Pulpa de tomate (opcional)', quantity: 10, unit: 'ml' },
      { name: 'Queso rallado', quantity: 5, unit: 'g' }
    ],
    steps: [
      "Cocinar las filloas de acuerdo a la receta que se encuentra en Recetas Básicas.",
      "Elaborar la salsa blanca liviana de acuerdo a las proporciones y al procedimiento anexo en Recetas Base. Utilizar parte para ligar cada relleno y el resto para el armado.",
      "Relleno 1: Pelar, lavar y picar o procesar el ajo, la cebolla y la zanahoria. Lavar y picar o procesar el morrón. Rehogar el morrón, la mitad de la cebolla y del ajo. Agregar la zanahoria. Incorporar la carne picada y la mitad de la avena. Condimentar. Continuar la cocción revolviendo bien para evitar que la carne se apelotone, logrando así una cocción uniforme. Agregar ¼ de la salsa blanca. Apagar el fuego, agregar el aceite y mezclar bien. Agregar la salsa blanca para ligar y facilitar el armado.",
      "Relleno 2: Separar la acelga hoja por hoja, lavarla y picarla finamente. Rehogar el resto de la cebolla picada y el resto del ajo. Agregar la acelga y la otra mitad de la avena. Agregar ¼ de la salsa blanca para ligar y facilitar el armado. Condimentar. Terminar la cocción.",
      "Armado: Extender las filloas en una asadera previamente aceitada. Cubrir con parte del relleno 1. Por encima colocar otra filloa y cubrir con parte del relleno 2. Repetir este procedimiento hasta utilizar todas las filloas y los rellenos. Cubrir con la mitad de la salsa blanca, pulpa de tomate (decorativa) y queso rallado. En caso de contar con horno, gratinar."
    ]
  },
  {
    rId: 113,
    name: 'Pan de Carne / Hamburguesa',
    baseServings: 10, // Ajusta este valor si es necesario
    ingredients: [
      { name: 'Carne picada', quantity: 60, unit: 'g' },
      { name: 'Avena', quantity: 10, unit: 'g' },
      { name: 'Huevo', quantity: 15, unit: 'g' },
      { name: 'Zanahoria', quantity: 20, unit: 'g' },
      { name: 'Cebolla', quantity: 20, unit: 'g' },
      { name: 'Morrón', quantity: 10, unit: 'g' },
      { name: 'Sal', quantity: 0.5, unit: 'g' },
      { name: 'Perejil fresco', quantity: 1, unit: 'g' },
      { name: 'Ajo', quantity: 1, unit: 'g' },
      { name: 'Aceite (asadera)', quantity: 5, unit: 'g' }
    ],
    steps: [
      "Pelar, lavar y picar o procesar la zanahoria y la cebolla.",
      "Lavar y picar o procesar el morrón.",
      "Batir ligeramente los huevos.",
      "Mezclar la carne, los vegetales, la avena, los huevos batidos y los condimentos.",
      "Armar cilindros sobre una placa aceitada.",
      "Hornear hasta que el color de cocción sea marrón grisáceo en el centro, aproximadamente 30 minutos.",
      "Para la variante con lentejas: dejar las lentejas unas horas en remojo refrigeradas, hervirlas, escurrirlas, pisarlas y procesarlas. Mezclar con la carne y el resto de los ingredientes. Armar los cilindros y cocinar como se indica."
    ]
  },
  {
    rId: 114,
    name: 'Pasta sorpresa',
    baseServings: 10, // Ajusta este valor si es necesario
    ingredients: [
      { name: 'Suprema de pollo', quantity: 50, unit: 'g' },
      { name: 'Queso Danbo, Cuartirolo, Gouda o Port Salut', quantity: 15, unit: 'g' },
      { name: 'Tomate', quantity: 40, unit: 'g' },
      { name: 'Brócoli fresco', quantity: 80, unit: 'g' },
      { name: 'Aceite', quantity: 10, unit: 'ml' },
      { name: 'Albahaca (se calcula 1 atado para 25 comensales)', quantity: 0.04, unit: 'atado por porción' }, // Ajuste de unidad
      { name: 'Sal', quantity: 0.5, unit: 'g' },
      { name: 'Ajo', quantity: 1, unit: 'g' },
      { name: 'Perejil', quantity: 1, unit: 'g' }
    ],
    steps: [
      "Lavar y desinfectar el tomate, la albahaca y el perejil.",
      "Pelar, lavar y picar el ajo.",
      "Cortar el pollo en cubitos y condimentarlo con sal, ajo y perejil.",
      "Cocinarlo al horno.",
      "Lavar el brócoli, hervir hasta que esté tierno, cuidando que no se sobrecocine y cortarlo. Reservar.",
      "Cortar el tomate y el queso en cubitos.",
      "Procesar la albahaca con el aceite.",
      "Elaborar los fideos de acuerdo a las proporciones y al procedimiento anexo en Recetas Base.",
      "Mezclar la preparación del pollo con las verduras, los fideos, el queso y el pesto de albahaca."
    ]
  },
  {
    rId: 115,
    name: 'Pasta con verdusalsa',
    baseServings: 10, // Ajusta este valor si es necesario
    ingredients: [
      { name: 'Carne picada o en cubos', quantity: 50, unit: 'g' },
      { name: 'Pulpa de tomate', quantity: 40, unit: 'g' },
      { name: 'Cebolla', quantity: 10, unit: 'g' },
      { name: 'Zanahoria', quantity: 30, unit: 'g' },
      { name: 'Morrón', quantity: 10, unit: 'g' },
      { name: 'Zapallito', quantity: 50, unit: 'g' },
      { name: 'Queso rallado', quantity: 5, unit: 'g' },
      { name: 'Sal', quantity: 0.5, unit: 'g' },
      { name: 'Orégano', quantity: 0.15, unit: 'g' },
      { name: 'Pimentón', quantity: 0.05, unit: 'g' },
      { name: 'Laurel', quantity: 0.04, unit: 'hoja por porción' }, // Ajuste descriptivo
      { name: 'Aceite', quantity: 5, unit: 'ml' }
    ],
    steps: [
      "Salsa: Pelar, lavar y picar o procesar la cebolla y la zanahoria. Lavar y picar o procesar el morrón. Lavar y cortar en cubos el zapallito. Rehogar la cebolla y el morrón. Agregar la zanahoria. Condimentar (sin el orégano). Incorporar la pulpa de tomate y la carne revolviendo bien para evitar que la carne se apelotone y asegurar una cocción uniforme. Cuando la carne cambie de color, agregar el zapallito y cocinar tapado y revolviendo de vez en cuando hasta que esté tierno. Apagar el fuego, agregar el aceite y el orégano, mezclar bien.",
      "Fideos: Elaborar los fideos de acuerdo a la proporción y al procedimiento anexo en Recetas Base. Servir los fideos, por encima la salsa y espolvorear con queso rallado."
    ]
  },
  {
    rId: 116,
    name: 'Pastel de carne y papa',
    baseServings: 10, // Ajusta este valor si es necesario
    ingredients: [
      { name: 'Carne picada', quantity: 50, unit: 'g' },
      { name: 'Papa', quantity: 160, unit: 'g' },
      { name: 'Espinaca', quantity: 50, unit: 'g' },
      { name: 'Cebolla', quantity: 10, unit: 'g' },
      { name: 'Morrón', quantity: 15, unit: 'g' },
      { name: 'Condimentos (pimentón, nuez moscada)', quantity: 0.05, unit: 'g' },
      { name: 'Sal', quantity: 0.75, unit: 'g' },
      { name: 'Aceite', quantity: 7.5, unit: 'ml' },
      { name: 'Queso rallado', quantity: 5, unit: 'g' }
    ],
    steps: [
      "Pelar, lavar y cocinar las papas.",
      "Hacer el puré y reservar.",
      "Pelar, lavar y picar o procesar la cebolla.",
      "Lavar y picar o procesar el morrón.",
      "Separar la espinaca hoja por hoja, lavarla y cortarla en tiras.",
      "Rehogar la cebolla y el morrón.",
      "Condimentar.",
      "Agregar la carne y continuar la cocción.",
      "Incorporar la espinaca y mezclar bien.",
      "Apagar el fuego, agregar el aceite y mezclar.",
      "Preparar el puré como se indica en Acompañamientos.",
      "Acondicionar el relleno de carne en la asadera y por encima el puré.",
      "Espolvorear con el queso rallado.",
      "Gratinar."
    ]
  },
  {
    rId: 117,
    name: 'Pollo colorido',
    baseServings: 10, // Ajusta este valor si es necesario
    ingredients: [
      { name: 'Suprema de pollo', quantity: 50, unit: 'g' },
      { name: 'Cebolla', quantity: 10, unit: 'g' },
      { name: 'Morrón', quantity: 15, unit: 'g' },
      { name: 'Puerro', quantity: 5, unit: 'g' },
      { name: 'Zanahoria', quantity: 25, unit: 'g' },
      { name: 'Arvejas', quantity: 15, unit: 'g' },
      { name: 'Choclo', quantity: 15, unit: 'g' },
      { name: 'Zapallo', quantity: 35, unit: 'g' },
      { name: 'Pulpa de tomate', quantity: 20, unit: 'ml' },
      { name: 'Apio', quantity: 0.5, unit: 'g' },
      { name: 'Sal', quantity: 0.5, unit: 'g' },
      { name: 'Aceite', quantity: 5, unit: 'g' },
      { name: 'Perejil', quantity: 1, unit: 'g' },
      { name: 'Agua', quantity: 10, unit: 'ml' }
    ],
    steps: [
      "Pelar, lavar y picar o procesar la cebolla.",
      "Pelar, lavar y cortar en cubos la zanahoria.",
      "Lavar y picar o procesar el morrón.",
      "Lavar y picar el apio.",
      "Pelar, lavar y cortar en cubos el zapallo.",
      "Cortar en cubos el pollo.",
      "Rehogar el pollo con la cebolla, el morrón, el apio y el puerro.",
      "Condimentar (con los condimentos y la mitad de la sal).",
      "Agregar la zanahoria, la pulpa de tomate y el agua.",
      "Agregar el zapallo.",
      "Continuar la cocción hasta que los vegetales estén tiernos.",
      "Agregar el choclo y las arvejas.",
      "Una vez finalizada la cocción apagar el fuego, agregar el aceite y el perejil picado y mezclar bien.",
      "Elaborar el arroz/fideos de acuerdo a las proporciones y al procedimiento especificado en Acompañamientos."
    ]
  },
  {
    rId: 118,
    name: 'Pastel de carne y berenjenas',
    baseServings: 10, // Ajusta este valor si es necesario
    ingredients: [
      { name: 'Carne picada', quantity: 50, unit: 'g' },
      { name: 'Ricota', quantity: 50, unit: 'g' },
      { name: 'Cebolla', quantity: 10, unit: 'g' },
      { name: 'Tomate', quantity: 30, unit: 'g' },
      { name: 'Morrón', quantity: 15, unit: 'g' },
      { name: 'Ajo', quantity: 1, unit: 'g' },
      { name: 'Pulpa de tomate', quantity: 30, unit: 'g' },
      { name: 'Berenjenas', quantity: 70, unit: 'g' },
      { name: 'Aceite', quantity: 5, unit: 'ml' },
      { name: 'Sal', quantity: 0.75, unit: 'g' },
      { name: 'Albahaca', quantity: 1.5, unit: 'g' },
      { name: 'Salsa Blanca Liviana', quantity: 1, unit: 'porción' },
      { name: 'Queso rallado', quantity: 5, unit: 'g' }
    ],
    steps: [
      "Relleno: Pelar, lavar y picar o procesar la cebolla y el ajo. Lavar y picar o procesar el morrón. Lavar y cortar en cubos el tomate. Cortar las berenjenas en láminas finas con cáscara y dejar reposar con una pizca de sal para que se escurran. Enjuagar las berenjenas y hornear por 15 minutos. Reservar. Rehogar la cebolla y el morrón. Agregar la carne y la pulpa de tomate. Condimentar. Continuar la cocción revolviendo bien para evitar que la carne se apelotone, logrando así una cocción uniforme. Agregar por último el tomate en cubos, mezclando bien. Lavar, desinfectar y picar la albahaca. Mezclarla con la ricota desgranada y reservar. Elaborar la salsa blanca liviana de acuerdo a las proporciones y al procedimiento anexo en las Recetas Base.",
      "Armado: Intercalar capas de berenjenas, relleno de carne, berenjenas nuevamente y relleno de ricota en asadera previamente aceitada. Terminar con salsa blanca y queso rallado. Gratinar en horno fuerte (250°) durante aproximadamente 15 minutos hasta que el exterior quede crujiente."
    ]
  },
  {
    rId: 119,
    name: 'Pollo con salsa blanca y verduras',
    baseServings: 10, // Ajusta este valor si es necesario
    ingredients: [
      { name: 'Suprema de pollo', quantity: 50, unit: 'g' },
      { name: 'Brócoli fresco', quantity: 60, unit: 'g' },
      { name: 'Zanahoria', quantity: 40, unit: 'g' },
      { name: 'Cebolla', quantity: 10, unit: 'g' },
      { name: 'Puerro', quantity: 20, unit: 'g' },
      { name: 'Morrón rojo', quantity: 15, unit: 'g' },
      { name: 'Salsa blanca liviana', quantity: 1, unit: 'porción' },
      { name: 'Aceite', quantity: 5, unit: 'ml' },
      { name: 'Sal', quantity: 0.5, unit: 'g' },
      { name: 'Queso rallado', quantity: 5, unit: 'g' }
    ],
    steps: [
      "Pelar, lavar y picar o procesar la cebolla y la zanahoria.",
      "Lavar y picar o procesar el morrón.",
      "Lavar y picar el puerro.",
      "Lavar el brócoli, hervir hasta que esté tierno, cuidando que no se sobrecocine y trozarlo pequeño. Reservar.",
      "Cortar en cubos el pollo.",
      "Rehogar la cebolla, el morrón y el puerro.",
      "Incorporar el brócoli y luego la salsa blanca, mezclar bien.",
      "Una vez finalizada la cocción apagar el fuego, incorporar el aceite y mezclar bien.",
      "Elaborar la salsa blanca liviana de acuerdo a las proporciones y al procedimiento anexo en Recetas Base.",
      "Elaborar los fideos/arroz de acuerdo a las proporciones y al procedimiento especificado en Recetas Base.",
      "Agregar el queso rallado."
    ]
  },
  {
    rId: 120,
    name: 'Torta de carne y vegetales',
    baseServings: 10, // Ajusta este valor si es necesario
    ingredients: [
      { name: 'Carne picada', quantity: 60, unit: 'g' },
      { name: 'Cebolla', quantity: 10, unit: 'g' },
      { name: 'Morrón', quantity: 15, unit: 'g' },
      { name: 'Verdura de estación', quantity: 35, unit: 'g' },
      { name: 'Aceite', quantity: 3, unit: 'g' },
      { name: 'Huevo', quantity: 15, unit: 'g' },
      { name: 'Almidón de maíz', quantity: 2, unit: 'g' },
      { name: 'Sal', quantity: 0.5, unit: 'g' },
      { name: 'Hierbas o condimentos', quantity: 0.1, unit: 'g' } // Ajuste descriptivo
    ],
    steps: [
      "Masa: Elaborar la masa de acuerdo a las proporciones y al procedimiento anexo en Recetas Base.",
      "Relleno: Pelar, lavar y picar o procesar la cebolla. Lavar y picar o procesar el morrón. Lavar y cortar en cubos o tiras la verdura de estación seleccionada. Batir ligeramente el huevo. Rehogar la cebolla y el morrón. Incorporar la verdura de estación. Condimentar. Agregar la carne, terminar la cocción. Apagar el fuego, agregar el aceite, el huevo batido y el almidón, mezclar bien. Entibiar.",
      "Armado: Forrar la asadera con una tapa de masa. Rellenar. Colocar la otra tapa encima, pintar con huevo y pinchar. Llevar a horno moderado hasta la cocción completa de la torta."
    ]
  },
  {
    rId: 121,
    name: 'Tortilla de papa, vegetales y pollo',
    baseServings: 10, // Ajusta este valor si es necesario
    ingredients: [
      { name: 'Papa', quantity: 160, unit: 'g' },
      { name: 'Zapallito', quantity: 50, unit: 'g' },
      { name: 'Suprema de pollo', quantity: 50, unit: 'g' },
      { name: 'Huevo', quantity: 22.5, unit: 'g' },
      { name: 'Leche', quantity: 40, unit: 'ml' },
      { name: 'Cebolla', quantity: 10, unit: 'g' },
      { name: 'Almidón de maíz', quantity: 20, unit: 'g' },
      { name: 'Orégano', quantity: 0.15, unit: 'g' },
      { name: 'Ajo', quantity: 1, unit: 'g' },
      { name: 'Sal', quantity: 0.5, unit: 'g' },
      { name: 'Aceite', quantity: 5, unit: 'ml' }
    ],
    steps: [
      "Pelar, lavar y picar o procesar la cebolla y el ajo.",
      "Pelar, lavar y cortar en cubos la papa.",
      "Lavar y cortar en cubos el zapallito.",
      "Cortar en cubos el pollo.",
      "Hervir el pollo.",
      "Batir el huevo.",
      "Rehogar la cebolla y el ajo.",
      "Agregar el pollo.",
      "Condimentar.",
      "Agregar el zapallito.",
      "Cocinar las papas con la mitad de la sal, hasta que se logre el punto de cocción. Colocar y reservar.",
      "En un bols mezclar las papas con las verduras y el pollo.",
      "Disolver el almidón de maíz con la leche.",
      "Agregar el huevo batido, el orégano y el almidón de maíz previamente hidratado.",
      "Disponer en una asadera previamente aceitada.",
      "Llevar a horno moderado hasta completar la cocción verificando que la cocción del huevo sea completa."
    ]
  },
  {
    rId: 122,
    name: 'Torta de atún',
    baseServings: 10, // Ajusta este valor si es necesario
    ingredients: [
      { name: 'Atún', quantity: 60, unit: 'g' },
      { name: 'Cebolla', quantity: 20, unit: 'g' },
      { name: 'Morrón', quantity: 15, unit: 'g' },
      { name: 'Pulpa de tomate', quantity: 20, unit: 'ml' },
      { name: 'Aceite', quantity: 2.5, unit: 'ml' },
      { name: 'Orégano', quantity: 0.15, unit: 'g' }
    ],
    steps: [
      "Masa: Elaborar la masa de acuerdo a las proporciones y al procedimiento anexo en Recetas Base.",
      "Relleno: Pelar, lavar y picar o procesar la cebolla. Lavar y picar o procesar el morrón. Rehogar la cebolla y el morrón. Agregar la pulpa de tomate y el atún, y terminar la cocción. Apagar el fuego, agregar el aceite, el orégano y mezclar bien. Entibiar.",
      "Armado: Forrar la asadera con una tapa de masa. Rellenar. Colocar la otra tapa por encima, pintar con huevo y pinchar. Llevar a horno moderado hasta la cocción completa de la torta."
    ]
  },
  {
    rId: 123,
    name: 'Arroz',
    baseServings: 10, // Ajusta este valor si es necesario
    ingredients: [
      { name: 'Arroz', quantity: 40, unit: 'g' },
      { name: 'Agua', quantity: 80, unit: 'ml' },
      { name: 'Sal', quantity: 0.5, unit: 'g' },
      { name: 'Aceite', quantity: 5, unit: 'ml' }
    ],
    steps: [
      "Hervir agua (dos partes de agua por una de arroz).",
      "Agregar el arroz y la sal.",
      "Revolver.",
      "Retomar ebullición y cocinar a fuego lento aproximadamente 8 minutos sin revolver.",
      "Retirar del fuego y mantener tapado durante 5 minutos.",
      "Agregar aceite y reservarlo."
    ]
  },
  {
    rId: 124,
    name: 'Fideos',
    baseServings: 10, // Ajusta este valor si es necesario
    ingredients: [
      { name: 'Fideos', quantity: 40, unit: 'g' },
      { name: 'Agua', quantity: 280, unit: 'ml' },
      { name: 'Sal', quantity: 0.5, unit: 'g' },
      { name: 'Aceite', quantity: 5, unit: 'ml' }
    ],
    steps: [
      "Verter abundante agua en una cacerola.",
      "Llevar el agua a ebullición.",
      "Agregar la sal y los fideos.",
      "Revolver.",
      "Luego de haber alcanzado la ebullición cocinar según instrucciones del envase.",
      "Retirar del fuego y colar.",
      "Agregar aceite y reservarlo."
    ]
  },
  {
    rId: 125,
    name: 'Arroz con vegetales salteados',
    baseServings: 10, // Ajusta este valor si es necesario
    ingredients: [
      { name: 'Arroz', quantity: 40, unit: 'g' },
      { name: 'Espinaca', quantity: 60, unit: 'g' },
      { name: 'Cebolla', quantity: 10, unit: 'g' },
      { name: 'Queso rallado', quantity: 5, unit: 'g' },
      { name: 'Sal', quantity: 0.5, unit: 'g' },
      { name: 'Ajo', quantity: 0.5, unit: 'g' },
      { name: 'Aceite', quantity: 5, unit: 'ml' }
    ],
    steps: [
      "Pelar, lavar y picar o procesar la cebolla y el ajo.",
      "Lavar y cortar la verdura seleccionada (en caso de usarse un vegetal de hojas es necesario separar hoja por hoja).",
      "Rehogar la cebolla y el ajo.",
      "Agregar el vegetal seleccionado (en el caso de elegir brócoli o coliflor hervirlo antes).",
      "Elaborar el arroz de acuerdo al procedimiento anexo en Recetas Base.",
      "Una vez cocido, agregar el arroz a la mezcla de verduras junto con el aceite y el queso rallado.",
      "Mezclar bien."
    ]
  },
  {
    rId: 126,
    name: 'Arroz amarillo',
    baseServings: 10, // Ajusta este valor si es necesario
    ingredients: [
      { name: 'Arroz', quantity: 40, unit: 'g' },
      { name: 'Cebolla', quantity: 10, unit: 'g' },
      { name: 'Ajo', quantity: 0.5, unit: 'g' },
      { name: 'Cúrcuma', quantity: 0.5, unit: 'g' },
      { name: 'Sal', quantity: 0.5, unit: 'g' },
      { name: 'Aceite', quantity: 5, unit: 'ml' },
      { name: 'Agua', quantity: 80, unit: 'ml' }
    ],
    steps: [
      "Pelar, lavar y picar o procesar la cebolla y el ajo.",
      "Rehogar la cebolla y el ajo.",
      "Agregar la cúrcuma y la sal.",
      "Agregar el arroz y el agua, mezclar.",
      "Cocinar a fuego lento hasta evaporar el agua."
    ]
  },
  {
    rId: 127,
    name: 'Ensalada de vegetales',
    baseServings: 10, // Ajusta este valor si es necesario
    ingredients: [
      { name: 'Vegetales', quantity: 50, unit: 'g' },
      { name: 'Aceite', quantity: 5, unit: 'ml' },
      { name: 'Vinagre/jugo de limón', quantity: 1, unit: 'ml' },
      { name: 'Sal', quantity: 0.25, unit: 'g' }
    ],
    steps: [
      "Lavar y desinfectar los vegetales.",
      "De acuerdo al vegetal de estación seleccionado se corta en cubos, o se procesa o ralla, o se corta en finas tiras.",
      "Mezclar los vegetales.",
      "Aderezar momentos antes de servir."
    ]
  },
  {
    rId: 128,
    name: 'Ensalada jardinera',
    baseServings: 10, // Ajusta este valor si es necesario
    ingredients: [
      { name: 'Papa', quantity: 140, unit: 'g' },
      { name: 'Zanahoria', quantity: 40, unit: 'g' },
      { name: 'Arvejas o choclo', quantity: 20, unit: 'g' },
      { name: 'Aceite', quantity: 5, unit: 'ml' },
      { name: 'Sal', quantity: 0.25, unit: 'g' }
    ],
    steps: [
      "Pelar, lavar y cortar en cubos la papa y la zanahoria.",
      "Hervir agua y cuando rompa el hervor agregar la zanahoria, cocinar unos minutos.",
      "Agregar la papa y continuar la cocción.",
      "Agregar la sal.",
      "Continuar la cocción hasta que la zanahoria y la papa estén tiernas.",
      "Colar y acondicionar en asadera.",
      "Agregar la arveja o el choclo.",
      "Agregar el aceite y mezclar."
    ]
  },
  {
    rId: 129,
    name: 'Ensalada primavera',
    baseServings: 10, // Ajusta este valor si es necesario
    ingredients: [
      { name: 'Arroz', quantity: 30, unit: 'g' },
      { name: 'Choclo', quantity: 15, unit: 'g' },
      { name: 'Zanahoria', quantity: 40, unit: 'g' },
      { name: 'Chaucha', quantity: 20, unit: 'g' },
      { name: 'Aceite', quantity: 5, unit: 'ml' },
      { name: 'Sal', quantity: 0.25, unit: 'g' }
    ],
    steps: [
      "Elaborar el arroz de acuerdo al procedimiento anexo en Recetas Base.",
      "Reservar.",
      "Pelar, lavar y cortar en cubos la zanahoria.",
      "Hervir agua y cuando rompa el hervor agregar la zanahoria.",
      "Cocinar hasta que esté tierna.",
      "Utilizar el mismo procedimiento para cocinar la chaucha.",
      "Disponer el arroz en una asadera y agregar los vegetales y el aceite.",
      "Mezclar bien."
    ]
  },
  {
    rId: 130,
    name: 'Ensalada de leguminosas y vegetales',
    baseServings: 10, // Ajusta este valor si es necesario
    ingredients: [
      { name: 'Porotos manteca', quantity: 20, unit: 'g' },
      { name: 'Zanahoria', quantity: 30, unit: 'g' },
      { name: 'Tomate', quantity: 25, unit: 'g' },
      { name: 'Repollo', quantity: 10, unit: 'g' },
      { name: 'Perejil', quantity: 0.5, unit: 'g' },
      { name: 'Aceite', quantity: 5, unit: 'ml' },
      { name: 'Vinagre', quantity: 1, unit: 'ml' },
      { name: 'Sal', quantity: 0.25, unit: 'g' }
    ],
    steps: [
      "Dejar en remojo de 12 a 24 horas los porotos en la heladera.",
      "Hervir los porotos con sal hasta que estén tiernos. Reservar.",
      "Separar el repollo hoja por hoja.",
      "Lavar y desinfectar el tomate, el repollo, la zanahoria y el perejil.",
      "Cortar en cubos el tomate, en juliana el repollo, rallar la zanahoria y picar el perejil.",
      "Acondicionar los porotos en una asadera, agregar los vegetales, el aceite y el vinagre, mezclar."
    ]
  },
  {
    rId: 131,
    name: 'Papas al natural',
    baseServings: 10, // Ajusta este valor si es necesario
    ingredients: [
      { name: 'Papa', quantity: 160, unit: 'g' },
      { name: 'Aceite', quantity: 5, unit: 'ml' },
      { name: 'Sal', quantity: 0.25, unit: 'g' }
    ],
    steps: [
      "Pelar, lavar y cortar en cubos la papa.",
      "Hervir el agua y cuando rompa el hervor agregar la papa.",
      "Agregar la sal.",
      "Continuar la cocción hasta que la papa esté tierna.",
      "Colar y acondicionar en asadera.",
      "Aderezar con aceite.",
      "Agregar perejil o ciboulette picado si corresponde, previamente lavado y desinfectado."
    ]
  },
  {
    rId: 132,
    name: 'Puré de papas',
    baseServings: 10, // Ajusta este valor si es necesario
    ingredients: [
      { name: 'Papa', quantity: 160, unit: 'g' },
      { name: 'Leche fluida', quantity: 50, unit: 'ml' },
      { name: 'Aceite', quantity: 5, unit: 'ml' },
      { name: 'Sal', quantity: 0.25, unit: 'g' },
      { name: 'Nuez moscada', quantity: 0.1, unit: 'g' }
    ],
    steps: [
      "Pelar, lavar y cortar en cubos la papa.",
      "Hervir agua y cuando rompa el hervor agregar la papa.",
      "Cocinar hasta que estén tiernas.",
      "Colar y puretear la papa.",
      "Reconstituir la leche y agregarla al puré junto con el aceite, la sal y la nuez moscada.",
      "Mezclar bien."
    ]
  },
  {
    rId: 133,
    name: 'Puré triple',
    baseServings: 10, // Ajusta este valor si es necesario
    ingredients: [
      { name: 'Papa', quantity: 100, unit: 'g' },
      { name: 'Zapallo', quantity: 60, unit: 'g' },
      { name: 'Zanahoria', quantity: 60, unit: 'g' },
      { name: 'Leche', quantity: 50, unit: 'ml' },
      { name: 'Aceite', quantity: 5, unit: 'ml' },
      { name: 'Sal', quantity: 0.25, unit: 'ml' },
      { name: 'Nuez moscada', quantity: 0.1, unit: 'g' }
    ],
    steps: [
      "Pelar, lavar y cortar en cubos la papa, el zapallo y la zanahoria.",
      "Hervir agua y cuando rompa el hervor agregar las verduras.",
      "Cocinar hasta que estén tiernas.",
      "Colar y puretear las verduras.",
      "Reconstituir la leche y agregarla al puré junto con el aceite, sal y nuez moscada.",
      "Mezclar bien."
    ]
  },
  {
    rId: 134,
    name: 'Puré de papas instantáneo',
    baseServings: 10, // Ajusta este valor si es necesario
    ingredients: [
      { name: 'Puré en escama', quantity: 25, unit: 'g' },
      { name: 'Agua', quantity: 120, unit: 'ml' },
      { name: 'Leche fluida', quantity: 50, unit: 'ml' },
      { name: 'Aceite', quantity: 2.5, unit: 'ml' },
      { name: 'Sal', quantity: 0.5, unit: 'ml' },
      { name: 'Nuez moscada', quantity: 0.1, unit: 'g' }
    ],
    steps: [
      "Hervir el agua.",
      "Retirar la cacerola del fuego.",
      "Agregar la leche, la sal y la papa deshidratada.",
      "Tapar la olla, dejar reposar unos minutos.",
      "Agregar el aceite.",
      "Remover despacio, sin batir."
    ]
  },
  {
    rId: 135,
    name: 'Hortalizas asadas',
    baseServings: 10, // Ajusta este valor si es necesario
    ingredients: [
      { name: 'Papa', quantity: 80, unit: 'g' },
      { name: 'Boniato', quantity: 80, unit: 'g' },
      { name: 'Zapallo', quantity: 70, unit: 'g' },
      { name: 'Aceite', quantity: 5, unit: 'ml' },
      { name: 'Sal', quantity: 0.25, unit: 'g' },
      { name: 'Hierbas frescas', quantity: 0.5, unit: 'g' }
    ],
    steps: [
      "Precalentar el horno.",
      "Lavar, pelar y cortar la papa, el boniato y los vegetales de estación seleccionados.",
      "Condimentar con aceite, sal y hierbas frescas.",
      "Acondicionar en asadera y hornear hasta que estén tiernos (si se usa coliflor el punto de cocción es anterior al resto)."
    ]
  },
  {
    rId: 136,
    name: 'Salsa blanca liviana',
    baseServings: 10, // Ajusta este valor si es necesario
    ingredients: [
      { name: 'Leche fluida', quantity: 75, unit: 'ml' },
      { name: 'Almidón de maíz', quantity: 2.2, unit: 'g' },
      { name: 'Nuez moscada', quantity: 0.075, unit: 'g' },
      { name: 'Sal', quantity: 0.2, unit: 'g' }
    ],
    steps: [
      "Mezclar el almidón de maíz con 1/4 de la leche fría.",
      "Revolver con una cuchara hasta disolver.",
      "Calentar las 3/4 partes de la leche restante y mientras se va revolviendo, agregar el almidón hidratado.",
      "Cocinar hasta que rompa el hervor.",
      "Condimentar."
    ]
  },
  {
    rId: 137,
    name: 'Arroz plato principal',
    baseServings: 10, // Ajusta este valor si es necesario
    ingredients: [
      { name: 'Arroz', quantity: 60, unit: 'g' },
      { name: 'Agua', quantity: 120, unit: 'ml' },
      { name: 'Aceite', quantity: 5, unit: 'ml' },
      { name: 'Sal', quantity: 0.5, unit: 'g' }
    ],
    steps: [
      "Hervir agua (dos partes de agua por una de arroz).",
      "Agregar el arroz y la sal, revolver.",
      "Retomar ebullición y cocinar a fuego lento aproximadamente 8 minutos sin revolver.",
      "Retirar del fuego y mantener tapado durante 5 minutos.",
      "Colar el arroz y reservar.",
      "Agregar aceite."
    ]
  },
  {
    rId: 138,
    name: 'Fideos plato principal',
    baseServings: 10, // Ajusta este valor si es necesario
    ingredients: [
      { name: 'Fideos', quantity: 60, unit: 'g' },
      { name: 'Agua', quantity: 420, unit: 'ml' },
      { name: 'Aceite', quantity: 5, unit: 'ml' },
      { name: 'Sal', quantity: 0.5, unit: 'g' }
    ],
    steps: [
      "Verter abundante agua en una cacerola.",
      "Llevar el agua a ebullición.",
      "Agregar la sal y los fideos.",
      "Revolver.",
      "Luego de haber alcanzado la ebullición cocinar según instrucciones del envase.",
      "Retirar del fuego y colar.",
      "Agregar aceite y reservarlo."
    ]
  }
];