import { Router } from "express";
import { processosController } from "../controllers/processosController.js";

const processosRouter = Router();

processosRouter.post("/", processosController.insert);
processosRouter.get("/", processosController.get);

export default processosRouter;
