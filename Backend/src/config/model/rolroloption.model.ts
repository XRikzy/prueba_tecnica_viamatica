import { DataTypes, Model } from "sequelize";
import { sequelize } from "../../infrastructure/database/databaseconfig";
import { Rol } from "./rol.model";
import { RolOption } from "./roloptions.model";

class RolRolOption extends Model {
  public Rol_idRol!: number;
  public RolOption_idOption!: number;
}

RolRolOption.init(
  {
    Rol_idRol: {
      type: DataTypes.INTEGER,
      references: {
        model: Rol,
        key: "idRol",
      },
      primaryKey: true,
    },
    RolOption_idOption: {
      type: DataTypes.INTEGER,
      references: {
        model: RolOption,
        key: "idOption",
      },
      primaryKey: true,
    },
  },
  {
    sequelize,
    modelName: "RolRolOption",
    tableName: "Rol_rolOption",
    timestamps: false,
  }
);

export { RolRolOption };
