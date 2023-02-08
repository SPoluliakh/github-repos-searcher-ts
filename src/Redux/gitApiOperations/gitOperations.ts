import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { IGitAccounts, IUsers } from '../../interfaces/interfaces.git';

export const gitApi = createApi({
  reducerPath: 'github/api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.github.com/' }),
  tagTypes: ['gitApi'],
  endpoints: builder => ({
    seachAccount: builder.query<IGitAccounts[], string>({
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
    getUserRepos: builder.query({
      query: query => `users/${query}/repos`,
      providesTags: ['gitApi'],
    }),
  }),
});

export const { useSeachAccountQuery, useLazyGetUserReposQuery } = gitApi;
