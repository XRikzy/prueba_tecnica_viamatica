import { DataTypes, Model } from "sequelize";
import { sequelize } from "../../infrastructure/database/databaseconfig";
import { User } from "./user.model";

class Sessions extends Model {
  public id!: number;
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
      allowNull: true,
    },
    user_idUser: {
      type: DataTypes.INTEGER,
      references: {
        model: User,
        key: "idUser",
      },
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Sessions",
    tableName: "Sessions",
    timestamps: false,
  }
);

User.hasMany(Sessions, { foreignKey: "user_idUser" });
Sessions.belongsTo(User, { foreignKey: "user_idUser" });

export { Sessions };
