import { Component, ViewChild } from '@angular/core';
import { materials } from '../../../shared/angular-material/material.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AddProductModalComponent } from '../modal/add-product-modal/add-product-modal.component';
import { MatDialog } from '@angular/material/dialog';
interface Product {
  id:number,
  name: string;
  price: string;
  quantity: string;
  threshold: string;
  expiry: string;
  availability: string;
}
@Component({
  selector: 'app-product-management',
  standalone: true,
  imports: [RouterOutlet, RouterModule, CommonModule, NgxChartsModule, materials],
  templateUrl: './product-management.component.html',
  styleUrl: './product-management.component.scss'
})
export class ProductManagementComponent {
  displayedColumns: string[] = ['name', 'price', 'quantity', 'threshold', 'expiry', 'availability',  'actions'];
  dataSource = new MatTableDataSource<Product>([
    { id:1, name: 'Maggi', price: '₹430', quantity: '43 Packets', threshold: '12 Packets', expiry: '11/12/22', availability: 'In-stock' },
    { id:2, name: 'Bru', price: '₹257', quantity: '22 Packets', threshold: '12 Packets', expiry: '21/12/22', availability: 'Out of stock' },
    { id:3, name: 'Red Bull', price: '₹405', quantity: '36 Packets', threshold: '9 Packets', expiry: '5/12/22', availability: 'In-stock' },
    { id:4, name: 'Bourn Vita', price: '₹502', quantity: '14 Packets', threshold: '6 Packets', expiry: '8/12/22', availability: 'Out of stock' },
    { id:5, name: 'Horlicks', price: '₹530', quantity: '5 Packets', threshold: '5 Packets', expiry: '9/1/23', availability: 'In-stock' },
    { id:6, name: 'Harpic', price: '₹605', quantity: '10 Packets', threshold: '5 Packets', expiry: '9/1/23', availability: 'In-stock' },
    { id:7, name: 'Ariel', price: '₹408', quantity: '23 Packets', threshold: '7 Packets', expiry: '15/12/23', availability: 'Out of stock' },
    { id:8, name: 'Scotch Brite', price: '₹359', quantity: '43 Packets', threshold: '8 Packets', expiry: '6/6/23', availability: 'In-stock' },
    { id:9, name: 'Coca Cola', price: '₹205', quantity: '41 Packets', threshold: '10 Packets', expiry: '11/11/22', availability: 'Low stock' },
  ]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(private dialog: MatDialog, private router:Router) {}
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  viewDetails(item: any) {
    if (item?.id) {
      this.router.navigate(['/app/products/product', item.id]);
    } else {
      console.error('Product ID is missing!');
    }
  }
  
  
  editItem(item: any) {
    console.log('Edit item:', item);
    // Implement edit logic
  }
  
  deleteItem(item: any) {
    console.log('Delete item:', item);
    // Implement delete confirmation and logic
  }
  openAddProductDialog() {
    this.dialog.open(AddProductModalComponent, {
      width: '900px',
    });
}
}