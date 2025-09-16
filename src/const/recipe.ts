export interface RecipeInfo {
  title: string;
  dec: string;
}

interface Instruction {
  id: number;
  name: string;
  dec: string;
}

interface Nutrition {
  Calories: string;
  Carbs: string;
  Protein: string;
  Fat: string;
  dec: string;
}

interface Recipe {
  info: RecipeInfo;
  ingredients: string[];
  instructions: Instruction[];
  Nutrition: Nutrition;
}

export const RecipeObj: Recipe = {
  info: {
    title: "Simple Omelette Recipe",
    dec: "An easy and quick dish, perfect for any meal. This classick omelette combines beaten eggs cooked to perfection, optionally filled with your choice of chees, vegetables, or meats.",
  },
  ingredients: ["2-3 large eggs", "Salt, to taste"],
  instructions: [
    {
      id: 1,
      name: "Beat the eggs",
      dec: "In a bowl, beat the eggs with a pinch of salt and pepper until well mixed. You can add a tablespoon of water or milk for a fluffier texture.",
    },
    {
      id: 2,
      name: "Heat the pan",
      dec: "Place a non-stick frying pan over medium heat and add butter or oil.",
    },
    {
      id: 3,
      name: "Cook the omelette",
      dec: "Once the butter is melted and buddung. pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.",
    },
    {
      id: 4,
      name: "Add fillng",
      dec: "When the eggs begin to set at the edges but ar still slightly runny in the middel, sprinkle your chosen fillings over one half of the omelette.",
    },
    {
      id: 5,
      name: "Fold and serve",
      dec: "As the omelette coninues to cook.",
    },
    {
      id: 6,
      name: "Enjoy",
      dec: "Serve hot, with additional salt and pepper if needed.",
    },
  ],
  Nutrition: {
    Calories: "277kcal",
    Carbs: "0g",
    Protein: "20g",
    Fat: "22g",
    dec: "The table below shows nutritional values per serving without the additional fillings.",
  },
};
