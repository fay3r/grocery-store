import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {CartComponent} from "./components/cart/cart.component";
import {CheckOutComponent} from "./components/check-out/check-out.component";
import {OrderSuccessComponent} from "./components/order-success/order-success.component";
import {MyOrdersComponent} from "./components/my-orders/my-orders.component";
import {LoginComponent} from "./components/login/login.component";
import {AdminProductsComponent} from "./components/admin/admin-products/admin-products.component";
import {AdminOrdersComponent} from "./components/admin/admin-orders/admin-orders.component";
import {AuthGuard} from "./service/auth-guard.service";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'yourCart',
    component: CartComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'check-out',
    component: CheckOutComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'order-success',
    component: OrderSuccessComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'my/orders',
    component: MyOrdersComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'admin/products',
    component: AdminProductsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'admin/orders',
    component: AdminOrdersComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
