import express, { Express } from "express";
import DatabaseConnection from "./config/database/databaseConnection";



class Server {
  private app: Express;
  private port: string | number;
  private dbConnection: DatabaseConnection;

  constructor(port: string | number) {
    this.app = express();
    this.port = port;
    this.dbConnection = new DatabaseConnection("usersesions", "ricardo", "ricardo123", "localhost", "postgres");
    this.app.use(express.json());
  }
  private async authenticateDatabase() {
    try {
      await this.dbConnection.authenticate();
      console.table("✅ 🐘 Database authentication successful 🐘 ✅");
    } catch (error) {
      console.error("Database authentication failed:", error);
      process.exit(1);
    }
  }
  public async start() {
    await this.authenticateDatabase();

    this.app.listen(this.port, () => {
      console.table(` ✅ 🏹 Server is running on port ${this.port} 🏹 ✅`);
    });
  }
}
const server = new Server(process.env.PORT || 3000);
server.start();
