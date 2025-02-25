import { Component } from '@angular/core';

import { Router, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { materials } from '../../../shared/angular-material/material.module';
import { SharedModule } from '../../../shared/shared.module';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterOutlet, CommonModule, materials],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  collapsed = false;

  constructor(private router: Router) {}

  toggleSidebar() {
    this.collapsed = !this.collapsed;
  }

  products(){
    this.router.navigate(['/products']);

  }
}
