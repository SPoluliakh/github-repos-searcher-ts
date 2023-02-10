import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IGitAcounts, IUsers, IRepo } from './git.interfaces';

export const gitApi = createApi({
  reducerPath: 'github/api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.github.com/' }),
  tagTypes: ['gitApi'],
  endpoints: builder => ({
    seachAccount: builder.query<IGitAcounts[], string>({
      query: query => ({
        url: 'search/users',
        params: {
          q: `${query}`,
          per_page: 20,
        },
      }),
      transformResponse: (response: IUsers) => response.items,
      providesTags: ['gitApi'],
    }),
    getUserRepos: builder.query<IRepo[], string>({
      query: query => `users/${query}/repos`,
      providesTags: ['gitApi'],
    }),
  }),
});

export const { useSeachAccountQuery, useLazyGetUserReposQuery } = gitApi;
