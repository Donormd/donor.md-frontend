export interface IRecipient {
  recipient: {
    fullname: string;
    dateBirth: Date;
    bloodGroupId: string;
    medicalCenterId: string;
    bloodCenterId: string;
    numberDonors: number;
    deadline: Date;
    info: string;
    src: string;
  };
  contactPerson: {
    fullname: string;
    email: string;
    phone: string;
    whoAreYou: string;
  };
}
