import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
const routes: Routes = [
  { path: 'cart', component: CartComponent },
  { path: 'catalogue', component: CatalogueComponent },
  { path: '', redirectTo: '/catalogue', pathMatch: 'full' }, 
  { path: '**', redirectTo: '/catalogue' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
