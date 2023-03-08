import { CategoryService } from './../../category.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs-compat';
import { ProductService } from 'src/app/product.service';
import { ActivatedRoute, Router } from '@angular/router';
//import 'rxjs/add/operator/take';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  
  categories$:Observable<any[]>;
  product: any = {};
  id;
 
 
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private categoryService:CategoryService ,
    private productService: ProductService){
    this.categories$ = this.categoryService.getCategories();
    console.log(this.categories$);

    this.id = this.route.snapshot.paramMap.get('id');
    // if (id) this.productService.get(id).take(1).subscribe(p => this.product = p);
    if(this.id) this.productService.get(this.id).valueChanges().pipe(take(1)).subscribe((p: any) => this.product = p);

   }

  save(product: any){
    if (this.id) this.productService.update(this.id, product);
    else this.productService.create(product);
    this.router.navigate(['/admin/products']);
  }

  delete() {
    if (!confirm('Are you sure you want to delete this product?')) return;

    this.productService.delete(this.id);
    this.router.navigate(['/admin/products']);
  }

  ngOnInit(): void { }

}
