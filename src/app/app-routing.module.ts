import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {CartComponent} from "./components/cart/cart.component";
import {CheckOutComponent} from "./components/check-out/check-out.component";
import {OrderSuccessComponent} from "./components/order-success/order-success.component";
import {MyOrdersComponent} from "./components/my-orders/my-orders.component";
import {LoginComponent} from "./components/login/login.component";
import {AdminProductsComponent} from "./components/admin/admin-products/admin-products.component";
import {AdminOrdersComponent} from "./components/admin/admin-orders/admin-orders.component";

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'yourCart',
    component: CartComponent
  },
  {
    path:'check-out',
    component:CheckOutComponent
  },
  {
    path:'order-success',
    component:OrderSuccessComponent
  },
  {
    path:'my/orders',
    component:MyOrdersComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'admin/products',
    component:AdminProductsComponent
  },
  {
    path:'admin/orders',
    component:AdminOrdersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
