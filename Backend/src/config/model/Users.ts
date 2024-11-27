import { Model, Column, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Person } from './Person';
export class Users extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  UserName!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  Password!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  Mail!: string;

  @Column({
    type: DataType.CHAR(1),
    allowNull: false,
  })
  SessionActive!: string;

  @ForeignKey(() => Person)
  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  Person_idPerson2!: number;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  Status!: string;

  @BelongsTo(() => Person)
  person!: Person;
}
