import { User } from "../../../config/model/user.model";
import { PersonRepository } from "../../../domain/repositories/person.repository";
import {
  EmailAlreadyExistsError,
  InvalidPasswordError,
  InvalidUsernameCharactersError,
  UsernameAlreadyExistsError,
} from "../../../utils/validationerros.utils";
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
    let email = generateEmail(person.firstName, person.lastName);
    let existingUser = await User.findOne({ where: { mail: email } });
    let count = 1;

    const maxAttempts = 10;
    while (existingUser && count <= maxAttempts) {
      email = generateEmail(person.firstName, person.lastName, count);
      existingUser = await User.findOne({ where: { mail: email } });
      count++;
    }
    if (existingUser) {
      throw new EmailAlreadyExistsError("No se pudo generar un correo único.");
    }

    if (!/^[A-Za-z0-9]+$/.test(data.username)) {
      throw new InvalidUsernameCharactersError();
    }
    if (await User.findOne({ where: { username: data.username } })) {
      throw new UsernameAlreadyExistsError();
    }

    if (!validatePassword(data.password)) {
      throw new InvalidPasswordError();
    }

    const user = await User.create({
      username: data.username,
      password: data.password,
      mail: email,
      sessionActive: "Y",
      idPerson2: person.idPerson,
      status: "active",
    });

    console.log('Usuario creado:', user);

    return user;
  }
}
