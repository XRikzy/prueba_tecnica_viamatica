import { Person } from "../../../config/model/person.model";
import { PersonRepository } from "../../../domain/repositories/person.repository";
import { UpdatePersonDTO } from "../../dto/person.dto";

export class UpdatePersonUseCase {
  private PersonRepository: PersonRepository;

  constructor(PersonRepository: PersonRepository) {
    this.PersonRepository = PersonRepository;
  }

  async execute(id: number, data: UpdatePersonDTO): Promise<Person> {
    const Person = await this.PersonRepository.findById(id);

    if (!Person) {
      throw new Error("Person not found");
    }
    await this.PersonRepository.update(id, data);
    const updatedPerson = await this.PersonRepository.findById(id);
    if (!updatedPerson) {
      throw new Error("Error retrieving updated Person");
    }

    return updatedPerson;
  }
}
