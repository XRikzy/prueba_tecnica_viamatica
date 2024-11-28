import { Person } from "../../../config/model/person.model";
import { PersonRepository } from "../../../domain/repositories/person.repository";


export class GetPersonUseCase {
  private PersonRepository: PersonRepository;

  constructor(PersonRepository: PersonRepository) {
    this.PersonRepository = PersonRepository;
  }

  async execute(id: number): Promise<Person | null> {
    return this.PersonRepository.findById(id);
  }

  async getAll(): Promise<Person[]> {
    return this.PersonRepository.findAll();
  }
}
