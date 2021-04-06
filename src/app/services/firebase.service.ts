import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Recipe } from '../models/recipe';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  recipesCollection: AngularFirestoreCollection<Recipe>;
  recipes: Observable<Recipe[]>;
  recipeDoc: AngularFirestoreDocument<Recipe>;

  constructor(public db: AngularFirestore, public auth: AngularFireAuth) {
    this.recipesCollection = this.db.collection('recipes', (ref) =>
      ref.orderBy('recipeName', 'asc')
    );

    this.recipes = this.recipesCollection.snapshotChanges().pipe(
      map((changes) => {
        return changes.map((a) => {
          const data = a.payload.doc.data() as Recipe;
          data.id = a.payload.doc.id;
          return data;
        });
      })
    );
  }

  // Authentication
  // Firestore

  getRecipes() {
    return this.recipes;
  }

  createRecipe(recipe: Recipe) {
    this.recipesCollection.add(recipe);
  }

  deleteRecipe(recipe: Recipe) {
    this.recipeDoc = this.db.doc(`recipes/${recipe.id}`);
    this.recipeDoc.delete();
  }

  // Hosting?
}
