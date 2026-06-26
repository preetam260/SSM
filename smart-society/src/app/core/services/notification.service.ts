import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { NotificationResponse } from '../models/notification.models';
import { PagedResult, PaginationQuery } from '../models/shared.models';

@Injectable({ providedIn: 'root' })
export class NotificationService {
  private http = inject(HttpClient);
  private url = `${environment.apiUrl}/notification`;

  getAll(query?: PaginationQuery) {
    if (!query) return this.http.get<NotificationResponse[]>(this.url);
    const params = new HttpParams()
      .set('pageNumber', query.pageNumber)
      .set('pageSize', query.pageSize);
    return this.http.get<PagedResult<NotificationResponse>>(this.url, { params });
  }

  getUnread() {
    return this.http.get<NotificationResponse[]>(`${this.url}/unread`);
  }

  markAsRead(id: string) {
    return this.http.patch(`${this.url}/${id}/read`, {});
  }

  markAllAsRead() {
    return this.http.patch(`${this.url}/read-all`, {});
  }
}