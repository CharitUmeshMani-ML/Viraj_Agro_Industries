import { User } from '../types';

// This is for demonstration purposes. In a real application, passwords would be hashed.
export const mockUsers: (User & { password: string })[] = [
  { 
    id: 1, 
    email: 'test@abc.com', 
    password: 'Test@123', 
    name: 'Test User',
    addresses: [
      {
        id: 1,
        line1: '123 Green Valley Farms',
        city: 'Greenfield',
        state: 'Stateville',
        pincode: '12345',
        isDefault: true,
      },
      {
        id: 2,
        line1: '456 Harvest Lane',
        line2: 'Apt 2B',
        city: 'Farmington',
        state: 'Stateville',
        pincode: '67890',
      }
    ] 
  },
];