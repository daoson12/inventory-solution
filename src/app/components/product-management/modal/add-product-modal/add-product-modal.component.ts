import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { materials } from '../../../../shared/angular-material/material.module';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-product-modal',
  standalone: true,
  imports: [materials, FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './add-product-modal.component.html',
  styleUrl: './add-product-modal.component.scss'
})
export class AddProductModalComponent {
  imageFile: File | null = null;
  imagePreview: string | null = null;
  productForm: FormGroup;
  categories = ['Electronics', 'Clothing', 'Groceries', 'Accessories'];
  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<AddProductModalComponent>,
   
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

  // Handle File Selection
  onFileSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      this.imageFile = file;
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  // Submit Form Data
  submitProduct() {
    if (this.productForm.invalid) return;

    const formData = new FormData();
    formData.append('name', this.productForm.value.name);
 
    formData.append('category', this.productForm.value.category);
    formData.append('buyingPrice', this.productForm.value.buyingPrice);
    formData.append('quantity', this.productForm.value.quantity);
    formData.append('unit', this.productForm.value.unit);
    formData.append('expiryDate', this.productForm.value.expiryDate);
    formData.append('thresholdValue', this.productForm.value.thresholdValue);
    
    if (this.imageFile) {
      formData.append('image', this.imageFile);
    }

  }
  closeDialog() {
    this.dialogRef.close();
  }
}
