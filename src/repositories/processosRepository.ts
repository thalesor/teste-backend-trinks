import { processos } from "../database";
import { IProcessoData } from "../services/processosService";

async function create(CreateProcessoData: IProcessoData) {
  processos.push(CreateProcessoData);
}

function findAll(): IProcessoData[] {
  return processos;
}

function find(id: number): IProcessoData {
  return processos.find(processo => processo.id === id);
}

function findByNumero(numero: String): IProcessoData {
    return processos.find(processo => processo.numero === numero);
  }


export const processosRepository = {
  create,
  findAll,
  find,
  findByNumero
};