import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { ApartmentResponse, CreateApartment } from '../models/apartment.models';
import { PagedResult, PaginationQuery } from '../models/shared.models';

@Injectable({ providedIn: 'root' })
export class ApartmentService {
  private http = inject(HttpClient);
  private url = `${environment.apiUrl}/apartment`;

  getAll(query: PaginationQuery) {
    const params = new HttpParams()
      .set('pageNumber', query.pageNumber)
      .set('pageSize', query.pageSize);
    return this.http.get<PagedResult<ApartmentResponse>>(this.url, { params });
  }

  getById(id: string) {
    return this.http.get<ApartmentResponse>(`${this.url}/${id}`);
  }

  getMyApartments() {
    return this.http.get<ApartmentResponse[]>(`${this.url}/my`);
  }

  create(dto: CreateApartment) {
    return this.http.post<ApartmentResponse>(this.url, dto);
  }

  delete(id: string) {
    return this.http.delete(`${this.url}/${id}`);
  }
}