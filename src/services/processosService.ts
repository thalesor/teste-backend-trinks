import  { processosRepository }  from "../repositories/processosRepository.js";
import { conflictError } from "../utils/errorUtils.js";

export interface IProcessoData {
    numero: String;
    status: processoType;
    estado: String;
    valor: Number;
    dataInicial: Date;
    idEmpresa: Number;
}

export type processoType = 'ativo' | 'inativo';

function insert(createProcessoData: IProcessoData) 
{
   const existingProcesso = processosRepository.findByNumero(
    createProcessoData.numero
  );

  if (existingProcesso)
    throw conflictError("O número dos processo deve ser único");

  processosRepository.create(createProcessoData);
}

function get() {
    return processosRepository.findAll();
  }

export const processosService = {
  insert,
  get
};