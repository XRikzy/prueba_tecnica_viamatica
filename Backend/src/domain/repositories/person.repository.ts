import { Person } from "../../config/model/person.model";

export class PersonRepository {
  async findAll(): Promise<Person[]> {
    return Person.findAll();
  }

  async findById(id: number): Promise<Person | null> {
    return Person.findByPk(id);
  }

  async create(person: Partial<Person>): Promise<Person> {
    return Person.create(person);
  }
  async update(
    id: number,
    person: Partial<Person>
  ): Promise<[number, Person[]]> {
    return Person.update(person, { where: { id }, returning: true });
  }

  async delete(id: number) {
    const user = await Person.findByPk(id);
    if (user) {
      return await user.destroy();
    }
    return null;
  }
}
