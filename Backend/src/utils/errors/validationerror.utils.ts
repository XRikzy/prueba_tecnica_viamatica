export class ValidationError extends Error {
    public code: string;
  
    constructor(message: string, code: string = 'INVALID_INPUT') {
      super(message);
      this.name = 'ValidationError';
      this.code = code;
      Object.setPrototypeOf(this, new.target.prototype); // Ajusta el prototipo para que sea compatible con clases extendidas.
    }
  }
  