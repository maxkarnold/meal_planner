export interface Recipe {
  id?: string;
  recipeName?: string;
  source?: string;
  ingredients?: Ingredient[];
}

interface Ingredient {
  ingredientName?: string;
  amount?: number;
  unit?: string;
}
