export class UserUtils {
    static generateEmail(name: string, surname1: string, surname2: string): string {
      const firstLetter = name.charAt(0).toLowerCase();
      const firstSurname = surname1.toLowerCase();
      const secondSurnameInitial = surname2.charAt(0).toLowerCase();
      let emailBase = `${firstLetter}${firstSurname}${secondSurnameInitial}@mail.com`;
      let counter = 1;
      let email = emailBase;
      while (this.isEmailDuplicate(email)) {
        email = `${firstLetter}${firstSurname}${secondSurnameInitial}${counter}@mail.com`;
        counter++;
      }
      return email;
    }
    static isEmailDuplicate(email: string): boolean {
      return false; 
    }
    static generateUsername(name: string, surname1: string, surname2: string): string {
      let username = `${name.charAt(0).toLowerCase()}${surname1.toLowerCase()}${surname2.charAt(0).toLowerCase()}`;
      if (!this.isUsernameValid(username)) {
        let randomNumber = Math.floor(Math.random() * 10); 
        username += randomNumber;
      }
  
      return username;
    }
    static isUsernameValid(username: string): boolean {
      const regex = /[a-zA-Z]/;
      return (
        username.length >= 8 &&
        username.length <= 20 &&
        regex.test(username) && 
        /\d/.test(username) && 
        !/[^\w]/.test(username) 
      );
    }
    static generatePassword(): string {
      const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
      let password = "";
      for (let i = 0; i < 8; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
      }
      if (!/[A-Z]/.test(password)) {
        password += "A"; 
      }
      if (!/[!@#$%^&*]/.test(password)) {
        password += "!";
      }
  
      return password;
    }
    static validateIdentification(id: string): boolean {
      const regex = /^\d{10}$/;
      if (!regex.test(id)) {
        return false;
      }
      for (let i = 0; i < id.length - 3; i++) {
        const part = id.substring(i, i + 4);
        if (/(\d)\1{3}/.test(part)) {
          return false;
        }
      }
  
      return true;
    }
  }
  

  