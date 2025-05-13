import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  static displayNotification(arg0: string, arg1: string, arg2: string) {
    throw new Error('Method not implemented.');
  }
  constructor(private messageService: MessageService) {}

  displayNotification() {
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: 'Message Content',
    });
  }
}
