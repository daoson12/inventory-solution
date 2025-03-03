import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { materials } from '../../../shared/angular-material/material.module';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { AddOrderModalComponent } from '../modal/add-order-modal/add-order-modal.component';

interface Order {
  id:number,
  name: string;
  orderValue: string;
  quantity: string;
  expectedDelivery: string;
  status: string;
}

@Component({
  selector: 'app-order-list',
  standalone: true,
  imports: [RouterOutlet, RouterModule, CommonModule, materials],
  templateUrl: './order-list.component.html',
  styleUrl: './order-list.component.scss'
})
export class OrderListComponent {
 displayedColumns: string[] = ['name', 'orderValue', 'quantity','expectedDelivery', 'status',  'actions'];
  dataSource = new MatTableDataSource<Order>([
    { id:1, name: 'Maggi', orderValue: '₹430', quantity: '43 Packets',  expectedDelivery: '11/12/22', status: 'Delayed' },
    { id:2, name: 'Bru', orderValue: '₹257', quantity: '22 Packets',  expectedDelivery: '21/12/22', status: 'Out for delivery' },
    { id:3, name: 'Red Bull', orderValue: '₹405', quantity: '36 Packets', expectedDelivery: '5/12/22', status: 'Delayed' },
    { id:4, name: 'Bourn Vita', orderValue: '₹502', quantity: '14 Packets', expectedDelivery: '8/12/22', status: 'Confirmed' },
    { id:5, name: 'Horlicks', orderValue: '₹530', quantity: '5 Packets', expectedDelivery: '9/1/23', status: 'Returned' },
    { id:6, name: 'Harpic', orderValue: '₹605', quantity: '10 Packets', expectedDelivery: '9/1/23', status: 'Delayed' },
    { id:7, name: 'Ariel', orderValue: '₹408', quantity: '23 Packets', expectedDelivery: '15/12/23', status: 'Confirmed' },
    { id:8, name: 'Scotch Brite', orderValue: '₹359', quantity: '43 Packets', expectedDelivery: '6/6/23', status: 'Delayed' },
    { id:9, name: 'Coca Cola', orderValue: '₹205', quantity: '41 Packets',  expectedDelivery: '11/11/22', status: 'Returned' },
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
      this.dialog.open(AddOrderModalComponent, {
        width: '900px',
      });
  }
}
