import { clientes } from "../database";
import { IClienteData } from "../services/clientesService";

async function create(CreateClientesData: IClienteData) {
  clientes.push(CreateClientesData);
}

function findAll(): IClienteData[] {
  return clientes;
}

function find(id: number): IClienteData {
  return clientes.find(cliente => cliente.id === id);
}

function findByNome(nome: String): IClienteData {
    return clientes.find(cliente => cliente.nome === nome);
  }


export const clientesRepository = {
  create,
  findAll,
  find,
  findByNome
};