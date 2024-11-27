import { Dialect, Sequelize } from "sequelize";

class DatabaseConnection {
  private sequelize: Sequelize;

  constructor(
    private database: string,
    private username: string,
    private password: string,
    private host: string,
    private dialect: Dialect
  ) {
    this.sequelize = new Sequelize(this.database, this.username, this.password, {
      host: this.host,
      dialect: this.dialect,
    });
  }
  public async authenticate(): Promise<void> {
    try {
      await this.sequelize.authenticate();
      console.log("Connection has been established successfully.");
    } catch (error) {
      console.error("Unable to connect to the database:", error);
    }
  }
  public getSequelizeInstance(): Sequelize {
    return this.sequelize;
  }
}

export default DatabaseConnection;

