import { Component } from '@angular/core';
import { materials } from '../../../../shared/angular-material/material.module';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-order-modal',
  standalone: true,
  imports: [materials, FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './add-order-modal.component.html',
  styleUrl: './add-order-modal.component.scss'
})
export class AddOrderModalComponent {

  productForm: FormGroup;
  categories = ['Electronics', 'Clothing', 'Groceries', 'Accessories'];
  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<AddOrderModalComponent>,
   
  ) {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      productId: ['', Validators.required],
      category: ['', Validators.required],
      buyingPrice: ['', [Validators.required, Validators.min(1)]],
      quantity: ['', [Validators.required, Validators.min(1)]],
      unit: ['', Validators.required],
      expiryDate: [null, Validators.required],
      thresholdValue: ['', Validators.required],
    });
  }


  // Submit Form Data
  submitOrder() {
    if (this.productForm.invalid) return;

    const formData = new FormData();
    formData.append('name', this.productForm.value.name);
 
    formData.append('category', this.productForm.value.category);
    formData.append('buyingPrice', this.productForm.value.buyingPrice);
    formData.append('quantity', this.productForm.value.quantity);
    formData.append('unit', this.productForm.value.unit);
    formData.append('expiryDate', this.productForm.value.expiryDate);
    formData.append('thresholdValue', this.productForm.value.thresholdValue);
    


  }
  closeDialog() {
    this.dialogRef.close();
  }



}
