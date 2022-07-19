import { Request, Response } from "express";
import { processosService } from "../services/processosService.js";

function insert(req: Request, res: Response) {

  processosService.insert(req.body);

  res.sendStatus(201);
}

function get(req: Request, res: Response) {
  const processos = processosService.get();
  res.send(processos);
}

function getTotal(req: Request, res: Response) {
  const { status } = req.query;
  const somaTotal = processosService.getTotalFromStatus(status as string);
  res.send(somaTotal);
}

function getMediaTotal(req: Request, res: Response) {
  const { idEmpresa, estado } = req.query;
  const mediaTotal = processosService.getMediaTotalEmpresaEstado(+idEmpresa, estado as string);
  res.send(mediaTotal);
}

export const processosController = {
 insert,
 get,
 getMediaTotal,
 getTotal
};
