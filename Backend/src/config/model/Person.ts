import { Model, Column, DataType } from 'sequelize-typescript';

export class Person extends Model {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  idPerson!: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name!: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  lastname!: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  indentification!: string;
  @Column({
    type: DataType.DATE,
    allowNull: true,
  })
  borndate!: string;
}
