import { UserService } from './user.service';
import { AuthGaurd } from './auth-gaurd.service';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule} from '@angular/fire/compat/database'
import { AngularFireAuthModule } from '@angular/fire/compat/auth'
import { RouterModule } from '@angular/router';
import { NgbModule  } from '@ng-bootstrap/ng-bootstrap';

import { environment } from 'src/environments/environment';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { AdminAuthGaurd } from './admin-auth-gaurd.service';

@NgModule({
    declarations: [
        AppComponent,
        BsNavbarComponent,
        HomeComponent,
        ProductsComponent,
        ShoppingCartComponent,
        CheckOutComponent,
        OrderSuccessComponent,
        MyOrdersComponent,
        LoginComponent,
        AdminProductsComponent,
        AdminOrdersComponent
    ],
    providers: [
      AuthService,
      AuthGaurd,
      UserService,
      AdminAuthGaurd
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireAuthModule,
        AngularFireDatabaseModule,
        NgbModule,
        RouterModule.forRoot([
          {path:'' , component: HomeComponent },
          {path:'products' , component: ProductsComponent },
          {path:'shopping-cart' , component: ShoppingCartComponent },
          {path:'login' , component: LoginComponent },
          
          {path:'check-out' , component: CheckOutComponent , canActivate:[AuthGaurd]},
          {path:'order-success' , component: OrderSuccessComponent, canActivate:[AuthGaurd] },
          {path:'my/orders' , component: MyOrdersComponent, canActivate:[AuthGaurd] },
          
          {path:'admin/products' , component: AdminProductsComponent, canActivate:[AuthGaurd,AdminAuthGaurd] },
          {path:'admin/orders' , component: AdminOrdersComponent, canActivate:[AuthGaurd,AdminAuthGaurd] },
   

        ])
       
    ]
})
export class AppModule { }
