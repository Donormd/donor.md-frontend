export interface ISettings {
  isPublic: boolean;
  notDonor: boolean;
  temporaryRestrictions: boolean;
  notifications: {
    sms: boolean;
    email: boolean;
    telegram: boolean;
  };
}

export interface IChangePassword {
  newPassword: string;
  oldPassword: string;
}
