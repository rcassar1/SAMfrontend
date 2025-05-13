import { Ripple, RippleModule } from 'primeng/ripple';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { FluidModule, Fluid } from 'primeng/fluid';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-selection-page',
  imports: [
    ButtonModule,
    FluidModule,
    Fluid,
    RippleModule,
    Ripple,
    RouterModule,
  ],
  standalone: true,
  templateUrl: './selection-page.component.html',
  styleUrl: './selection-page.component.scss',
})
export class SelectionPageComponent {}
