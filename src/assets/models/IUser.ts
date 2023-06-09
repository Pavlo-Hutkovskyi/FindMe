import {IDistrict} from "./IDistrict";

export interface IUser {
  firstName: string,
  lastName: string,
  phoneNumber: string,
  email: string,
  password: string,
  salt: string,
  district: IDistrict,
}
