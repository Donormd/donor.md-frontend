import { createContext } from 'react';
import { IUser } from '../interfaces/user';

export interface IAuthContext {
  user: IUser | null;
  signIn: (data: { email: string; password: string }) => void;
  signUp: (user: IUser) => void;
  signOut: () => void;
}

export const AuthContext = createContext<IAuthContext | null>(null);
