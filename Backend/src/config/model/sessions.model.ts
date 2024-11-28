import { DataTypes, Model } from "sequelize";
import { sequelize } from "../../infrastructure/database/databaseconfig";
import { Users } from "./user.model";

class Sessions extends Model {
  public EntryDate!: Date;
  public CloseDate!: Date;
  public user_idUser!: number;
}

Sessions.init(
  {
    EntryDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    CloseDate: {
      type: DataTypes.DATE,
      allowNull: true, // Puede estar vacío si la sesión aún está activa
    },
    user_idUser: {
      type: DataTypes.INTEGER,
      references: {
        model: Users,
        key: "idUser",
      },
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Sessions",
    tableName: "Sessions",
    timestamps: false, // Si no necesitas timestamps en esta tabla
  }
);

// Relación con Users
Users.hasMany(Sessions, { foreignKey: "user_idUser" });
Sessions.belongsTo(Users, { foreignKey: "user_idUser" });

export { Sessions };
