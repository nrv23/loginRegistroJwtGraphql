export interface LoginResult {
    login: {
      status: boolean;
      message: string;
      token?: string; //campo opcional
    }
};

export interface LoginData {
  email: string;
  password: string;
};
