import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IRepos, IRepo } from './repos.interface';
import { RootState } from '../store';

export const reposApi = createApi({
  reducerPath: 'repos/api',
  baseQuery: fetchBaseQuery({
    // baseUrl: 'https://github-repo-searcher-nodejs.onrender.com/api',
    baseUrl: 'http://localhost:3001/api',
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token;
      // const token: string | null = (getState() as RootState).auth.token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      } else {
        headers.delete('authorization');
      }
      return headers;
    },
  }),
  tagTypes: ['repos'],
  endpoints: builder => ({
    getAllRepos: builder.query<IRepo[], string>({
      query: () => `/library`,
      transformResponse: (response: IRepos) => response.data.result,
      providesTags: ['repos'],
    }),
    addRepo: builder.mutation({
      query: repo => ({
        method: 'post',
        url: '/library',
        body: repo,
      }),

      invalidatesTags: ['repos'],
    }),
    removeRepo: builder.mutation({
      query: id => ({
        method: 'delete',
        url: `/library/${id}`,
      }),
      invalidatesTags: ['repos'],
    }),
    updateRepoComents: builder.mutation({
      query: ({ data, id }) => ({
        method: 'PATCH',
        url: `/library/${id}/coments`,
        body: {
          coments: data,
        },
      }),
      invalidatesTags: ['repos'],
    }),
  }),
});

export const {
  useGetAllReposQuery,
  useAddRepoMutation,
  useRemoveRepoMutation,
  useUpdateRepoComentsMutation,
} = reposApi;
