import { clientesRepository } from "../src/repositories/clientesRepository";
import { processosRepository } from "../src/repositories/processosRepository";

export const seedClientes = () =>
{
    clientesRepository.createMany([
        {
            id: 1,
            nome: "Empresa A",
            cnpj: "00000000001",
            estado: "Rio de Janeiro"
        },
        {
            id: 1,
            nome: "Empresa B",
            cnpj: "00000000002",
            estado: "São Paulo"
        }
    ]);
}

export const seedProcessos = () =>
{
    processosRepository.createMany([
        //SEED EMPRESA A
        {
            status: "ativo",
            numero: "00001CIVELRJ",
            valor: 200000,
            estado: "Rio de Janeiro",
            dataInicial: new Date('10/10/2007'),
            idEmpresa: 1
        },
        {
            status: "ativo",
            numero: "00002CIVELSP",
            valor: 100000,
            estado: "São Paulo",
            dataInicial: new Date('20/10/2007'),
            idEmpresa: 1
        },
        {
            status: "inativo",
            numero: "00003TRABMG",
            valor: 10000,
            estado: "Minas Gerais",
            dataInicial: new Date('30/10/2007'),
            idEmpresa: 1
        },
        {
            status: "inativo",
            numero: "00004CIVELRJ",
            valor: 20000,
            estado: "Rio de Janeiro",
            dataInicial: new Date('10/11/2007'),
            idEmpresa: 1
        },
        {
            status: "ativo",
            numero: "00005CIVELSP",
            valor: 35000,
            estado: "São Paulo",
            dataInicial: new Date('15/11/2007'),
            idEmpresa: 1
        },
        //SEED EMPRESA B
        {
            status: "ativo",
            numero: "00006CIVELRJ",
            valor: 20000,
            estado: "Rio de Janeiro",
            dataInicial: new Date('01/05/2007'),
            idEmpresa: 2
        },
        {
            status: "ativo",
            numero: "00007CIVELRJ",
            valor: 700000,
            estado: "São Paulo",
            dataInicial: new Date('02/06/2007'),
            idEmpresa: 2
        },
        {
            status: "inativo",
            numero: "00008CIVELSP",
            valor: 500,
            estado: "São Paulo",
            dataInicial: new Date('03/07/2007'),
            idEmpresa: 2
        },
        {
            status: "ativo",
            numero: "00009CIVELSP",
            valor: 32000,
            estado: "Rio de Janeiro",
            dataInicial: new Date('04/08/2007'),
            idEmpresa: 2
        },
        {
            status: "inativo",
            numero: "00010TRABAM",
            valor: 1000,
            estado: "São Paulo",
            dataInicial: new Date('05/09/2007'),
            idEmpresa: 2
        },
    ]);
}
