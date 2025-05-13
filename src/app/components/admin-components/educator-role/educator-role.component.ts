import { NotificationService } from './../../../services/notification.service';
import { ToastModule } from 'primeng/toast';
import { EducatorRole } from '../../../models/admin-models/educator-roles/educator-role';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { HttpClient } from '@angular/common/http';
import { EducatorroleService } from '../../../services/admin-services/educatorrole.service';
import { Button, ButtonModule } from 'primeng/button';
import { MessageService } from 'primeng/api';
import { FormsModule } from '@angular/forms';
import { ɵBrowserAnimationBuilder } from '@angular/animations';

@Component({
  selector: 'app-educator-role',
  imports: [
    InputTextModule,
    TableModule,
    CommonModule,
    Button,
    ButtonModule,
    FormsModule,
    ToastModule,
  ],
  templateUrl: './educator-role.component.html',
  styleUrl: './educator-role.component.scss',
  providers: [MessageService, NotificationService, ɵBrowserAnimationBuilder],
})
export class EducatorRoleComponent implements OnInit {
  pageSize: number = 5;
  pageIndex: number = 0;
  EducatorRoleList: EducatorRole[] = [];
  preEdit: any;
  isEdit = true;

  /**
   *
   */
  constructor(
    private http: HttpClient,
    private service: EducatorroleService,
    private notificationService: NotificationService
  ) {}
  ngOnInit(): void {
    this.getEducatorRoles();
  }

  getEducatorRoles() {
    this.service
      .getPaginated(this.pageSize * this.pageIndex, this.pageSize)
      .subscribe({
        next: (d) => {
          console.log(d);
          this.EducatorRoleList = d;
        },
      });
  }
  onEdit(roles: EducatorRoleList) {
    const tempEdit = JSON.stringify(roles);
    const newEdit = JSON.parse(tempEdit);
    this.preEdit = newEdit;
    roles.isEdit = true;
  }

  onCancel(roles: EducatorRoleList) {
    roles.isEdit = false;
    roles.role = this.preEdit.role;
  }

  onUpdate(roles: EducatorRoleList) {
    this.service.update(roles).subscribe((res: any) => {
      if ((res.success = true)) {
        roles.isEdit = false;
        this.getEducatorRoles();
        this.notificationService.displayNotification();
      } else {
        alert(res.message);
      }
    });
  }

  addNew() {
    return this.EducatorRoleList.unshift({ id: '0', role: '', isEdit: true });
  }

  async onNewCreate(roles: EducatorRoleList) {
    await this.service.create(roles).subscribe((res: any) => {
      if ((res = true)) {
        roles.isEdit = false;
        this.getEducatorRoles();
      } else {
        alert(res.message);
      }
    });
  }

  async onDelete(_id: any) {
    this.service.delete(_id).subscribe((res: any) => {
      if ((res.success = true)) {
        this.getEducatorRoles();
        this.notificationService.displayNotification();
      } else {
        alert(res.message);
      }
    });
  }

  show1() {
    this.notificationService.displayNotification();
  }
}

export interface EducatorRoleList {
  _id: string;
  role: string;
  isEdit: boolean;
}
