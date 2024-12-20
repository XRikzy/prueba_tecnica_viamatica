import { Person } from "../../../config/model/person.model";
import { PersonRepository } from "../../../domain/repositories/person.repository";
import { ConsecutiveNumbersInIdentificationError, InvalidIdentificationError } from "../../../utils/apperros.utils";
import { validateIdentification } from "../../../utils/validators.utils";
import { CreatePersonDTO } from "../../dto/person.dto";

export class CreatePersonUseCase {
  private personRepository: PersonRepository;

  constructor(userRepository: PersonRepository) {
    this.personRepository = userRepository;
  }

  async execute(data: CreatePersonDTO): Promise<Person> {
    if (!validateIdentification(data.identification)) {
      throw new InvalidIdentificationError();
    }
    if (/(\d)\1{3,}/.test(data.identification)) {
      throw new ConsecutiveNumbersInIdentificationError();
  }
    const newUser = await this.personRepository.create(data);
    return newUser;
  }
}
