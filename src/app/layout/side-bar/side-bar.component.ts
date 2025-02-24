import { Component, Input } from '@angular/core';
import { materials } from '../../shared/angular-material/material.module';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-side-bar',
  standalone: true,
   imports: [materials, CommonModule, RouterModule, ReactiveFormsModule, FormsModule ],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss',
  animations: [
    trigger('sidebarState', [
      state('expanded', style({ width: '250px' })),
      state('collapsed', style({ width: '80px' })),
      transition('expanded <=> collapsed', animate('300ms ease-in-out')),
    ]),
    trigger('fadeInOut', [
      state('visible', style({ opacity: 1, transform: 'translateX(0)' })),
      state('hidden', style({ opacity: 0, transform: 'translateX(-20px)' })),
      transition('hidden <=> visible', animate('200ms ease-in-out')),
    ]),
  ],
})
export class SideBarComponent {
  @Input() collapsed = false;

  
}
