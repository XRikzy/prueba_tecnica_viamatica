import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/databaseconfig";

class Rol extends Model {
  public idRol!: number;
  public RolName!: string;
}

Rol.init(
  {
    idRol: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    RolName: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Rol",
    tableName: "Rol",
    timestamps: false,
  }
);

export { Rol };
