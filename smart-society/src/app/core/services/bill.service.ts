import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { BillResponse, CreateBill } from '../models/bill.models';
import { PagedResult, PaginationQuery } from '../models/shared.models';

@Injectable({ providedIn: 'root' })
export class BillService {
  private http = inject(HttpClient);
  private url = `${environment.apiUrl}/bill`;

  getAll(query: PaginationQuery) {
    const params = new HttpParams()
      .set('pageNumber', query.pageNumber)
      .set('pageSize', query.pageSize);
    return this.http.get<PagedResult<BillResponse>>(this.url, { params });
  }

  getById(id: string) {
    return this.http.get<BillResponse>(`${this.url}/${id}`);
  }

  getMyBills() {
    return this.http.get<BillResponse[]>(`${this.url}/my`);
  }

  getPending() {
    return this.http.get<BillResponse[]>(`${this.url}/pending`);
  }

  create(dto: CreateBill) {
    return this.http.post<BillResponse>(this.url, dto);
  }

  delete(id: string) {
    return this.http.delete(`${this.url}/${id}`);
  }

  applyPenalties() {
    return this.http.post(`${this.url}/apply-penalties`, {});
  }
}