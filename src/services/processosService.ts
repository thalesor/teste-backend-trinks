import  { processosRepository }  from "../repositories/processosRepository";
import { conflictError } from "../utils/errorUtils.js";

export interface IProcessoData {
    id: number;
    numero: String;
    status: processoType;
    estado: String;
    valor: Number;
    dataInicial: Date
}

export type processoType = 'ativo' | 'inativo';

async function insert(createProcessoData: IProcessoData) {
  const existingProcesso = await processosRepository.findByNumero(
    createProcessoData.numero
  );

  if (existingProcesso)
    throw conflictError("O número dos processo deve ser único");

  await processosRepository.create(createProcessoData);
}

function get() {
    return processosRepository.findAll();
  }

export const processosService = {
  insert,
  get
};