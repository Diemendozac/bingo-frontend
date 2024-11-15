
import axios from 'axios';

export interface LoginRequest {
  username: string;
  password: string;
}

export interface RegisterRequest {
  username: string;
  password: string;
  email: string;
}

export const AuthService = {
  login: async (data: LoginRequest) => {
    const response = await axios.post('/api/auth/login', data);
    return response.data;
  },
  
  register: async (data: RegisterRequest) => {
    const response = await axios.post('/api/auth/register', data);
    return response.data;
  }
};
