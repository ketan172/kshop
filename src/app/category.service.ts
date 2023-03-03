import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs-compat';
import { switchMap , map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  
  
  constructor(private db:AngularFireDatabase) {
    
   }

  getCategories(){
    return this.db.list('/categories', ref => ref.orderByChild('name')).snapshotChanges();

    }
}
