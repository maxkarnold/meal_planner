import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { EditRecipeModalComponent } from '../../modals/edit-recipe-modal/edit-recipe-modal.component';
import { FirebaseService } from '../../services/firebase.service';
import { Recipe } from '../../models/recipe';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  recipes: Recipe[];
  recipeToEdit: Recipe;

  constructor(
    private firebase: FirebaseService,
    public modalController: ModalController
  ) {}

  ngOnInit() {
    this.firebase.getRecipes().subscribe((recipes) => {
      this.recipes = recipes;
    });
  }

  deleteRecipe(event, recipe) {
    this.firebase.deleteRecipe(recipe);
  }

  async editRecipe(event, recipe: Recipe) {
    this.recipeToEdit = recipe;
    const modal = await this.modalController.create({
      component: EditRecipeModalComponent,
      cssClass: 'editRecipeModal',
      componentProps: {
        recipeName: recipe.recipeName,
        source: recipe.source,
        pageNumber: recipe.pageNumber,
        servings: recipe.servings,
        ingredients: recipe.ingredients,
      },
    });
    return await modal.present();
  }
}
