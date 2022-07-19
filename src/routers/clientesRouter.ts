import { Router } from "express";
import { clientesController } from "../controllers/clientesController.js";

const clientesRouter = Router();

clientesRouter.post("/", clientesController.insert);
clientesRouter.get("/", clientesController.get);

export default clientesRouter;
