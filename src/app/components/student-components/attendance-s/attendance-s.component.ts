import { HttpClient } from '@angular/common/http';
import { Attendance } from '../../../models/attendance';
import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { FluidModule } from 'primeng/fluid';
import { InputTextModule } from 'primeng/inputtext';
import { RippleModule } from 'primeng/ripple';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import {
  FileUpload,
  FileUploadEvent,
  FileUploadModule,
} from 'primeng/fileupload';
import { AttendanceSService } from '../../../services/student-services/attendance/attendance-s.service';
import { MessageService } from 'primeng/api';
import { DataService } from '../../../services/student-services/general/data.service';
import { NavigationBarComponent } from '../navigation-bar/navigation-bar.component';

interface UploadEvent {
  originalEvent: FileUploadEvent;
  files: File[];
}

@Component({
  selector: 'app-attendance-s',
  imports: [
    InputTextModule,
    TableModule,
    CommonModule,
    ButtonModule,
    FormsModule,
    ToastModule,
    RippleModule,
    FluidModule,
    RouterModule,
    FileUploadModule,
    FileUpload,
    NavigationBarComponent,
  ],
  templateUrl: './attendance-s.component.html',
  styleUrl: './attendance-s.component.scss',
  providers: [MessageService],
})
export class AttendanceComponent implements OnInit {
  private MessageService = inject(MessageService);
  pageSize: number = 5;
  pageIndex: number = 0;
  AttendanceSList: Attendance[] = [];
  student: string = '67bdb25880ad5bfceafe1525';
  studentLogin: any = '67bdb25880ad5bfceafe1525';
  preEdit: any;
  isEdit = true;
  notificationService: any;
  uploadedFiles: File[] = [];

  /**
   *
   */
  constructor(
    private http: HttpClient,
    private service: AttendanceSService,
    private messageService: MessageService,
    private dataService: DataService
  ) {}
  async ngOnInit() {
    this.getAttendance();
  }

  async getLoginStudent() {
    this.dataService.getStudentIdFromEmail().subscribe({
      next: (d) => {
        console.log(d);
        this.studentLogin = d;
      },
    });
    console.log(this.studentLogin);
  }

  getAttendance() {
    this.service.getPaginated(this.student).subscribe({
      next: (d) => {
        console.log(d);
        this.AttendanceSList = d;
      },
    });
  }

  show1() {
    this.notificationService.displayNotification();
  }

  async onUpload(event: FileUploadEvent) {
    // for (let file of event.files) {
    //   this.uploadedFiles.push(file);
    // }

    this.MessageService.add({
      severity: 'info',
      summary: 'File Uploaded',
      detail: '',
    });
    this.getAttendance();
    // this.service.upload(this.uploadedFiles).subscribe((res: any) => {
    //   if ((res = true)) {
    //     this.getAttendance();
    //   } else {
    //     alert(res.message);
    //   }
    // });
  }
}

export interface AttendanceSList {
  studentID: string;
  date: string;
  attendanceStatusID: string;
  isEdit: boolean;
}
