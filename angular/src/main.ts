import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter, RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app/app.component';
import { ProductListComponent } from './app/components/product-list/product-list.component';
import { AddProductComponent } from './app/components/add-product/add-product.component';
import { EditProductComponent } from './app/components/edit-product/edit-product.component';

// Define your routes
const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'add', component: AddProductComponent },
  { path: 'edit/:id', component: EditProductComponent },
];

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideRouter(routes), // Add the router here
  ],
}).catch((err) => console.error(err));
