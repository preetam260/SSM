export interface PagedResult<T> {
  items: T[];
  totalCount: number;
  pageNumber: number;
  pageSize: number;
}

export interface PaginationQuery {
  pageNumber: number;
  pageSize: number;
  search?: string;
}