import  { clientesRepository }  from "../repositories/clientesRepository";
import { conflictError } from "../utils/errorUtils.js";

export interface IClienteData {
    id: number;
    cnpj: String;
    nome: String;
    estado: String;
}

async function insert(createClienteData: IClienteData) {
  const existingCliente = await clientesRepository.findByNome(
    createClienteData.nome
  );

  if (existingCliente)
    throw conflictError("O nome dos clientes deve ser único");

  await clientesRepository.create(createClienteData);
}

function get() {
    return clientesRepository.findAll();
  }

export const clientesService = {
  insert,
  get
};