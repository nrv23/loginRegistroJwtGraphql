export default class User {

  public id?: number;
  public nombre: string;
  public lastName: string;
  public email: string;
  public password?: string;
  public confirm_password?: string;

  /*
  constructor() {}

  public setId(id: number) {
    this.id= id;
  }

  public setNombre(nombre: string) {
    this.nombre = nombre;
  }

  public setApellidos(apellidos: string) {
    this.lastName = apellidos;
  }

  public setEmail(email: string) {
    this.email = email;
  }

  public setPassword(pass: string) {
    this.password = pass;
  }

  public get getNombre(): string {
    return this.nombre;
  }

  public get getApellidos() {
    return this.lastName;
  }

  public get getEmail() {
    return this.email;
  }

  public get getPassword(): string {
    return this.password;
  }

  public get getId(): number {

    return this.id;
  }
  */
}
