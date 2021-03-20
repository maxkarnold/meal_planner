import { Component } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { Recipe } from '../../models/recipe';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  recipes: Recipe[];
  constructor(private firebase: FirebaseService) {}

  ngOnInit() {
    this.firebase.getRecipes().subscribe((recipes) => {
      this.recipes = recipes;
    });
  }

  deleteRecipe(event, recipe) {
    this.firebase.deleteRecipe(recipe);
  }
}
