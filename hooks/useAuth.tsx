import React, { FC, useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { AuthContext, IAuthContext } from '../context/auth';
import { IUser } from '../interfaces/user';
import { storage } from '../services/storage';
import { setUserDate, signInAction, signUpAction } from '../redux/redusers/user';

export const useAuth = (): IAuthContext | null => useContext(AuthContext);

const useProvideAuth = (): IAuthContext => {
  const router = useRouter();
  const dispatch = useDispatch();
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
    const user = storage.get('user')?.data as IUser | null;
    user && setUser(user);
    user && dispatch(setUserDate(user));
  }, []);

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
