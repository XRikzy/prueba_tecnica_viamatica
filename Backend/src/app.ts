import express, { Express } from "express";
import dbConnection from "./config/database/databaseconfig";
import cors from "cors";
import userRoutes from "./interfaces/routes/UsersRoutes";
import personRoutes from "./interfaces/routes/PersonRoutes";

class Server {
  private app: Express;
  private port: string | number;

  constructor(port: string | number) {
    this.app = express();
    this.port = port;
    this.app.use(express.json());
    this.app.use(cors());
    this.app.use("/api", userRoutes, personRoutes);
  }
  private async authenticateDatabase() {
    try {
      console.table("✅ 🐘 Database authentication successful 🐘 ✅");
      await dbConnection.authenticate();
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
