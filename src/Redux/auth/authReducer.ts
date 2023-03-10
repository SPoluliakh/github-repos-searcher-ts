import { createSlice } from '@reduxjs/toolkit';
import { signUp, signIn, logOut, refreshUser } from './authOperations';

interface IInitialState {
  user: { name: null | string; email: null | string };
  token: null | string;
  isLoggedIn: boolean;
  isRefreshing: boolean;
}

const initialState: IInitialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(signUp.pending, (state, _) => state)
      .addCase(signUp.rejected, (state, _) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(signUp.fulfilled, (state, { payload }) => {
        state.user = payload.data.user;
        state.token = payload.data.token;
        state.isLoggedIn = true;
      })

      .addCase(signIn.pending, (state, _) => state)
      .addCase(signIn.rejected, (state, _) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(signIn.fulfilled, (state, { payload }) => {
        state.user = payload.data.user;
        state.token = payload.data.token;
        state.isLoggedIn = true;
      })

      .addCase(logOut.pending, (state, _) => state)
      .addCase(logOut.fulfilled, (state, _) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.pending, (state, _) => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.rejected, (state, _) => {
        state.user = { name: null, email: null };
        state.isLoggedIn = false;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      }),
});
