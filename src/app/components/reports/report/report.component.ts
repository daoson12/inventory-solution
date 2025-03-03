import { Component, OnInit } from "@angular/core";
import { ApexChart, ApexXAxis, ApexStroke, ApexOptions, NgApexchartsModule } from 'ng-apexcharts';
import { materials } from "../../../shared/angular-material/material.module";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
  
export interface ChartOptions {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
}

@Component({
  selector: 'app-report',
  standalone: true,
  imports: [RouterModule, CommonModule, NgApexchartsModule, materials],
  templateUrl: './report.component.html',
  styleUrl: './report.component.scss'
})
export class ReportComponent implements OnInit {
  chartOptions!: ChartOptions;

  ngOnInit(): void {
    this.initializeChart();
  }

  initializeChart() {
    this.chartOptions = {
      series: [
        {
          name: "Sales",
          data: [10, 20, 30, 40, 50, 60, 70]
        }
      ],
      chart: {
        type: "line",
        height: 350
      },
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"]
      },
      stroke: {
        curve: "smooth"
      }
    };
  }
  
}
