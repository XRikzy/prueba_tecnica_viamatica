export class UserUtils {
  static generateMail(names: string, lastnames: string): string {
    const [firstLastname, secondLastnameInitial] = lastnames
      .split(" ")
      .map((part) => part.trim());

    if (!firstLastname || !secondLastnameInitial) {
      throw new Error(
        "Al menos debe contener dos apellidos separados por un espacio."
      );
    }

    const mail = `${names[0].toLowerCase()}${firstLastname.toLowerCase()}${secondLastnameInitial[0].toLowerCase()}@mail.com`;

    return mail;
  }
  static isEmailDuplicate(email: string): boolean {
    return false;
  }
  static generateUsername(
    name: string,
    lastnames: string
  ): string {
    let username = `${name
      .charAt(0)
      .toLowerCase()}${lastnames.toLowerCase()}`;
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
  static validatePassword(): string {
    let password = "";
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
