export default class User {
  private nombre: string;
  private lastName: string;
  private email: string;
  private password?: string;

  constructor() {}

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
}
