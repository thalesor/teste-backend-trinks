import cors from "cors";
import express from "express";
import "express-async-errors";
import { errorHandlerMiddleware } from "./middlewares/errorHandlerMiddleware.js";

const app = express();
app.use(cors());
app.use(express.json());

//routers
app.use(errorHandlerMiddleware);

export default app;
