import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Color, NgxChartsModule, ScaleType } from '@swimlane/ngx-charts';
import { materials } from '../../../shared/angular-material/material.module';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexStroke,
  ApexLegend,
  ApexGrid,
  ApexYAxis,
  ApexTooltip,
  NgApexchartsModule
} from 'ng-apexcharts';

export interface ChartOptions1 {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  legend: ApexLegend;
  fill: ApexFill;
  grid: ApexGrid;
  tooltip: ApexTooltip;
}
export interface ChartOptions {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  legend: ApexLegend;
  grid: ApexGrid;
  tooltip: ApexTooltip;
}
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterOutlet, RouterModule, CommonModule, NgxChartsModule, NgApexchartsModule, materials],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  collapsed = false;
  chartOptions!: ChartOptions;
  chartOptions1!: ChartOptions1;
  displayedColumns: string[] = ['name', 'sold', 'remaining', 'price'];
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.initializeChart();
    this.initializeChart2();
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


  initializeChart() {
    this.chartOptions = {
      series: [
        {
          name: 'Purchase',
          data: [50000, 55000, 42000, 38000, 40000, 46000, 30000, 45000, 41000, 39000, 37000, 42000]
        },
        {
          name: 'Sales',
          data: [42000, 48000, 45000, 35000, 41000, 38000, 35000, 47000, 43000, 40000, 39000, 44000]
        }
      ],
      chart: {
        type: 'bar',
        height: 350
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      },
      yaxis: {
        labels: {
          formatter: (val) => val.toLocaleString()
        }
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
      },
      dataLabels: {
        enabled: false
      },
      legend: {
        position: 'bottom'
      },
      grid: {
        show: true,
        strokeDashArray: 5
      },
      tooltip: {
        y: {
          formatter: (val) => `₹${val.toLocaleString()}`
        }
      }
    };
  }

  initializeChart2() {
    this.chartOptions1 = {
      series: [
        {
          name: 'Ordered',
          data: [3200, 2200, 2800, 1800, 2400],
          color: '#c38f66' // Brown color
        },
        {
          name: 'Delivered',
          data: [2800, 3100, 2900, 3400, 3200],
          color: '#90caf9' // Light blue color
        }
      ],
      chart: {
        type: 'area',
        height: 300
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      },
      yaxis: {
        labels: {
          formatter: (val) => val.toLocaleString()
        }
      },
      stroke: {
        curve: 'smooth',
        width: 2
      },
      dataLabels: {
        enabled: false
      },
      legend: {
        position: 'bottom'
      },
      grid: {
        show: true,
        strokeDashArray: 5
      },
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 0.1,
          opacityFrom: 0.3,
          opacityTo: 0.1,
          stops: [0, 100]
        }
      },
      tooltip: {
        y: {
          formatter: (val) => `${val.toLocaleString()}`
        }
      }
    };
  }


  navigateToProducts(): void {
    this.router.navigate(['/products']);
  }
}
