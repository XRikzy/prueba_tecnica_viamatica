import { PersonRepository } from "../../../domain/repositories/person.repository";

export class DeletePersonUseCase {
  private PersonRepository: PersonRepository;

  constructor(PersonRepository: PersonRepository) {
    this.PersonRepository = PersonRepository;
  }

  async execute(id: number): Promise<void> {
    const Person = await this.PersonRepository.findById(id);

    if (!Person) {
      throw new Error('Person not found');
    }

    await this.PersonRepository.delete(id);
  }
}