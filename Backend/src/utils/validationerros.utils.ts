import { ValidationError } from "./errors/validationerror.utils";


  
export class InvalidIdentificationError extends ValidationError {
    constructor(message: string = 'La identificación no es válida') {
      super(message, 'INVALID_IDENTIFICATION');
    }
  }
  
  // Error en el correo (duplicado)
  export class EmailAlreadyExistsError extends ValidationError {
    constructor(message: string = 'El correo electrónico ya está en uso') {
      super(message, 'EMAIL_ALREADY_EXISTS');
    }
  }
  
  // Error en el nombre de usuario (duplicado o invalidez)
  export class UsernameAlreadyExistsError extends ValidationError {
    constructor(message: string = 'El nombre de usuario ya está en uso') {
      super(message, 'USERNAME_ALREADY_EXISTS');
    }
  }
  
  // Error en la contraseña (no cumple con los requisitos)
  export class InvalidPasswordError extends ValidationError {
    constructor(message: string = 'La contraseña no cumple con los requisitos') {
      super(message, 'INVALID_PASSWORD');
    }
  }
  
  // Error de longitud de nombre de usuario
  export class InvalidUsernameLengthError extends ValidationError {
    constructor(message: string = 'El nombre de usuario debe tener entre 8 y 20 caracteres') {
      super(message, 'INVALID_USERNAME_LENGTH');
    }
  }
  
  // Error de caracteres no permitidos en el nombre de usuario
  export class InvalidUsernameCharactersError extends ValidationError {
    constructor(message: string = 'El nombre de usuario no debe contener signos o caracteres especiales') {
      super(message, 'INVALID_USERNAME_CHARACTERS');
    }
  }
  
  // Error de caracteres consecutivos en la identificación
  export class ConsecutiveNumbersInIdentificationError extends ValidationError {
    constructor(message: string = 'La identificación contiene números consecutivos repetidos') {
      super(message, 'CONSECUTIVE_NUMBERS_IN_IDENTIFICATION');
    }
  }
  