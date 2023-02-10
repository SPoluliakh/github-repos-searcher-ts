export interface ICredentials {
  name?: string;
  password: string;
  email: string;
}

export interface IUserAcount {
  data: {
    user: { email: string; name: string };
    token: string;
  };
  code: number;
  status: number | string;
}

export interface ICurrentUser {
  data: {
    user: { email: string; name: string };
  };
  status: string;
  code: number;
}
