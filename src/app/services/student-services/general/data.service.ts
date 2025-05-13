import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Profiles } from '../../../models/student-models/profile/profiles';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  profile: Profiles[] = [];
  constructor(private http: HttpClient) {}

  student = signal('email1');
  studentProfile = signal(Profiles);

  setStudent(studentEmail: string) {
    this.student.set(studentEmail);
    console.log(this.student);
  }

  getStudent() {
    return this.student;
  }

  getStudentIdFromEmail(): Observable<Profiles[]> {
    return this.http.get<Profiles[]>(`http://localhost:3000/students/email1`);
  }
}
