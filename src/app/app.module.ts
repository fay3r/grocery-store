import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { AdminProductsComponent } from './components/admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './components/admin/admin-orders/admin-orders.component';
import { CheckOutComponent } from './components/check-out/check-out.component';
import { LoginComponent } from './components/login/login.component';
import { OrderSuccessComponent } from './components/order-success/order-success.component';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';
import { AngularFirestoreModule} from "@angular/fire/firestore";
import {AngularFireModule} from "@angular/fire";
import {firebaseConfig} from "../environments/firebaseConfig";
import {AuthService} from "./service/auth.service";
import {AuthGuard} from "./service/auth-guard.service";
import {UserService} from "./service/user.service";
import {AdminAuthGuard} from "./service/admin-auth-guard.service";
import { ProductFormComponent } from './components/admin/product-form/product-form.component';
import {CategoriesService} from "./service/categories.service";
import {FormsModule} from "@angular/forms";
import {ProductService} from "./service/product.service";
import {CustomFormsModule} from "ng2-validation";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatTableModule} from "@angular/material/table";
import { MatSliderModule} from "@angular/material/slider";
import {MatSortModule} from "@angular/material/sort";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import { ProductFilterComponent } from './components/product-filter/product-filter.component';
import { ProductCardComponent } from './components/product-card/product-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CartComponent,
    NavbarComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    CheckOutComponent,
    LoginComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    ProductFormComponent,
    ProductFilterComponent,
    ProductCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(firebaseConfig),
    FormsModule,
    CustomFormsModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatTableModule,
    MatSliderModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [AuthService,
    AuthGuard,
    UserService,
    AdminAuthGuard,
    CategoriesService,
    ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
