/* eslint-disable no-console */
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext, IAuthContext } from '../context/auth';
import { IUser } from '../interfaces/user';

export const useAuth = (): IAuthContext | null => useContext(AuthContext);

const useProvideAuth = (): IAuthContext => {
  const [user, setUser] = useState<null | IUser>(null);

  const signIn = (email: string, password: string) => {
    console.log('sign in', { email, password });
  };
  const signUp = (user: IUser) => {
    console.log('sign up', user);
  };
  const signOut = () => {
    // send data to server, if need
    setUser(null);
  };
  const sendPasswordResetEmail = (email: string) =>
    console.log('send Password Reset Email', { email });
  const confirmPasswordReset = (code: string, password: string) =>
    console.log('confirm Password Reset', {
      code,
      password,
    });

  useEffect(() => {
    /*
     * loading user data
     * setUser(userObj);
     */
  }, []);

  return {
    user,
    signIn,
    signUp,
    signOut,
    sendPasswordResetEmail,
    confirmPasswordReset,
  };
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const auth: IAuthContext = useProvideAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};
