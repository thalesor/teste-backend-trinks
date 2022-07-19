import { jest } from "@jest/globals";
import { seedClientes, seedProcessos } from "../../database/seed";
import { clientesRepository } from "../../src/repositories/clientesRepository";
import { processosService } from "../../src/services/processosService";
import { truncateProcessos } from "../app.test";



describe("Testes unitários da service dos processos", () => {

    beforeAll(() => {
        seedProcessos();
        seedClientes();
        jest.clearAllMocks()
    });

    it('deveria retornar a soma de R$ 1.087.000,00 ao buscar os processos ativos', async () => {
        
        const soma = processosService.getTotalFromStatus('ativo');
        expect(soma).toBe("R$ 1.087.000,00");
    });

    it('deveria retornar a soma de R$ 110.000,00 ao buscar os processos da Empresa A, no estado do Rio de Jan eiro', async () => {
        
        const soma = processosService.getMediaTotalEmpresaEstado(1, "Rio de Janeiro");
        expect(soma).toBe("R$ 110.000,00");
    });

    it('deveria retornar no máximo dois processos quando busca processos com valor acima de 100.000 reais', async () => {
        
        const processos = processosService.getTotalGreaterThan(100000);
        expect(processos.length).toEqual(2);
    });

    it('deveria retornar lista contendo processo dos estados dos clientes', async () => {
        
        const clientes = clientesRepository.findAll();
        const processosA = processosService.getByEstado(clientes[0].estado);
        const processosB = processosService.getByEstado(clientes[1].estado);
        const listProcessos = processosA.concat(processosB);
        expect(listProcessos).toBe([
            {
                status: "ativo",
                numero: "00001CIVELRJ",
                valor: 200000,
                estado: "Rio de Janeiro",
                dataInicial: new Date('10/10/2007'),
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
            }
        ]);
    });

    it('deveria retornar uma lista com os processos 00003TRABMG e 00010TRABAM quando pesquisa com o trecho TRAB', async () => {
        
        const processos = processosService.getProcessesBySlug('TRAB');
        expect(processos).toEqual([
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
                numero: "00010TRABAM",
                valor: 1000,
                estado: "São Paulo",
                dataInicial: new Date('05/09/2007'),
                idEmpresa: 2
            }
        ])
    });

});

