export interface FacilityResponse {
  id: string;
  name: string;
  description: string;
  pricePerHour: number;
  isActive: boolean;
}

export interface CreateFacility {
  name: string;
  description: string;
  pricePerHour: number;
}