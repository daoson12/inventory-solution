import { Routes } from '@angular/router';

export const LAYOUT_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./layout/layout.component').then((m) => m.LayoutComponent),
    children: [
      {
        path: '',
        pathMatch: 'full', // 👈 Ensures it only matches the empty route
        loadChildren: () =>
          import('../components/dashboard/dashboard.routes').then(
            (m) => m.DASHBOARD_ROUTES
          ),
      },
      {
        path: 'products',
        loadChildren: () =>
          import('../components/product-management/product.routes').then(
            (m) => m.PRODUCT_ROUTES
          ),
      },
      {
        path: 'suppliers',
        loadChildren: () =>
          import('../components/suppliers/supplier.routes').then(
            (m) => m.SUPPLIER_ROUTES
          ),
      },
    ],
  },
];
