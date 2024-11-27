class UserUtils {
    // Generar correo electrónico
    static generateEmail(name: string, surname1: string, surname2: string): string {
      // Tomar la primera letra del nombre
      const firstLetter = name.charAt(0).toLowerCase();
      // Tomar el primer apellido completo
      const firstSurname = surname1.toLowerCase();
      // Tomar la primera letra del segundo apellido
      const secondSurnameInitial = surname2.charAt(0).toLowerCase();
      // Crear el correo base
      let emailBase = `${firstLetter}${firstSurname}${secondSurnameInitial}@mail.com`;
      // Verificar si el correo ya existe (agregar un número si es necesario)
      let counter = 1;
      let email = emailBase;
      while (this.isEmailDuplicate(email)) {
        email = `${firstLetter}${firstSurname}${secondSurnameInitial}${counter}@mail.com`;
        counter++;
      }
  
      return email;
    }
  
    // Simulación de validación de correo duplicado (deberías conectarlo con tu base de datos)
    static isEmailDuplicate(email: string): boolean {
      // En un escenario real, aquí verificarías si el correo ya está registrado en tu base de datos.
      // Por ahora, simula que siempre está vacío, es decir, no hay duplicados.
      return false; // Cambiar esta función según la implementación de base de datos
    }
  
    // Generar nombre de usuario
    static generateUsername(name: string, surname1: string, surname2: string): string {
      let username = `${name.charAt(0).toLowerCase()}${surname1.toLowerCase()}${surname2.charAt(0).toLowerCase()}`;
  
      // Añadir un número aleatorio al final si no cumple con los requisitos
      if (!this.isUsernameValid(username)) {
        let randomNumber = Math.floor(Math.random() * 10); // Número aleatorio de 0 a 9
        username += randomNumber;
      }
  
      return username;
    }
  
    // Validar nombre de usuario según las reglas
    static isUsernameValid(username: string): boolean {
      const regex = /[a-zA-Z]/;
      return (
        username.length >= 8 &&
        username.length <= 20 &&
        regex.test(username) && // Debe contener al menos una letra
        /\d/.test(username) && // Debe contener al menos un número
        !/[^\w]/.test(username) // No debe contener signos
      );
    }
  
    // Generar una contraseña válida
    static generatePassword(): string {
      // Por ejemplo, puedes generar una contraseña aleatoria
      const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
      let password = "";
      for (let i = 0; i < 8; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
      }
  
      // Asegurarse de que tenga al menos una mayúscula y un signo
      if (!/[A-Z]/.test(password)) {
        password += "A"; // Añadir una mayúscula
      }
      if (!/[!@#$%^&*]/.test(password)) {
        password += "!"; // Añadir un signo
      }
  
      return password;
    }
  
    // Validar identificación
    static validateIdentification(id: string): boolean {
      // Verificar si tiene 10 dígitos y solo números
      const regex = /^\d{10}$/;
      if (!regex.test(id)) {
        return false;
      }
  
      // Verificar que no tenga 4 dígitos seguidos
      for (let i = 0; i < id.length - 3; i++) {
        const part = id.substring(i, i + 4);
        if (/(\d)\1{3}/.test(part)) {
          return false;
        }
      }
  
      return true;
    }
  }
  
  // Ejemplo de uso
  const names = "Juan Alberto";
  const surname1 = "Piguave";
  const surname2 = "Loor";
  const id = "1203574901"; // Ejemplo de identificación
  
  // Generar correo
  const email = UserUtils.generateEmail(names, surname1, surname2);
  console.log("Correo:", email);
  
  // Generar nombre de usuario
  const username = UserUtils.generateUsername(names, surname1, surname2);
  console.log("Nombre de usuario:", username);
  
  // Generar contraseña
  const password = UserUtils.generatePassword();
  console.log("Contraseña:", password);
  
  // Validar identificación
  const isValidId = UserUtils.validateIdentification(id);
  console.log("ID válido:", isValidId);
  