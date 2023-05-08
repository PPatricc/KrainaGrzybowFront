import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from 'src/app/components/product-list/product-list.component'
import { PaymentStatusComponent } from './components/payment-status/payment-status.component';


const routes: Routes = [
  { path: 'products', component: ProductListComponent },
  { path: 'payment', component: PaymentStatusComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
