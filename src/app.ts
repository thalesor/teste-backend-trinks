import cors from "cors";
import express from "express";
import "express-async-errors";
import clientesRouter from "./routers/clientesRouter.js";
import { errorHandlerMiddleware } from "./middlewares/errorHandlerMiddleware.js";
import processosRouter from "./routers/processosRouter.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/clientes", clientesRouter);
app.use("/processos", processosRouter);
app.use(errorHandlerMiddleware);

export default app;
