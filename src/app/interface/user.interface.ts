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
