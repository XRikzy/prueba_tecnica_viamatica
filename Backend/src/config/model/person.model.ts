import { Model, DataTypes } from 'sequelize';
import {sequelize} from '../../infrastructure/database/databaseconfig'; // configuración de Sequelize
import { User } from './user.model';

export class Person extends Model {
  public id!: number;
  public firstName!: string;
  public lastName!: string;
  public identification!: string;
  public bornDate !: Date
  public userId!: number;
}

Person.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    identification: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    bornDate :{
      type: DataTypes.DATE,
      allowNull: false
    }
  },
  {
    sequelize,
    modelName: 'Person',
    tableName: 'persons',
    timestamps: true,
  }
);

User.hasOne(Person, { foreignKey: 'userId' });
Person.belongsTo(User, { foreignKey: 'userId' });