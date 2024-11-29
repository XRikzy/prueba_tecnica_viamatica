import { Model, DataTypes } from "sequelize";
import { sequelize } from "../../infrastructure/database/databaseconfig";
import { Person } from "./person.model";

export class User extends Model {
  public idUser!: number;
  public username!: string;
  public password!: string;
  public mail!: string;
  public sessionActive!: string;
  public idPerson2!: number;
  public status!: 'active' | 'blocked';
}

User.init(
  {
    idUser: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    mail: {
      type: DataTypes.STRING(120),
      allowNull: false,
    },
    SessionActive: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: 'Y',
    },
    idPerson2: {
      type: DataTypes.INTEGER,
      references: {
        model: Person,
        key: "idPerson",
      },
    },
    status: {
      type: DataTypes.ENUM('active', 'blocked'),
      defaultValue: 'active',
    },
  },
  {
    sequelize,
    modelName: 'User',
    tableName: 'users',
    timestamps: true,
  }
);
