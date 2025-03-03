import { Component } from '@angular/core';
import { materials } from '../../../shared/angular-material/material.module';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AddManageStoreComponent } from '../modal/add-manage-store/add-manage-store.component';

@Component({
  selector: 'app-manage-store',
  standalone: true,
  imports: [RouterOutlet, RouterModule, CommonModule, materials],
  templateUrl: './manage-store.component.html',
  styleUrl: './manage-store.component.scss'
})
export class ManageStoreComponent {

   constructor(private dialog: MatDialog, private router:Router) {}
  openAddProductDialog() {
    this.dialog.open(AddManageStoreComponent, {
      width: '900px',
    });
}
}
