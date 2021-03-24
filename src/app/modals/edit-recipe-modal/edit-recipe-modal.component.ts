import { Component, Input, OnInit } from '@angular/core';
import { Recipe, Ingredient } from '../../models/recipe';
import { FirebaseService } from '../../services/firebase.service';
@Component({
  selector: 'app-edit-recipe-modal',
  templateUrl: 'edit-recipe-modal.component.html',
})
export class EditRecipeModalComponent implements OnInit {
  constructor(private firebase: FirebaseService) {}
  @Input() recipeName: string;
  @Input() source: string;
  @Input() pageNumber: number;
  @Input() servings: number;
  @Input() ingredients: Ingredient[];

  ngOnInit() {
    console.log(this.ingredients[0].ingredientName);
  }

  deleteRecipe(event, recipe: Recipe) {
    this.firebase.deleteRecipe(recipe);
  }
}
