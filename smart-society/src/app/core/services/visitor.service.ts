import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { VisitorResponse, RegisterVisitor } from '../models/visitor.models';

@Injectable({ providedIn: 'root' })
export class VisitorService {
  private http = inject(HttpClient);
  private url = `${environment.apiUrl}/visitor`;

  getMyVisitors() {
    return this.http.get<VisitorResponse[]>(`${this.url}/my`);
  }

  getByStatus(status: string) {
    return this.http.get<VisitorResponse[]>(`${this.url}/status/${status}`);
  }

  register(dto: RegisterVisitor) {
    return this.http.post<VisitorResponse>(`${this.url}/register`, dto);
  }

  deny(id: string) {
    return this.http.patch(`${this.url}/${id}/deny`, {});
  }

  checkout(id: string) {
    return this.http.patch(`${this.url}/${id}/checkout`, {});
  }
}