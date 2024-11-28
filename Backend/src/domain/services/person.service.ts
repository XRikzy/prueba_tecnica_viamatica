import { CreatePersonDTO, UpdatePersonDTO } from "../../application/dto/person.dto";
import { CreatePersonUseCase, DeletePersonUseCase, GetPersonUseCase, UpdatePersonUseCase } from "../../application/use-cases/Person";
import { PersonRepository } from "../repositories/person.repository";


export class PersonService {
  private PersonRepository = new PersonRepository();

  private createPersonUseCase = new CreatePersonUseCase(this.PersonRepository);
  private getPersonUseCase = new GetPersonUseCase(this.PersonRepository);
  private updatePersonUseCase = new UpdatePersonUseCase(this.PersonRepository);
  private deletePersonUseCase = new DeletePersonUseCase(this.PersonRepository);

  async createPerson(data: CreatePersonDTO) {
    return this.createPersonUseCase.execute(data);
  }

  async getPerson(id: number) {
    return this.getPersonUseCase.execute(id);
  }

  async getAllPersons() {
    return this.getPersonUseCase.getAll();
  }

  async updatePerson(id: number, data: UpdatePersonDTO) {
    return this.updatePersonUseCase.execute(id, data);
  }

  async deletePerson(id: number) {
    return this.deletePersonUseCase.execute(id);
  }
}

