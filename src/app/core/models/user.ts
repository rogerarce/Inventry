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
  created_at: Date;
  updated_at: Date;

  constructor(
    public user_id: string,
    public firstname: string,
    public lastname: string,
    public email: string,
    public phone_number: string,
    public type: UserType,
  ) {}

  get fullName() {
    return `${this.firstname} ${this.lastname}`;
  }
}
