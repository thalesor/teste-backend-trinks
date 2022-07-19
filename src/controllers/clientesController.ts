import { Request, Response } from "express";
import { clientesService } from "../services/clientesService.js";

function insert(req: Request, res: Response) {

  clientesService.insert(req.body);

  res.sendStatus(201);
}

function get(req: Request, res: Response) {
  const clientes = clientesService.get();
  res.send(clientes);
}

export const clientesController = {
 insert,
 get
};
