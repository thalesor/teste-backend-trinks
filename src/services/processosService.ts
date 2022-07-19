import  { processosRepository }  from "../repositories/processosRepository.js";
import { conflictError } from "../utils/errorUtils.js";

export interface IProcessoData {
    numero: String;
    status: processoType;
    estado: String;
    valor: number;
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

function getByEstado(estado: String)
{
  return processosRepository.findByEstado(estado);
}

function getByStatus(status: String)
{
  return processosRepository.findByStatus(status);
}

function getMediaTotalEmpresaEstado(idEmpresa: number, estado: string)
{
  let processos = processosRepository.findByEstado("Rio de Janeiro");
  processos = processos.filter(processo => processo.idEmpresa === 1);
  let soma = getSoma(processos)/processos.length;
  return toLocale(soma);
}

function getTotalFromStatus(status: string)
{
  const processos = getByStatus(status);
  return toLocale(getSoma(processos));
}

function getTotalGreaterThan(value: number)
{
  const processos = processosRepository.findAll();
  return processos.filter(processo => processo.valor > 100000);
}

function getProcessesByDate(date: Date)
{
  const processos = processosRepository.findAll();
  return processos.filter(processo => processo.dataInicial === date);
}

function getProcessesBySlug(slug: string)
{
  const processos = processosRepository.findAll();
  return processos.filter(processo => processo.numero.indexOf(slug) >= 1);
}

function getSoma(processos: IProcessoData[])
{
  const soma = processos.reduce(
    (anterior, atual) => anterior + atual.valor,
    0
  );
  return soma;
}

function toLocale(soma: number)
{
  return soma.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

export const processosService = {
  insert,
  get,
  getByEstado,
  getTotalFromStatus,
  getMediaTotalEmpresaEstado,
  getTotalGreaterThan,
  getProcessesByDate,
  getProcessesBySlug,
  getSoma
};