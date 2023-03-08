import { ProductService } from './../../product.service';
import { Observable } from 'rxjs/Observable';

import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs-compat';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit,OnDestroy{

  products: Product[];
  filteredProducts: any[];
  subscription: Subscription;

    constructor(private productService:ProductService){
      this.subscription = this.productService.getAll()
      .subscribe(products => this.filteredProducts  = products);
      
    }

    filter(query: string) { 
      this.filteredProducts = (query) ?
        this.products.filter(p => p.title.toLowerCase().includes(query.toLowerCase())) :
        this.products;
    }
    
    ngOnInit() {

    }
    ngOnDestroy() {
      this.subscription.unsubscribe();
    }
}
