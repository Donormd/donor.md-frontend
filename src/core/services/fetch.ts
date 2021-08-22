import axios, { AxiosPromise, AxiosRequestConfig } from 'axios';

import { backendUrl } from '../constants/url';
import { storage } from './storage';

const api = axios.create({
  baseURL: backendUrl,
});

export const baseFetch = <T>({
  url = '/',
  method = 'get',
  headers = {},
  params = {},
  data = {},
  ...config
}: AxiosRequestConfig): AxiosPromise<T> => {
  if (headers?.authorization) {
    const token = storage.get<string>('token');
    if (token) {
      headers.authorization = `Bearer ${token}`;
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
