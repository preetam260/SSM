export interface VisitorResponse {
  id: string;
  name: string;
  phone: string;
  purpose: string;
  apartmentId: string;
  apartmentNumber: string;
  status: 'Pending' | 'Approved' | 'Denied' | 'CheckedIn' | 'CheckedOut';
  qrCode?: string;
  visitDate: string;
}

export interface RegisterVisitor {
  name: string;
  phone: string;
  purpose: string;
  apartmentId: string;
  visitDate: string;
}