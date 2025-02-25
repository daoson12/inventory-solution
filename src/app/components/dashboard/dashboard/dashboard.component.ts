import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Color, NgxChartsModule, ScaleType } from '@swimlane/ngx-charts';
import { materials } from '../../../shared/angular-material/material.module';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterOutlet, CommonModule, NgxChartsModule, materials],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  collapsed = false;
  displayedColumns: string[] = ['name', 'sold', 'remaining', 'price'];
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.formatChartData();
  }


  topSellingStock = [
    { name: 'Surf Excel', sold: 30, remaining: 12, price: 100 },
    { name: 'Rin', sold: 21, remaining: 15, price: 207 },
    { name: 'Parle G', sold: 19, remaining: 17, price: 105 }
  ];

  lowStock = [
    { name: 'Tata Salt', remaining: 10, image: 'assets/tata_salt.png' },
    { name: 'Lays', remaining: 15, image: 'assets/lays.png' },
    { name: 'Lays', remaining: 15, image: 'assets/lays.png' }
  ];
  // Color schemes
  colorScheme: Color = {
    name: 'customScheme',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#5AA454', '#1E88E5'] // Green for sales, Blue for purchase
  };

  colorScheme2: Color = {
    name: 'customScheme2',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#FFA500', '#1E88E5'] // Orange for ordered, Blue for delivered
  };

  // Sales and Purchase Data
  salesPurchaseData = [
    { name: 'Jan', series: [{ name: 'Purchase', value: 50000 }, { name: 'Sales', value: 40000 }] },
    { name: 'Feb', series: [{ name: 'Purchase', value: 55000 }, { name: 'Sales', value: 45000 }] },
    { name: 'Mar', series: [{ name: 'Purchase', value: 52000 }, { name: 'Sales', value: 43000 }] },
    { name: 'Apr', series: [{ name: 'Purchase', value: 48000 }, { name: 'Sales', value: 41000 }] },
    { name: 'May', series: [{ name: 'Purchase', value: 53000 }, { name: 'Sales', value: 46000 }] },
    { name: 'Jun', series: [{ name: 'Purchase', value: 58000 }, { name: 'Sales', value: 47000 }] }
  ];

  // Order Summary Data
  orderSummaryData = [
    { name: 'Ordered', series: [{ name: 'Jan', value: 3000 }, { name: 'Feb', value: 3500 }, { name: 'Mar', value: 3200 }, { name: 'Apr', value: 3100 }, { name: 'May', value: 3400 }] },
    { name: 'Delivered', series: [{ name: 'Jan', value: 2500 }, { name: 'Feb', value: 2800 }, { name: 'Mar', value: 3000 }, { name: 'Apr', value: 2900 }, { name: 'May', value: 3200 }] }
  ];

  /**
   * Ensures all values are properly formatted as numbers.
   */
  private formatChartData(): void {
    this.salesPurchaseData = this.salesPurchaseData.map(month => ({
      ...month,
      series: month.series.map(item => ({
        ...item,
        value: Number(item.value) || 0 // Ensure it's a valid number
      }))
    }));

    this.orderSummaryData = this.orderSummaryData.map(category => ({
      ...category,
      series: category.series.map(item => ({
        ...item,
        value: Number(item.value) || 0
      }))
    }));
  }

  formatTick(value: number): string {
    // Handle undefined/null/NaN cases
    if (typeof value !== 'number' || isNaN(value)) return '0';
    return new Intl.NumberFormat('en-US').format(value);
  }

  /**
   * Toggles the sidebar state
   */
  toggleSidebar(): void {
    this.collapsed = !this.collapsed;
  }

  /**
   * Navigates to the Products page
   */
  navigateToProducts(): void {
    this.router.navigate(['/products']);
  }
}
