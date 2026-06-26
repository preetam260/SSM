export interface BillResponse {
  id: string;
  apartmentId: string;
  apartmentNumber: string;
  amount: number;
  penalty: number;
  totalAmount: number;
  period: string;
  dueDate: string;
  status: 'Pending' | 'Paid' | 'Overdue';
  paidAt?: string;
}

export interface CreateBill {
  apartmentId: string;
  amount: number;
  period: string;
  dueDate: string;
}