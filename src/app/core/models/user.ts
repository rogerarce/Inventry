export type UserType = 'admin' | 'distributor' | 'reseller';

export interface IUser {
  user_id: string;
  firstname: string;
  lastname: string;
  email: string;
  phone_number: string;
  type: UserType;
  created_at: Date;
  updated_at: Date;
}

export type Users = IUser[];

export class User {
  constructor(user: IUser) {}
}
