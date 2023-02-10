import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import axios from 'axios';
import { RootState } from '../store';
import { selectToken } from './authSelectors';
import { ICredentials, IUserAcount, ICurrentUser } from './auth.interface';
import { AsyncThunkConfig } from '../root.interface';

axios.defaults.baseURL = 'https://github-repo-searcher-nodejs.onrender.com/api';
// axios.defaults.baseURL = 'http://localhost:3001/api';

const setAuthHeader = (token: String): void => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};
const clearAuthHeader = (): void => {
  axios.defaults.headers.common.Authorization = '';
};

export const signUp = createAsyncThunk<
  IUserAcount,
  ICredentials,
  AsyncThunkConfig
>('auth/signUp', async (credentials, thunkAPI) => {
  try {
    const { data } = await axios.post('/auth/register', credentials);
    setAuthHeader(data.data.token);
    return data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const signIn = createAsyncThunk<
  IUserAcount,
  ICredentials,
  AsyncThunkConfig
>('auth/signIn', async (credentials, thunkAPI) => {
  try {
    const { data } = await axios.post('/auth/login', credentials);
    setAuthHeader(data.data.token);
    return data;
  } catch (error: any) {
    toast.error('Name or email error');
    return thunkAPI.rejectWithValue(error.message);
  }
});

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
    const token = selectToken(thunkAPI.getState() as RootState);
    if (!token) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }
    try {
      setAuthHeader(token);
      const { data } = await axios.get<ICurrentUser>('/users/current');
      return data.data.user;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
