import { AppError } from "./errors/AppErrors.utils";

export class UserAlreadySession extends AppError {
  constructor(message: string = "El usuario ya tiene una sesión activa.") {
    super(message, 409);
  }
}

export class UserNotFound extends AppError {
  constructor(message: string = "Usuario no encontrado.") {
    super(message, 404);
  }
}

export class PasswordValid extends AppError {
  constructor(message: string = "Contraseña incorrecta.") {
    super(message, 401);
  }
}

export class UserNoActiveSession extends AppError {
  constructor(message: string = "El usuario no tiene una sesión activa.") {
    super(message, 400);
  }
}
export class InvalidIdentificationError extends AppError {
  constructor(message: string = "La identificación no es válida") {
    super(message, 402);
  }
}

// Error en el correo (duplicado)
export class EmailAlreadyExistsError extends AppError {
  constructor(message: string = "El correo electrónico ya está en uso") {
    super(message, 402);
  }
}

// Error en el nombre de usuario (duplicado o invalidez)
export class UsernameAlreadyExistsError extends AppError {
  constructor(message: string = "El nombre de usuario ya está en uso") {
    super(message, 402);
  }
}

// Error en la contraseña (no cumple con los requisitos)
export class InvalidPasswordError extends AppError {
  constructor(message: string = "La contraseña no cumple con los requisitos") {
    super(message, 401);
  }
}

// Error de longitud de nombre de usuario
export class InvalidUsernameLengthError extends AppError {
  constructor(
    message: string = "El nombre de usuario debe tener entre 8 y 20 caracteres"
  ) {
    super(message, 401);
  }
}

// Error de caracteres no permitidos en el nombre de usuario
export class InvalidUsernameCharactersError extends AppError {
  constructor(
    message: string = "El nombre de usuario no debe contener signos o caracteres especiales"
  ) {
    super(message, 401);
  }
}

// Error de caracteres consecutivos en la identificación
export class ConsecutiveNumbersInIdentificationError extends AppError {
  constructor(
    message: string = "La identificación contiene números consecutivos repetidos"
  ) {
    super(message, 409);
  }
}
export class UserBlocked extends AppError {
  constructor(
    message: string = "Este usuario esta bloqueado por sobrepasar el numero de intentos"
  ) {
    super(message, 401);
  }
}
export class UserWithOutRols extends AppError {
  constructor(message: string = "Este usuario no tiene roles asignados") {
    super(message, 405);
  }
}
export class UserAlreadyExistsError extends AppError {
  constructor(
    message: string = "Ya existe un usuario asociado con esta persona."
  ) {
    super(message, 403);
  }
}

export class InvalidPasswordAdding extends AppError {
  constructor(message: string = "La contraseña es incorrecta") {
    super(message, 401);
  }
}
