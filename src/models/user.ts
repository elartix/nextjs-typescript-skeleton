import { Company } from './company';

export interface User {
  id: string;
  role: string;
  email: string
  status: string
  avatar: string;
  fullName: string;
  username: string;
  company?: Company;
}
