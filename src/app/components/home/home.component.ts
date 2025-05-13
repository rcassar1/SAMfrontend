import { Component, NgModule } from '@angular/core';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, NgForm } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [
    FloatLabelModule,
    InputTextModule,
    FormsModule,
    ButtonModule,
    RippleModule,
    CommonModule,
    RouterModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  providers: [NgModule],
})
export class HomeComponent {
  input = '';

  valueChange(emailValue: string) {
    this.input = emailValue;
    console.log(this.input);
  }

  onLogin() {
    console.log(this.input);
    RouterLink: 'home';
  }

  submitForm(form: any): void {
    if (form.valid) {
      console.log('Form data:', this.input);
    }
  }
}
