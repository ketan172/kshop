import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private db: AngularFireDatabase) { }

  create(product: any){
    return this.db.list('/products').push(product);
  }

  getAll(){
    //  return this.db.list('/products').valueChanges();
    return this.db.list('/products').snapshotChanges()
    .pipe(map( action => action
      .map(a => {
        const key = a.payload.key;
        const data = a.payload.val();
        return  {key, data};
      })));
    
  }

  get(productId: string) { 
    return this.db.object('/products/' + productId);
  }

  update(productId: string,product: Partial<unknown>){
    return this.db.object('/products/' + productId).update(product);
  }

  delete(productId: string) { 
    return this.db.object('/products/' + productId).remove();
  }

}
