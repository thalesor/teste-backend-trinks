import { IClienteData } from "../src/services/clientesService.js";
import { IProcessoData } from "../src/services/processosService.js";

export let clientes: IClienteData[] = [];
export let processos: IProcessoData[] = [];

export function truncateClientes()
{
    clientes = [];
}

export function truncateProcessos()
{
    processos = [];
}
