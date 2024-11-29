import express, { Express } from "express";
import dbConnection from "./infrastructure/database/databaseconfig";
import cors from "cors";
import userRoutes from "./interfaces/routes/user.routes";
import personRoutes from "./interfaces/routes/person.routes";
import rolRoutes from "./interfaces/routes/rol.routes";
import rolOptionRoutes from "./interfaces/routes/roloption.routes";
import rolrolOptionRoutes from "./interfaces/routes/rolroloption.routes";
import rolUserRoutes from "./interfaces/routes/roluser.routes";
import "reflect-metadata";
import sessionsRoutes from "./interfaces/routes/session.routes";
import authRouter from "./interfaces/routes/auth.routes";

class App {
  private app: Express;
  private port: string | number;

  constructor(port: string | number) {
    this.app = express();
    this.port = port;
    this.app.use(express.json());
    this.app.use(cors());
    this.app.use(
      "/api",
      userRoutes,
      personRoutes,
      rolRoutes,
      rolOptionRoutes,
      rolrolOptionRoutes,
      rolUserRoutes,
      sessionsRoutes,
      authRouter,
    );
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
const app = new App(process.env.PORT || 3000);
app.start();
