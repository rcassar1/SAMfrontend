import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Attendance } from '../../../models/attendance';
import { AttendanceSList } from '../../../components/student-components/attendance-s/attendance-s.component';

@Injectable({
  providedIn: 'root',
})
export class AttendanceSService {
  constructor(private http: HttpClient) {}
  findById(id: string): Observable<Attendance> {
    return this.http.get<Attendance>(
      `http://localhost:3000/educatorrole/id/${id}`
    );
  }
  getPaginated(studentID: string): Observable<Attendance[]> {
    return this.http.get<Attendance[]>(
      `http://localhost:3000/attendance/all?student=${studentID}`
    );
  }

  upload(files: any[]) {
    return this.http.post<File>(
      `http://localhost:3000/attendance/upload/?name=files`,
      files
    );
  }
}
