import { Model, DataTypes } from "sequelize";
import { sequelize } from "../database/databaseconfig";

export class Person extends Model {
  public idPerson!: number;
  public firstName!: string;
  public lastName!: string;
}

Person.init(
  {
    idPerson: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    firstName: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "Person",
    timestamps: false,
  }
);
