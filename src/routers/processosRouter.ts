import { Router } from "express";
import { processosController } from "../controllers/processosController";

const processosRouter = Router();

processosRouter.post("/", processosController.insert);
processosRouter.get("/", processosController.get);

export default processosRouter;
