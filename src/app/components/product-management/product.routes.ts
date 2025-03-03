import { Routes } from '@angular/router';
import { ProductManagementComponent } from './product-management/product-management.component';
import { ProductDetailsComponent } from './product-details/product-details.component';


export const PRODUCT_ROUTES: Routes = [
  { path: '', component: ProductManagementComponent },
  { path: 'product/:id', component: ProductDetailsComponent }
];