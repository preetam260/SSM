export interface ApartmentResponse {
  id: string;
  apartmentNumber: string;
  floor: number;
  type: string;
  isOccupied: boolean;
  ownerId: string;
  ownerName: string;
}

export interface CreateApartment {
  apartmentNumber: string;
  floor: number;
  type: string;
  ownerId: string;
}