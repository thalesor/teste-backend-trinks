import { Request, Response } from "express";
import { processosService } from "../services/processosService";

function insert(req: Request, res: Response) {

  processosService.insert(req.body);

  res.sendStatus(201);
}

function get(req: Request, res: Response) {
  const processos = processosService.get();
  res.send(processos);
}

export const processosController = {
 insert,
 get
};
