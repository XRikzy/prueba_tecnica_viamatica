import { DataTypes, Model } from "sequelize";
import { sequelize } from "../../infrastructure/database/databaseconfig";
import { Rol } from "./rol.model";
import { User } from "./user.model";

class RolUser extends Model {
  public id!: number;
  public user_idUser!: number;
  public rol_id!: number;
}

RolUser.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_idUser: {
      type: DataTypes.INTEGER,
      references: {
        model: User,
        key: "idUser",
      },
      primaryKey: true,
    },
    rol_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "RolUser",
    tableName: "Rol_user",
    timestamps: false,
  }
);

export { RolUser };
