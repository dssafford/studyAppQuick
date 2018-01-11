export class User {
  id: number;
  username: string;
  password: string;
  firstName: string;
  lastName: string;

  constructor(Id: number, username: string, password: string, firstName: string, lastName: string) {

    this.id = Id;
    this.username = username;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
  }

  public static createBlank(): User {
    return new User(-1, '', '', '', '');
  }
}
