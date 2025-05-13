import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ApprovalsS } from '../../../models/student-models/approvals/approvals-s';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class EventApprovalsService {
  constructor(private http: HttpClient) {}

  isApproved(): Observable<ApprovalsS> {
    return this.http.get<ApprovalsS>(
      'http:..localhost:3000/approve/isapproved'
    );
  }
}
