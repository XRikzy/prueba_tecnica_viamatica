import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/databaseconfig"; // Asegúrate de tener la conexión de Sequelize

class RolOption extends Model {
  public idOption!: number;
  public NameOption!: string;
}

RolOption.init(
  {
    idOption: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    NameOption: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "RolOption",
    tableName: "RolOption",
    timestamps: false, // Si no necesitas timestamps en esta tabla
  }
);

export { RolOption };
