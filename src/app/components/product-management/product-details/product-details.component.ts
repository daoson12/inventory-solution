import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { materials } from '../../../shared/angular-material/material.module';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule, materials, RouterModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent {

  productId!: string;
  displayedColumns: string[] = ['storeName', 'stockInHand'];
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.productId = this.route.snapshot.paramMap.get('id')!;
    console.log('Product ID:', this.productId);
  }

  stockLocations = [
    { storeName: 'Sulur Branch', stockInHand: 15 },
    { storeName: 'Singanallur Branch', stockInHand: 19 },
  ];
}
