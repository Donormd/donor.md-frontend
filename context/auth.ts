import { createContext } from 'react';
import { IUser } from '../redux/redusers/user';

export interface IAuthContext {
  user: IUser | null;
  signIn: (email: string, password: string) => void;
  signUp: () => void;
  signOut: () => void;
  sendPasswordResetEmail: () => void;
  confirmPasswordReset: () => void;
}

export const AuthContext = createContext<IAuthContext | null>(null);
