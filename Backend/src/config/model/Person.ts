// models/Person.ts
import { Model, DataTypes } from "sequelize";
import { sequelize } from "../database/databaseconfig";
export class Person extends Model {
  public idPerson!: number;
  public names!: string;
  public lastnames!: string;
  public Identification!: string;
  public borndate!: Date;
}

Person.init(
  {
    idPerson: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    names: {
      type: DataTypes.STRING(60),
      allowNull: false,
    },
    lastnames: {
      type: DataTypes.STRING(60),
      allowNull: false,
    },
    Identification: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    borndate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Person",
    tableName: "Person",
    timestamps: false,
  }
);
