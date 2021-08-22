export interface IUser {
  id: string;
  groupId: string;
  statusId: string;
  bloodGroupId: string;
  cityId: string;
  sexId: string;
  fullname: string;
  email: string;
  corporateId: string;
  phone: string;
  phoneMobile: string;
  dateBirth: string;
  creationDate: string;
  honorary: boolean;
}

export interface IUserWithToken extends IUser {
  token: string;
}
