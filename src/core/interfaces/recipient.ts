export interface IRecipient {
  _id: string;
  recipient: {
    fullname: string;
    dateBirth: Date;
    bloodGroupId: string;
    medicalCenterId: string;
    bloodCenterId: string;
    numberDonors: number;
    deadline: Date;
    disease: string;
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
