import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AnnouncementsS } from '../../../models/student-models/announcements/announcements-s';

@Injectable({
  providedIn: 'root',
})
export class AnnouncementsSService {
  constructor(private http: HttpClient) {}

  findById(id: string): Observable<AnnouncementsS> {
    return this.http.get<AnnouncementsS>(
      `http://localhost:3000/announcements/id/${id}`
    );
  }

  getAnnouncements(): Observable<AnnouncementsS[]> {
    return this.http.get<AnnouncementsS[]>(
      `http://localhost:3000/announcements/all`
    );
  }
}
