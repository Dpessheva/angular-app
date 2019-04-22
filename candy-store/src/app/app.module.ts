import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home/home.component';
import { LoginModalComponent } from './components/authentication/login-modal/login-modal/login-modal.component';
import { RegisterModalComponent } from './components/authentication/register-modal/register-modal.component';
import { CartComponent } from './components/cart/cart.component';
import { StoreComponent } from './components/store/store.component';
import { OrdersComponent } from './components/orders/orders.component';
import { OrderDetailsComponent } from './components/orders/order-details/order-details.component';
import { UserOrdersComponent } from './components/orders/user-orders/user-orders.component';
import { DetailsPageComponent } from './components/products/details-page/details-page.component';
import { ProductCartComponent } from './components/products/product-cart/product-cart.component';
import { ProductDeleteModalComponent } from './components/products/product-delete-modal/product-delete-modal.component';
import { ProductDetailsComponent } from './components/products/product-details/product-details.component';
import { ProductListComponent } from './components/products/product-list/product-list.component';
import { ProductReviewsComponent } from './components/products/product-reviews/product-reviews.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginModalComponent,
    RegisterModalComponent,
    CartComponent,
    StoreComponent,
    OrdersComponent,
    OrderDetailsComponent,
    UserOrdersComponent,
    DetailsPageComponent,
    ProductCartComponent,
    ProductDeleteModalComponent,
    ProductDetailsComponent,
    ProductListComponent,
    ProductReviewsComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
