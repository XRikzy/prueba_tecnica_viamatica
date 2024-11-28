import { Router } from "express";

import { SessionsServices } from "../../domain/services/session.service";
import { SessionsControllers } from "../controllers/session.controller";
import { SessionsRepository } from "../../domain/repositories/session.repository";

const sessionsRoutes = Router();
const sessionsRepository = new SessionsRepository();
const sessionsService = new SessionsServices(sessionsRepository);
const sessionsControllers = new SessionsControllers(sessionsService);

sessionsRoutes.post("/sessions", (req, res) =>
  sessionsControllers.createSessions(req, res)
);
sessionsRoutes.post("/manysessions", (req, res) =>
  sessionsControllers.createManySessions(req, res)
);
sessionsRoutes.get("/sessions", (req, res) =>
  sessionsControllers.getAllSessions(req, res)
);
sessionsRoutes.get("/sessions/:names", (req, res) =>
  sessionsControllers.getSessionsBySessionsName(req, res)
);
sessionsRoutes.patch("/sessions/:id", (req, res) =>
  sessionsControllers.updateSessions(req, res)
);
sessionsRoutes.delete("/sessions/:id", (req, res) =>
  sessionsControllers.deleteSessions(req, res)
);

export default sessionsRoutes;