import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { ComplaintResponse, CreateComplaint, ResolveComplaint } from '../models/complaint.models';

@Injectable({ providedIn: 'root' })
export class ComplaintService {
  private http = inject(HttpClient);
  private url = `${environment.apiUrl}/complaint`;

  getAll() {
    return this.http.get<ComplaintResponse[]>(this.url);
  }

  getMy() {
    return this.http.get<ComplaintResponse[]>(`${this.url}/my`);
  }

  create(dto: CreateComplaint) {
    return this.http.post<ComplaintResponse>(this.url, dto);
  }

  resolve(id: string, dto: ResolveComplaint) {
    return this.http.patch<ComplaintResponse>(`${this.url}/${id}/resolve`, dto);
  }
}