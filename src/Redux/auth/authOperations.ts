import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import axios from 'axios';
import { IUserAccount, ICurrentUser } from '../../interfaces/interfaces.git';
import { RootState } from '../store';

interface IAccount {
  name?: string;
  password: string;
  email: string;
}

// axios.defaults.baseURL = 'https://github-repo-searcher-nodejs.onrender.com/api';
axios.defaults.baseURL = 'http://localhost:3001/api';

const setAuthHeader = (token: String): void => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};
const clearAuthHeader = (): void => {
  axios.defaults.headers.common.Authorization = '';
};

export const signUp = createAsyncThunk(
  'auth/signUp',
  async (credentials: IAccount, thunkAPI) => {
    try {
      const { data } = await axios.post<IUserAccount>(
        '/auth/register',
        credentials
      );
      setAuthHeader(data.data.token);
      return data.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const signIn = createAsyncThunk(
  'auth/signIn',
  async (credentials: IAccount, thunkAPI) => {
    try {
      const { data } = await axios.post<IUserAccount>(
        '/auth/login',
        credentials
      );
      setAuthHeader(data.data.token);
      return data.data;
    } catch (error: any) {
      toast.error('Name or email error');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk('auth/logOut', async (_, thunkAPI) => {
  try {
    await axios.post('/auth/logout');
    clearAuthHeader();
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    // Reading the token from the state via getState()
    const state: RootState = thunkAPI.getState();

    const persistedToken: string | null = state.auth.token;
    if (!persistedToken) {
      // If there is no token, exit without performing any request
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      // If there is a token, add it to the HTTP header and perform the request
      setAuthHeader(persistedToken);
      const { data } = await axios.get<ICurrentUser>('/users/current');

      return data.data.user;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
