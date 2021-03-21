import { createContext } from 'react';
import { IUser } from '../interfaces/user';

export interface IUserWithAdditionalFields extends IUser {
  password: string;
}

export interface IAuthContext {
  user: IUser | null;
  signIn: (email: string, password: string) => void;
  signUp: (user: IUserWithAdditionalFields) => void;
  signOut: () => void;
  sendPasswordResetEmail: (email: string) => void;
  confirmPasswordReset: (code: string, password: string) => void;
}

export const AuthContext = createContext<IAuthContext | null>(null);
