type StatusType = 'success' | 'pending' | 'reject';

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
