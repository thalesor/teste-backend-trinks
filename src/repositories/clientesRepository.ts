import { clientes, truncateClientes } from "../../database/database.js";
import { IClienteData } from "../services/clientesService.js";

function create(CreateClientesData: IClienteData) {
  clientes.push(CreateClientesData);
}

function createMany(CreateClientesData: IClienteData[]) {
  
  for(const cliente of CreateClientesData)
  {
    clientes.push(cliente);
  }
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

function truncate()
{
  truncateClientes();
}


export const clientesRepository = {
  create,
  createMany,
  findAll,
  find,
  findByNome,
  truncate
};