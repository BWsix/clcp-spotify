export type Cred = {
  clientId: string;
  clientSecret: string;
};

export type ExtendedCred = Cred & { refreshToken: string };
