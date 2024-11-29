import { User } from "../../../config/model/user.model";
import { PersonRepository } from "../../../domain/repositories/person.repository";
import { EmailAlreadyExistsError, InvalidPasswordError, InvalidUsernameCharactersError, UserAlreadyExistsError, UsernameAlreadyExistsError } from "../../../utils/apperros.utils";
import {
  generateEmail,
  validatePassword,
} from "../../../utils/validators.utils";
import { CreateUserDTO } from "../../dto/user.dto";

export class GenerateUserUseCase {
  private personRepository = new PersonRepository();

  public async execute(data: CreateUserDTO) {
    const person = await this.personRepository.findById(data.idPerson2);

    if (!person) {
      throw new Error("La persona asociada no existe.");
    }
    
    const existingUserByUsername = await User.findOne({ where: { username: data.username } });
    if (existingUserByUsername) {
      throw new UsernameAlreadyExistsError("El nombre de usuario ya existe.");
    }
    const existingUser = await User.findOne({
      where: { idPerson2: data.idPerson2 },
    });

    if (existingUser) {
      throw new UserAlreadyExistsError('Ya existe un usuario asociado con esta persona.');
    }
    let email = generateEmail(person.firstName, person.lastName);
    let userWithEmail  = await User.findOne({ where: { mail: email } });
    let count = 1;

    const maxAttempts = 2;
    while (userWithEmail  && count <= maxAttempts) {
      email = generateEmail(person.firstName, person.lastName, count);
      userWithEmail  = await User.findOne({ where: { mail: email } });
      count++;
    }
    if (userWithEmail ) {
      throw new EmailAlreadyExistsError("No se pudo generar un correo único.");
    }

    if (!/^[A-Za-z0-9]+$/.test(data.username)) {
      throw new InvalidUsernameCharactersError("Nombre de usuario invalido, prueba cambiarlo");
    }

    if (!validatePassword(data.password)) {
      throw new InvalidPasswordError("Contraseña invalida, recuerda agregar 1 signo, 1 mayuscula y 1 numero");
    }

    const user = await User.create({
      username: data.username,
      password: data.password,
      mail: email,
      sessionActive: "Y",
      idPerson2: person.idPerson,
      status: "active",
    });
    return user;
  }
}
