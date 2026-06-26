import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { FacilityResponse, CreateFacility } from '../models/facility.models';

@Injectable({ providedIn: 'root' })
export class FacilityService {
  private http = inject(HttpClient);
  private url = `${environment.apiUrl}/facility`;

  getAll() {
    return this.http.get<FacilityResponse[]>(this.url);
  }

  getActive() {
    return this.http.get<FacilityResponse[]>(`${this.url}/active`);
  }

  create(dto: CreateFacility) {
    return this.http.post<FacilityResponse>(this.url, dto);
  }

  update(id: string, dto: CreateFacility) {
    return this.http.put<FacilityResponse>(`${this.url}/${id}`, dto);
  }

  delete(id: string) {
    return this.http.delete(`${this.url}/${id}`);
  }
}