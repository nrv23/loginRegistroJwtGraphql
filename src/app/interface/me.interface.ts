export interface MeResult {

    me: {
        status: boolean;
        message: string;
        elementSelect: string;
        user?: {
          id: string | number;
          nombre: string;
          lastName: string;
          email: string;
          registerDate: string | Date;
        }
      }
}

export interface MeData {

    id: string | number;
    nombre: string;
    lastName: string;
    email: string;
    registerDate: string | Date;
}