export interface IDonation {
  userId: string;
  referenceNumber: string;
  donationNumber: string;
  date: string;
  transfusionCenterId: string;
  recipientId: string;
  referenceImg: string;
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
