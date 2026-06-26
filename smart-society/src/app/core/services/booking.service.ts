import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { BookingResponse, CreateBooking } from '../models/booking.models';
import { PagedResult, PaginationQuery } from '../models/shared.models';

@Injectable({ providedIn: 'root' })
export class BookingService {
  private http = inject(HttpClient);
  private url = `${environment.apiUrl}/booking`;

  getById(id: string) {
    return this.http.get<BookingResponse>(`${this.url}/${id}`);
  }

  getMyBookings() {
    return this.http.get<BookingResponse[]>(`${this.url}/my`);
  }

  getByFacilityId(facilityId: string, query: PaginationQuery) {
    const params = new HttpParams()
      .set('pageNumber', query.pageNumber)
      .set('pageSize', query.pageSize);
    return this.http.get<PagedResult<BookingResponse>>(`${this.url}/facility/${facilityId}`, { params });
  }

  create(dto: CreateBooking) {
    return this.http.post<BookingResponse>(this.url, dto);
  }

  cancel(id: string) {
    return this.http.patch(`${this.url}/${id}/cancel`, {});
  }

  complete(id: string) {
    return this.http.patch(`${this.url}/${id}/complete`, {});
  }

  createPaymentOrder(id: string) {
    return this.http.post(`${this.url}/${id}/create-order`, {});
  }
}