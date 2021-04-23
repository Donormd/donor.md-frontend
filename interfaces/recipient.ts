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

export interface IRecipientCard {
  _id: string;
  src: string;
  name: string;
  age: number;
  bloodGroup: string;
  disease: string;
  placeName: string;
  city: string;
  date: Date;
}
