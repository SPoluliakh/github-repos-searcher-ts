interface IOwner {
  _id: string;
  name: string;
  email: string;
}

export interface IRepo {
  coments: string;
  description: string;
  favorite: boolean;
  forks: number;
  full_name: string;
  html_url: string;
  owner: IOwner;
  updated_at: string;
  watchers: number;
  _id: string;
}

export interface IRepos {
  data: { result: IRepo[] };
  code: number;
  status: string;
}
