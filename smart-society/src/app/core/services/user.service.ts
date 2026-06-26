import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { UserResponse, CreateUser, UpdateUser } from '../models/user.models';
import { PagedResult, PaginationQuery } from '../models/shared.models';

@Injectable({ providedIn: 'root' })
export class UserService {
  private http = inject(HttpClient);
  private url = `${environment.apiUrl}/user`;

  getAll(query: PaginationQuery) {
    const params = new HttpParams()
      .set('pageNumber', query.pageNumber)
      .set('pageSize', query.pageSize);
    return this.http.get<PagedResult<UserResponse>>(this.url, { params });
  }

  getById(id: string) {
    return this.http.get<UserResponse>(`${this.url}/${id}`);
  }

  getByRole(role: string) {
    return this.http.get<UserResponse[]>(`${this.url}/role/${role}`);
  }

  create(dto: CreateUser) {
    return this.http.post<UserResponse>(this.url, dto);
  }

  update(id: string, dto: UpdateUser) {
    return this.http.put<UserResponse>(`${this.url}/${id}`, dto);
  }

  activate(id: string) {
    return this.http.patch(`${this.url}/${id}/activate`, {});
  }

  deactivate(id: string) {
    return this.http.patch(`${this.url}/${id}/deactivate`, {});
  }

  delete(id: string) {
    return this.http.delete(`${this.url}/${id}`);
  }
}