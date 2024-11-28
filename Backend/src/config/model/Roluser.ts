import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/databaseconfig";
import { Rol } from "./Rol";
import { Users } from "./Users";

class RolUser extends Model {
  public Rol_idRol!: number;
  public user_idUser!: number;
}

RolUser.init(
  {
    Rol_idRol: {
      type: DataTypes.INTEGER,
      references: {
        model: Rol,
        key: "idRol",
      },
      primaryKey: true,
    },
    user_idUser: {
      type: DataTypes.INTEGER,
      references: {
        model: Users,
        key: "idUser",
      },
      primaryKey: true,
    },
  },
  {
    sequelize,
    modelName: "RolUser",
    tableName: "Rol_user",
    timestamps: false, // Si no necesitas timestamps en esta tabla
  }
);

// Relaciones
Rol.belongsToMany(Users, { through: RolUser });
Users.belongsToMany(Rol, { through: RolUser });

export { RolUser };
