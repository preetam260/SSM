export interface LoginRequest{
    email: string;
    password: string;
}

export interface LoginResponse{
    token: string;
    name: string;
    email: string;
    role: 'Admin' | 'Owner' | 'Resident' | 'SecurityStaff';
}

export interface ForgotPasswordRequest{
    email: string;
}

export interface ResetPasswordRequest{
    email: string;
    token: string;
    newPassword: string;
}