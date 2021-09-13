import { useMutation, useQuery, UseQueryOptions } from 'react-query';
import { EnsuredQueryKey, MutationFunction, MutationKey, QueryKey } from 'react-query/types/core/types';
import { UseMutationOptions } from 'react-query/types/react/types';

import { ErrorResponse, ErrorResponseArray } from '../core/interfaces/error';

// TYPES

declare type QueryFunction<T = unknown, TQueryKey extends QueryKey = QueryKey> = (
  context: QueryFunctionContext<TQueryKey>,
) => T | Promise<T>;

interface QueryFunctionContext<TQueryKey extends QueryKey = QueryKey, TPageParam = any> {
  queryKey: EnsuredQueryKey<TQueryKey>;
  pageParam?: TPageParam;
}

// typed useQuery

export const useTypedQuery = <A extends QueryKey, B = unknown>(
  key: A,
  queryFn: QueryFunction<B>,
  options?: UseQueryOptions<B, ErrorResponse | ErrorResponseArray>,
) => useQuery<B, ErrorResponse | ErrorResponseArray>(key, queryFn, options);

// typed useMutation

export const useTypedMutation = <A extends MutationKey, B = unknown, C = void, D = unknown>(
  key: A,
  queryFn: MutationFunction<B, C>,
  options?: UseMutationOptions<B, ErrorResponse | ErrorResponseArray, C, D>,
) => useMutation<B, ErrorResponse | ErrorResponseArray, C, D>(key, queryFn, options);

// typed useQueries

// type queriesType<A, B> = { query: A; queryFn: QueryFunction<B> };
//
// export const useTypedQueries = <A extends QueryKey, B = unknown>(queries: queriesType<A, B>) =>
//   useQueries(queries);
