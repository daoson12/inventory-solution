import { Component, EventEmitter, Output } from '@angular/core';
import { materials } from '../../shared/angular-material/material.module';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
    imports: [materials, CommonModule, RouterModule, ReactiveFormsModule, FormsModule, ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  @Output() sidebarToggle = new EventEmitter<void>();

  toggleSidebar() {
    this.sidebarToggle.emit();  // Notify parent to toggle sidebar
  }
}
