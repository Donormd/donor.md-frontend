import { useRouter } from 'next/router';
import React, { FC, useContext, useEffect, useState } from 'react';

import { setUserDate, signInAction, signUpAction } from '../../redux/redusers/user';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { AuthContext, IAuthContext } from '../context/auth';
import { IUser } from '../interfaces/user';
import { storage } from '../services/storage';

export const useAuth = (): IAuthContext | null => useContext(AuthContext);

const useProvideAuth = (): IAuthContext => {
  const { data } = useAppSelector((state) => state.user);
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [user, setUser] = useState<null | IUser>(null);

  const signIn = (data: { email: string; password: string }) => {
    dispatch(signInAction(data));
  };

  const signUp = (user: IUser) => {
    dispatch(signUpAction(user));
  };

  const signOut = () => {
    // send data to server, if need
    setUser(null);
    storage.remove('user');
    router.push('/');
  };

  useEffect(() => {
    data && setUser(data);
    data && storage.set('user', data);
  }, [data]);

  useEffect(() => {
    const user = storage.get('user')?.data as IUser | null;
    user && setUser(user);
    user && dispatch(setUserDate(user));
  }, [dispatch]);

  return {
    user,
    signIn,
    signUp,
    signOut,
  };
};

export const AuthProvider: FC = ({ children }) => {
  const auth: IAuthContext = useProvideAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};
