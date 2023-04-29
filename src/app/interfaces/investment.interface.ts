export interface InvestmentsInterface {
    acoes: StocksInterface[],
    indicadorCarencia: string,
    nome: string,
    objetivo: string,
    saldoTotal: number
}

export interface StocksInterface {
    id: string,
    nome: string,
    percentual: number,
    saldoAcumulado?: number,
    withdrawValue?: number
}