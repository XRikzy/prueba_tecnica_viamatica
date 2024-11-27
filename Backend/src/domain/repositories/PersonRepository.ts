import { Person } from "../../config/model/Person";


export class PersonRepository {
  async create(PersonData: Partial<Person>) {
    return await Person.create(PersonData);
  }
  async createMany(personsData: Partial<Person>[]) {
    return await Person.bulkCreate(personsData);
  }
  async getAll() {
    return await Person.findAll();
  }
  async getByPersonName(names: string) {
    return await Person.findOne({ where: { names: names } });
  }
  async getById(id: number) {
    return await Person.findByPk(id);
  }

  async update(id: number, PersonData: any) {
    const user = await Person.findByPk(id);
    if (user) {
      return await user.update(PersonData);
    }
    return null;
  }
  async delete(id: number) {
    const user = await Person.findByPk(id);
    if (user) {
      return await user.destroy();
    }
    return null;
  }
}
