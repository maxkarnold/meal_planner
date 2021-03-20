import { Component } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { Recipe } from '../../models/recipe';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  recipe: Recipe = {
    recipeName: '',
    ingredients: [
      {
        ingredientName: '',
        unit: '',
        amount: 0,
      },
    ],
  };
  constructor(private firebase: FirebaseService) {}

  units = [
    'ounces (oz)',
    'pounds (lbs)',
    'fluid ounces (fl oz)',
    'cups',
    'custom (Not Yet Available)',
  ];

  ingredients: string[] = [];
  ingredientObjs = [];

  // method that adds an ingredient to the current list/array of current ingredients
  addIngredient(name: any, amount: any, unit: any) {
    let ingredient = `${amount.value} ${
      unit.value
    } of ${name.value.toLowerCase()}`;
    let ingredientObj = {
      ingredientName: name.value.toLowerCase(),
      amount: amount.value,
      unit: unit.value,
    };
    this.ingredients.push(ingredient);
    this.ingredientObjs.push(ingredientObj);
    console.log(this.ingredientObjs);
    name.value = '';
    amount.value = '';
    unit.value = '';
  }

  removeIngredient() {
    this.ingredients.pop();
    this.ingredientObjs.pop();
  }

  onSubmit(form: any) {
    console.log(form.value.recipeName);
    console.log(this.ingredientObjs);
    if (form.value.recipeName !== '' && this.ingredientObjs !== []) {
      this.recipe = {
        recipeName: form.value.recipeName,
        ingredients: this.ingredientObjs,
      };
      this.firebase.createRecipe(this.recipe);
      alert(`Successfully added ${this.recipe.recipeName}!`);
      this.ingredients = [];
      this.ingredientObjs = [];
    }
  }
}
