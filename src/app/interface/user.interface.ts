export interface Users {
  users: {
    id: number;
    nombre: string;
    lastName: string;
    email: string;
    registerDate: string;
  }[];
}

export interface UserData {
  id: number;
  nombre: string;
  lastName: string;
  email: string;
  registerDate: string;
};


export interface UserResponse {
  add: {
    status: boolean;
    message: string;
    elementSelect?: string;
    user: {
      id: number;
      lastName: string;
      nombre: string;
      email: string;
      registerDate: string;
    }
  }
}