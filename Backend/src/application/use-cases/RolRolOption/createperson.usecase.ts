import { Person } from "../../../config/model/person.model";
import { PersonRepository } from "../../../domain/repositories/person.repository";
import { CreatePersonDTO } from "../../dto/person.dto";


export class CreatePersonUseCase {
  private personRepository: PersonRepository;

  constructor(userRepository: PersonRepository) {
    this.personRepository = userRepository;
  }

  async execute(data: CreatePersonDTO): Promise<Person> {
    const newUser = await this.personRepository.create(data);
    return newUser;
  }
}