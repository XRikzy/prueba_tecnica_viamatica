import { Model, DataTypes } from "sequelize";
import { sequelize } from "../database/databaseconfig";
import { Person } from "./Person";

export class Users extends Model {
  public idUser!: number;
  public UserName!: string;
  public Password!: string;
  public Mail!: string;
  public SessionActive!: string;
  public Person_idPerson2!: number;
  public Status!: string;
}

Users.init(
  {
    idUser: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    UserName: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    Password: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    Mail: {
      type: DataTypes.STRING(120),
      allowNull: false,
    },
    SessionActive: {
      type: DataTypes.CHAR(1),
      allowNull: false,
    },
    Person_idPerson2: {
      type: DataTypes.INTEGER,
      references: {
        model: Person,
        key: "idPerson",
      },
    },
    Status: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "Users",
    timestamps: false,
  }
);
