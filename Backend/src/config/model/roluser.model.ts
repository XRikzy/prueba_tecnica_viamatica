import { DataTypes, Model } from "sequelize";
import { sequelize } from "../../infrastructure/database/databaseconfig";
import { Rol } from "./rol.model";
import { User } from "./user.model";

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
        model: User,
        key: "idUser",
      },
      primaryKey: true,
    },
  },
  {
    sequelize,
    modelName: "RolUser",
    tableName: "Rol_user",
    timestamps: false,
  }
);

Rol.belongsToMany(User, { through: RolUser });
User.belongsToMany(Rol, { through: RolUser });

export { RolUser };
