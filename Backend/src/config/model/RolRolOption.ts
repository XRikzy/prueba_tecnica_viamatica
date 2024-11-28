import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/databaseconfig";
import { Rol } from "./Rol";
import { RolOption } from "./RolOption";

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
    timestamps: false, // Si no necesitas timestamps en esta tabla
  }
);

// Relaciones
Rol.belongsToMany(RolOption, { through: RolRolOption });
RolOption.belongsToMany(Rol, { through: RolRolOption });

export { RolRolOption };
