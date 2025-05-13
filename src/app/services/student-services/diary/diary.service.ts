import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Diary } from '../../../models/student-models/diary/diary';

@Injectable({
  providedIn: 'root',
})
export class DiaryService {
  constructor(private http: HttpClient) {}

  findById(id: string): Observable<Diary> {
    return this.http.get<Diary>(`http://localhost:3000/diary/id/${id}`);
  }

  getDiary(classID: string, date: string): Observable<Diary[]> {
    return this.http.get<Diary[]>(
      `http://localhost:3000/diary?class=${classID}&date=${date}`
    );
  }

  // update(roles: AttendanceSList): Observable<Attendance> {
  //   return this.http.put<Attendance>(
  //     `http://localhost:3000/educatorrole/update`,
  //     roles
  //   );
  // }

  // create(roles: AttendanceSList): Observable<Attendance> {
  //   return this.http.post<Attendance>(
  //     `http://localhost:3000/educatorrole/add`,
  //     roles
  //   );
  // }

  // delete(_id: any) {
  //   return this.http.delete<Attendance>(
  //     `http://localhost:3000/educatorrole/delete/?_id=${_id}`
  //   );
  // }

  // upload(files: any[]) {
  //   return this.http.post<File>(
  //     `http://localhost:3000/attendance/upload/?name=files`,
  //     files
  //   );
  // }
}
