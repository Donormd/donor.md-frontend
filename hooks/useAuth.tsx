/* eslint-disable no-console */
import React, { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { AuthContext, IAuthContext } from '../context/auth';
import { IUser } from '../interfaces/user';
import { storage } from '../services/storage';
import { getOptions } from '../redux/common';
import { signInAction } from '../redux/redusers/user';

export const useAuth = (): IAuthContext | null => useContext(AuthContext);

const useProvideAuth = (): IAuthContext => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [user, setUser] = useState<null | IUser>(null);

  const signIn = (data: { email: string; password: string }) => {
    router.push('/dashboard');
    dispatch(signInAction(data));
  };
  const signUp = (user: IUser) => {
    router.push('/dashboard');
    setUser(user);
  };

  const signOut = () => {
    // send data to server, if need
    setUser(null);
    storage.remove('user');
    router.push('/');
  };

  const sendPasswordResetEmail = (email: string) =>
    console.log('send Password Reset Email', { email });
  const confirmPasswordReset = (code: string, password: string) =>
    console.log('confirm Password Reset', {
      code,
      password,
    });

  useEffect(() => {
    dispatch(getOptions('cities'));
    dispatch(getOptions('bloodGroups'));
    dispatch(getOptions('bloodCenter'));
    dispatch(getOptions('organizations'));
    dispatch(getOptions('transfusionCenter'));
    dispatch(getOptions('userGroup'));
    dispatch(getOptions('userStatus'));
    dispatch(getOptions('sex'));
    const user = storage.get('user')?.data as IUser | null;
    setUser(user);
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
