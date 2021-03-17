import { Component } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { Recipe } from '../recipe';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  constructor(firebase: FirebaseService) {}

  units = [
    'ounces (oz)',
    'pounds (lbs)',
    'fluid Ounces (fl oz)',
    'cups',
    'items',
  ];

  ingredients = [];
  ingredientObjs = [];

  // method that adds an ingredient to the current list/array of current ingredients
  addIngredient(name, amount, unit) {
    let ingredient = `${amount.value} ${unit.value} of ${name.value}`;
    let ingredientObj = {
      ingredientName: name.value,
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
}
