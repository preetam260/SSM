import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { AnnouncementResponse, CreateAnnouncement } from '../models/announcement.models';
import { PagedResult, PaginationQuery } from '../models/shared.models';

@Injectable({ providedIn: 'root' })
export class AnnouncementService {
  private http = inject(HttpClient);
  private url = `${environment.apiUrl}/announcement`;

  getAll(query: PaginationQuery) {
    const params = new HttpParams()
      .set('pageNumber', query.pageNumber)
      .set('pageSize', query.pageSize);
    return this.http.get<PagedResult<AnnouncementResponse>>(this.url, { params });
  }

  getMine() {
    return this.http.get<AnnouncementResponse[]>(`${this.url}/mine`);
  }

  getPinned() {
    return this.http.get<AnnouncementResponse[]>(`${this.url}/pinned`);
  }

  create(dto: CreateAnnouncement) {
    return this.http.post<AnnouncementResponse>(this.url, dto);
  }

  update(id: string, dto: CreateAnnouncement) {
    return this.http.put<AnnouncementResponse>(`${this.url}/${id}`, dto);
  }

  delete(id: string) {
    return this.http.delete(`${this.url}/${id}`);
  }
}