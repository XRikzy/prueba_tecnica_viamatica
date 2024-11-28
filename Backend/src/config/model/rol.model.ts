import { DataTypes, Model } from "sequelize";
import { sequelize } from "../../infrastructure/database/databaseconfig";

class Rol extends Model {
  public idRol!: number;
  public rolName!: string;
}

Rol.init(
  {
    idRol: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    rolName: {
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
