import { Routes } from '@angular/router';
import { ProductManagementComponent } from './product-management/product-management.component';


export const PRODUCT_ROUTES: Routes = [
  { path: '', component: ProductManagementComponent }, // Product list page
];