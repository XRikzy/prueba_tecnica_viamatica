import { Person } from "../../config/model/Person";
import { PersonRepository } from "../repositories/PersonRepository";

export class PersonServices {
  private personRepository: PersonRepository;

  constructor(personRepository: PersonRepository) {
    this.personRepository = personRepository;
  }
  async createPerson(PersonData: Partial<Person>) {
    return await this.personRepository.create(PersonData);
  }
  async createManyPerson(PersonData: Partial<Person>[]) {
    return await this.personRepository.createMany(PersonData);
  }
  async getAllPerson() {
    return await this.personRepository.getAll();
  }
  async getPersonByPersonName(PersonName: string) {
    return await this.personRepository.getByPersonName(PersonName);
  }
  async getPersonById(id: number) {
    return await this.personRepository.getById(id);
  }
  async updatePerson(id: number, userData: any) {
    return await this.personRepository.update(id, userData);
  }
  async deletePerson(id: number) {
    return await this.personRepository.delete(id);
  }
}
