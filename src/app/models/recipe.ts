export interface Recipe {
  id?: string;
  recipeName?: string;
  source?: string;
  pageNumber?: number;
  servings?: number;
  ingredients?: Ingredient[];
}

export interface Ingredient {
  ingredientName?: string;
  amount?: number;
  unit?: string;
}
