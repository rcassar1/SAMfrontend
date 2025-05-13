import { HttpClient } from '@angular/common/http';
import { AttendanceT } from '../../../models/attendance-t';
import { AttendanceService } from '../../../services/teacher-services/attendance.service';
import { Component } from '@angular/core';
import { Button, ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { RippleModule } from 'primeng/ripple';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-attendance-t',
  imports: [
    InputTextModule,
    TableModule,
    CommonModule,
    Button,
    ButtonModule,
    FormsModule,
    ToastModule,
  ],
  templateUrl: './attendance-t.component.html',
  styleUrl: './attendance-t.component.scss',
})
export class AttendanceTComponent {
  pageSize: number = 5;
  pageIndex: number = 0;
  StudentAttendance: AttendanceT[] = [];
  preEdit: any;
  isEdit = true;

  /**
   *
   */
  constructor(private http: HttpClient, private service: AttendanceService) {}
  ngOnInit(): void {
    // this.getEducatorRoles();
  }

  getEducatorRoles() {
    // this.service
    //   .getPaginated(this.pageSize * this.pageIndex, this.pageSize)
    //   .subscribe({
    //     next: (d) => {
    //       console.log(d);
    //       this.StudentAttendance = d;
    //     },
    //   });
  }
  onEdit(roles: AttendanceT) {
    // const tempEdit = JSON.stringify(roles);
    // const newEdit = JSON.parse(tempEdit);
    // this.preEdit = newEdit;
    // roles.isEdit = true;
  }

  onCancel(roles: AttendanceT) {
    // roles.isEdit = false;
    // roles.role = this.preEdit.role;
  }

  onUpdate(roles: AttendanceT) {
    // this.service.update(roles).subscribe((res: any) => {
    //   if ((res.success = true)) {
    //     roles.isEdit = false;
    //     this.getEducatorRoles();
    //     this.notificationService.displayNotification();
    //   } else {
    //     alert(res.message);
    //   }
    // });
  }

  addNew() {
    // return this.StudentAttendance.unshift({ id: '0', role: '', isEdit: true });
  }

  async onNewCreate(roles: AttendanceT) {
    // await this.service.create(roles).subscribe((res: any) => {
    //   if ((res = true)) {
    //     roles.isEdit = false;
    //     this.getEducatorRoles();
    //   } else {
    //     alert(res.message);
    //   }
    // });
  }

  async onDelete(_id: any) {
    // this.service.delete(_id).subscribe((res: any) => {
    //   if ((res.success = true)) {
    //     this.getEducatorRoles();
    //     this.notificationService.displayNotification();
    //   } else {
    //     alert(res.message);
    //   }
    // });
  }

  show1() {
    // this.notificationService.displayNotification();
  }
}

export interface StudentAttendance {
  studentID: string;
  date: Date;
  attendanceStatusID: string;
}
