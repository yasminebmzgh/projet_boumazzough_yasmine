
export class User {
    public lastName: string;
    public firstName: string;
    public email: string;
    public phone: string;
    public address: string;
    public gender: string;
    public password: string;
    public login: string;

    constructor(lastName: string, firstName: string,email: string,  phone: string,  adress: string,gender: string, password: string, login: string) {
      this.lastName = lastName;
      this.firstName = firstName;
      this.email = email;
      this.phone = phone; 
      this.address = adress;
      this.gender = gender;
      this.password = password; 
      this.login = login; 
    }
  }