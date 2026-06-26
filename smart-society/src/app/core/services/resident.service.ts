import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { ResidentResponse, CreateResident, UpdateResident, MoveOutResident } from '../models/resident.models';

@Injectable({ providedIn: 'root' })
export class ResidentService {
  private http = inject(HttpClient);
  private url = `${environment.apiUrl}/resident`;

  getAll() {
    return this.http.get<ResidentResponse[]>(this.url);
  }

  getAllCurrent() {
    return this.http.get<ResidentResponse[]>(`${this.url}/current`);
  }

  getById(id: string) {
    return this.http.get<ResidentResponse>(`${this.url}/${id}`);
  }

  getByApartmentId(apartmentId: string) {
    return this.http.get<ResidentResponse[]>(`${this.url}/apartment/${apartmentId}`);
  }

  create(dto: CreateResident) {
    return this.http.post<ResidentResponse>(this.url, dto);
  }

  update(id: string, dto: UpdateResident) {
    return this.http.put<ResidentResponse>(`${this.url}/${id}`, dto);
  }

  moveOut(id: string, dto: MoveOutResident) {
    return this.http.patch(`${this.url}/${id}/moveout`, dto);
  }
}