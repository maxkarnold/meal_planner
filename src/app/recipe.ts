export class Recipe {
  constructor(
    public recipeName: string,
    public ingredients = [
      {
        ingredientName: '',
        amount: 0,
        unit: '',
      },
    ]
  ) {}
}
