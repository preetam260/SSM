export interface UserResponse {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: 'Admin' | 'Owner' | 'Resident' | 'SecurityStaff';
  isActive: boolean;
  createdAt: string;
}

export interface CreateUser {
  name: string;
  email: string;
  phone: string;
  password: string;
  role: string;
}

export interface UpdateUser {
  name: string;
  phone: string;
}