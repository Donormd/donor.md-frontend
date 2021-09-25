export interface IRecipient {
  _id: string;
  recipient: {
    fullname: string;
    dateBirth: Date;
    bloodGroupId: string;
    transfusionCenterId: string;
    bloodCenterId: string;
    numberDonors: number;
    deadline: Date;
    disease: string;
    info: string;
    file: File;
  };
  contactPerson: {
    fullname: string;
    email: string;
    phone: string;
    whoAreYou: string;
  };
}
