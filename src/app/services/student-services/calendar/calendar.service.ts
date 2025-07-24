import { Injectable } from '@angular/core';
import { Calendar } from '../../../models/student-models/calendar/calendar';
import { ApprovalsS } from '../../../models/student-models/approvals/approvals-s';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CalendarService {
  constructor(private http: HttpClient) {}

  findById(id: string): Observable<Calendar> {
    return this.http.get<Calendar>(`http://localhost:3000/diary/id/${id}`);
  }

  getCalendar(classID: string, studentID: string): Observable<Calendar[]> {
    return this.http.get<Calendar[]>(
      `http://localhost:3000/studentcalendar/all?classID=${classID}&studentID=${studentID}`
    );
  }

  approvedEvent(
    whichStudent: string,
    whichCalendar: string
  ): Observable<ApprovalsS> {
    return this.http.post<ApprovalsS>(`http://localhost:3000/approve/approve`, {
      studentID: whichStudent,
      calendarID: whichCalendar,
      approved: true,
    });
  }
}
