import axios, { AxiosPromise, AxiosRequestConfig } from 'axios';

import { backendUrl } from '../constants/url';
import { storage } from './storage';

const api = axios.create({
  baseURL: backendUrl,
});

export const baseFetch = <T>({
  url = '/',
  method = 'GET',
  headers = {},
  params = {},
  data = {},
  ...config
}: AxiosRequestConfig): AxiosPromise<T> => {
  if (headers?.authorization) {
    const token = storage.get<string>('token');
    if (token) {
      headers.authorization = `Bearer ${token}`;
    } else {
      headers.authorization = undefined;
    }
  }
  return api({
    url,
    method,
    headers,
    params,
    data,
    ...config,
  });
};
