import  { clientesRepository }  from "../repositories/clientesRepository.js";
import { conflictError } from "../utils/errorUtils.js";

export interface IClienteData {
    id: Number;
    cnpj: String;
    nome: String;
    estado: String;
}

function insert(createClienteData: IClienteData) {
  const existingCliente = clientesRepository.findByNome(
    createClienteData.nome
  );

  if (existingCliente)
    throw conflictError("O nome dos clientes deve ser único");

  clientesRepository.create(createClienteData);
}

function get() {
    return clientesRepository.findAll();
  }

export const clientesService = {
  insert,
  get
};