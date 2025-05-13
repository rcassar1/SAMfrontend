import { Injectable } from '@angular/core';
import { EducatorRole } from '../../models/admin-models/educator-roles/educator-role';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { EducatorRoleList } from '../../components/admin-components/educator-role/educator-role.component';

@Injectable({
  providedIn: 'root',
})
export class EducatorroleService {
  constructor(private http: HttpClient) {}

  findById(id: string): Observable<EducatorRole> {
    return this.http.get<EducatorRole>(
      `http://localhost:3000/educatorrole/id/${id}`
    );
  }
  getPaginated(skip: number, take: number): Observable<EducatorRole[]> {
    return this.http.get<EducatorRole[]>(
      `http://localhost:3000/educatorrole/all?${skip}&${take}`
    );
  }

  update(roles: EducatorRoleList): Observable<EducatorRole> {
    return this.http.put<EducatorRole>(
      `http://localhost:3000/educatorrole/update`,
      roles
    );
  }

  create(roles: EducatorRoleList): Observable<EducatorRole> {
    return this.http.post<EducatorRole>(
      `http://localhost:3000/educatorrole/add`,
      roles
    );
  }

  delete(_id: any) {
    return this.http.delete<EducatorRole>(
      `http://localhost:3000/educatorrole/delete/?_id=${_id}`
    );
  }
}
