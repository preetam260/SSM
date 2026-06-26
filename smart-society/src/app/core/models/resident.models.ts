export interface ResidentResponse {
  id: string;
  userId: string;
  userName: string;
  apartmentId: string;
  apartmentNumber: string;
  moveInDate: string;
  moveOutDate?: string;
  isActive: boolean;
}

export interface CreateResident {
  userId: string;
  apartmentId: string;
  moveInDate: string;
}

export interface UpdateResident {
  moveInDate: string;
}

export interface MoveOutResident {
  moveOutDate: string;
}