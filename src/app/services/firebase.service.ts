import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  constructor(public db: AngularFirestore, public auth: AngularFireAuth) {}

  // Observable

  // Authentication
  // Firestore
  createRecipe(data: object) {
    this.db
      .collection('recipes')
      .add(data)
      .then((docRef) => {
        console.log('Document written with ID: ', docRef.id);
      })
      .catch((error) => {
        console.error('Error adding recipe: ', error);
      });
  }
  // Hosting?
}
