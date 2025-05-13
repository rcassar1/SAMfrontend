import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { FieldsetModule } from 'primeng/fieldset';
import { FloatLabelModule } from 'primeng/floatlabel';
import { RippleModule } from 'primeng/ripple';
import { DataService } from '../../../services/student-services/general/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-s',
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FloatLabelModule,
    FieldsetModule,
    ButtonModule,
    RippleModule,
  ],
  templateUrl: './profile-s.component.html',
  styleUrl: './profile-s.component.scss',
})
export class ProfileSComponent {
  email = new FormControl('');
  studentEmail: any;

  constructor(private dataService: DataService, private router: Router) {}

  async onSubmit() {
    this.studentEmail = this.email.value;
    this.dataService.setStudent(this.studentEmail);
    this.router.navigate(['/home']);
  }
}
