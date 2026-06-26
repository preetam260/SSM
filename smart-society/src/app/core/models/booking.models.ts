export interface BookingResponse {
  id: string;
  userId: string;
  facilityId: string;
  facilityName: string;
  startTime: string;
  endTime: string;
  status: 'Pending' | 'Confirmed' | 'Cancelled' | 'Completed';
  totalCost: number;
}

export interface CreateBooking {
  facilityId: string;
  startTime: string;
  endTime: string;
}