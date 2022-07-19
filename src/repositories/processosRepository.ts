import { processos, truncateProcessos } from "../../database/database.js";
import { IProcessoData } from "../services/processosService.js";

function create(createProcessoData: IProcessoData) {
  processos.push(createProcessoData);
}

function createMany(createProcessoData: IProcessoData[]) {
  
  for(const processo of createProcessoData)
  {
    processos.push(processo);
  }
}

function findAll(): IProcessoData[] {
  return processos;
}

function findByNumero(numero: String): IProcessoData {
    return processos.find(processo => processo.numero === numero);
  }

function findByEstado(estado: String): IProcessoData[] {
  return processos.filter(processo => processo.estado === estado);
}

function findByStatus(status: String): IProcessoData[] {
  return processos.filter(processo => processo.status === status);
}

function truncate()
{
  truncateProcessos();
}


export const processosRepository = {
  create,
  createMany,
  findAll,
  findByEstado,
  findByNumero,
  findByStatus,
  truncate
};