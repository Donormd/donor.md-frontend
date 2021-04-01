import { createContext } from 'react';
import { IUser } from '../interfaces/user';

export interface IAuthContext {
  user: IUser | null;
  signIn: (user: IUser) => void;
  signUp: (user: IUser) => void;
  signOut: () => void;
  sendPasswordResetEmail: (email: string) => void;
  confirmPasswordReset: (code: string, password: string) => void;
}

export const AuthContext = createContext<IAuthContext | null>(null);
