type StatusType = 'success' | 'pending' | 'reject';

export type BloodGroup =
  | 'O(I)-'
  | 'O(I)+'
  | 'A(II)-'
  | 'A(II)+'
  | 'B(III)-'
  | 'B(III)+'
  | 'AB(IV)-'
  | 'AB(IV)+';

export interface IDonation {
  userId: string;
  referenceNumber: string;
  donationNumber: number;
  date: Date;
  transfusionCenterId: string;
  recipientId: string | null;
  referenceImg: string;
}

export interface IDonationResponse extends IDonation {
  _id: string;
  status: StatusType;
}

export interface ICorporateDonation {
  organization: string;
  leader: string;
  contact: string;
  position: string;
  email: string;
  telephoneNumber: string;
  cityPhoneNumber: string;
  amountWorkers: number;
}
