import { Component, Inject } from '@angular/core';
import { materials } from '../../../../shared/angular-material/material.module';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AddOrderModalComponent } from '../../../orders/modal/add-order-modal/add-order-modal.component';

@Component({
  selector: 'app-add-manage-store',
  standalone: true,
  imports: [materials, FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './add-manage-store.component.html',
  styleUrl: './add-manage-store.component.scss'
})
export class AddManageStoreComponent {

  storeForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<AddOrderModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.storeForm = this.fb.group({
      branchName: ['', Validators.required],
      storeName: ['', Validators.required],
      address: [''],
      city: [''],
      pincode: [''],
      phoneNumber: [''],
    });

    if (data) {
      this.storeForm.patchValue(data); // Populate form for edit
    }
  }

  submitManageStore(){

  }

  closeDialog() {
    this.dialogRef.close();
  }

}
