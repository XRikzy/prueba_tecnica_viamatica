import { DataTypes, Model } from "sequelize";
import { sequelize } from "../../infrastructure/database/databaseconfig";
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
    timestamps: false,
  }
);

export { RolOption };
