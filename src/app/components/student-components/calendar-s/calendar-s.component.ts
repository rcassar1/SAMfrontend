import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatePicker } from 'primeng/datepicker';
import { FieldsetModule } from 'primeng/fieldset';
import { CalendarService } from '../../../services/student-services/calendar/calendar.service';
import { Calendar } from '../../../models/student-models/calendar/calendar';
import { ApprovalsS } from '../../../models/student-models/approvals/approvals-s';
import { ButtonModule } from 'primeng/button';
import { AccordionModule } from 'primeng/accordion';
import { EventApprovalsService } from '../../../services/student-services/eventApprovals/event-approvals.service';
import { NavigationBarComponent } from '../navigation-bar/navigation-bar.component';
import { Toast } from 'primeng/toast';
import { RippleModule } from 'primeng/ripple';

const dateToday = new Date();

@Component({
  selector: 'app-calendar-s',
  imports: [
    DatePicker,
    CommonModule,
    FieldsetModule,
    FormsModule,
    ButtonModule,
    AccordionModule,
    NavigationBarComponent,
    Toast,
    RippleModule,
  ],
  templateUrl: './calendar-s.component.html',
  styleUrl: './calendar-s.component.scss',
  providers: [],
})
export class CalendarSComponent implements OnInit {
  date: Date | undefined = dateToday;
  CalendarS: Calendar[] = [];
  ApprovedEventsList: ApprovalsS[] = [];

  classID: string = '67bd77ef75c003636fc9672b';
  studentID: string = '67bdb25880ad5bfceafe1525';
  calendarDate: string = '2025-05-05';
  newDiaryDate!: Date;
  approved = false;

  /**
   *
   */
  constructor(
    private service: CalendarService,
    private approvalService: EventApprovalsService
  ) {}

  ngOnInit() {
    this.getCalendar();
  }

  async getCalendar() {
    this.service.getCalendar(this.classID, this.studentID).subscribe({
      next: (d) => {
        this.CalendarS = d;
      },
    });
  }

  newDate(newCalendarDate: Date) {
    this.calendarDate = newCalendarDate.toString();
    this.getCalendar();
  }

  onApprove() {
    // var whichStudent = '';
    // var whichCalendar = '68188aafae71036529eef9eb';
    // await this.service
    //   .approvedEvent(whichStudent, whichCalendar)
    //   .subscribe((res: any) => {
    //     if ((res = true)) {
    //       this.approved = true;
    //       this.getCalendar();
    //     } else {
    //       alert(res.message);
    //     }
    //   });
    // this.MessageService.add({
    //   severity: 'info',
    //   summary: 'Event approved',
    //   detail: 'Student has been approved for displayed event',
    //   life: 3000,
    // });
  }
}

export interface CalendarS {
  _id: string;
  date: string;
  classID: string;
  title: string;
  calendar: string;
  approved: boolean;
}
