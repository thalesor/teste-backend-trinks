import { Router } from "express";
import { processosController } from "../controllers/processosController.js";

const processosRouter = Router();

processosRouter.post("/", processosController.insert);
processosRouter.get("/", processosController.get);
processosRouter.get("/total", processosController.getTotal);
processosRouter.get("/mediatotal", processosController.getMediaTotal);

export default processosRouter;
