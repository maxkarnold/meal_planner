import { Component, Input, OnInit } from '@angular/core';
import { Recipe, Ingredient } from '../../models/recipe';
import { FirebaseService } from '../../services/firebase.service';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-edit-recipe-modal',
  templateUrl: 'edit-recipe-modal.component.html',
  styleUrls: ['edit-recipe-modal.component.scss'],
})
export class EditRecipeModalComponent implements OnInit {
  constructor(
    private firebase: FirebaseService,
    public mdlctrl: ModalController
  ) {}
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

  dismissModal() {
    this.mdlctrl.dismiss();
  }
}
