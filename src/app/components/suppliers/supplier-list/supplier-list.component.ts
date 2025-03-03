import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { materials } from '../../../shared/angular-material/material.module';
import { AddSupplierModalComponent } from '../modal/add-supplier-modal/add-supplier-modal.component';

interface Supplier {
  id:number,
  name: string;
  supplierName:string , 
  contactNumber: string;
  email: string;
  type: string;
  onTheWay: string;
}

@Component({
  selector: 'app-supplier-list',
  standalone: true,
  imports: [RouterOutlet, RouterModule, CommonModule, NgxChartsModule, materials],
  templateUrl: './supplier-list.component.html',
  styleUrl: './supplier-list.component.scss'
})
export class SupplierListComponent {
displayedColumns: string[] = [ 'supplierName', 'name', 'contactNumber', 'email', 'type','onTheWay',  'actions'];


  dataSource = new MatTableDataSource<Supplier>([
      { id:1, supplierName:"Richard Martin" , name: 'Maggi', contactNumber: '090214756895', email: 'richard@gmail.com', type: 'Taking Return', onTheWay: '12' },
      { id:2, supplierName:"Tom Homan" , name: 'Bru', contactNumber: '09135678457', email: 'tomhoman@gmail.com', type: 'Not Taking Return', onTheWay: '5' },
      { id:3, supplierName:"Veandir" , name: 'Red Bull', contactNumber: '08034789990', email: 'veandier@gmail.com', type: 'Taking Return', onTheWay: '8' },
      { id:4, supplierName:"Charin" , name: 'Bourn Vita', contactNumber: '08034756565', email: 'charin@gmail.com', type: 'Taking Return', onTheWay: '3' },
      { id:5, supplierName:"Hoffman" , name: 'Horlicks', contactNumber: '90921346757', email: 'hoffman@gmail.com',  type: 'Not Taking Return', onTheWay: '7' },
      { id:6, supplierName:"Fainden Juke" , name: 'Harpic', contactNumber: '090361722223', email: 'fainden@gmail.com',  type: 'In-stock', onTheWay: '9' },
      { id:7, supplierName:"Martin" , name: 'Ariel', contactNumber: '08134675655', email: 'martin@gmail.com', type: 'Taking Return', onTheWay: '6' },
      { id:8, supplierName:"Joe Nike" , name: 'Scotch Brite', contactNumber: '0902134555768', email: 'joenike@gmail.com', type: 'Taking return with conditions', onTheWay: '4' },
      { id:9, supplierName:"Dender Luke" , name: 'Coca Cola', contactNumber: '138718738146', email: 'dender@gmail.com', type: 'Not Taking Return', onTheWay: '2' },
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
  openAddSupplierDialog() {
    this.dialog.open(AddSupplierModalComponent, {
      width: '600px',
      height: 'auto',
    });

}
}
