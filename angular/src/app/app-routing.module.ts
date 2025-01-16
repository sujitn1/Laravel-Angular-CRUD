import { NgModule } from '@angular/core';
import { NavigationStart, NavigationEnd, NavigationError, RouterModule, Routes, Router } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
const routes: Routes = [
  { path: '', component: ProductListComponent }, // Default route
  { path: 'add', component: AddProductComponent },
  { path: 'edit/:id', component: EditProductComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
