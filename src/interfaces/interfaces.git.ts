export interface IGitAccounts {
  avatar_url: string;
  events_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  gravatar_id: string;
  html_url: string;
  id: number;
  login: string;
  node_id: string;
  organizations_url: string;
  received_events_url: string;
  repos_url: string;
  score: number;
  site_admin: false;
  starred_url: string;
  subscriptions_url: string;
  type: string;
  url: string;
}

export interface IUsers {
  total_count: number;
  incomplete_results: boolean;
  items: IGitAccounts[];
}

export interface IUserAccount {
  data: {
    user: { email: string; name: string; avatarURL?: string };
    token: string;
    response: string;
    status: number | string;
  };
}

export interface ICurrentUser {
  data: {
    user: { email: string; name: string; avatarURL?: string };
    status: string;
    code: number;
  };
}
