import { Model, DataTypes } from 'sequelize';
import {sequelize} from '../../infrastructure/database/databaseconfig';

export class Person extends Model {
  public idPerson!: number;
  public firstName!: string;
  public lastName!: string;
  public identification!: string;
  public bornDate !: Date
  
}

Person.init(
  {
    idPerson: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    identification: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    bornDate :{
      type: DataTypes.DATE,
      allowNull: false
    }
  },
  {
    sequelize,
    modelName: 'Person',
    tableName: 'persons',
    timestamps: true,
  }
);