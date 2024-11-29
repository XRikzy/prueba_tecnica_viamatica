import { Router } from "express";
import { SessionsControllers } from "../controllers/session.controller";
import { SessionsRepository } from "../../domain/repositories/session.repository";
import { SessionsService } from "../../domain/services/session.service";

const sessionsRoutes = Router();
const sessionsService = new SessionsService;
const sessionsControllers = new SessionsControllers(sessionsService);

sessionsRoutes.post("/sessions", (req, res) =>
  sessionsControllers.createSessions(req, res)
);
sessionsRoutes.get("/sessions", (req, res) =>
  sessionsControllers.getAllSessions(req, res)
);
sessionsRoutes.get("/sessions/:idUser", (req, res) =>
  sessionsControllers.getSessionByIdUser(req, res)
);
sessionsRoutes.get("/sessions/:id", (req, res) =>
  sessionsControllers.getSession(req, res)
);
sessionsRoutes.patch("/sessions/:id", (req, res) =>
  sessionsControllers.updateSessions(req, res)
);
sessionsRoutes.delete("/sessions/:id", (req, res) =>
  sessionsControllers.deleteSessions(req, res)
);

export default sessionsRoutes;