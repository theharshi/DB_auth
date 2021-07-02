export enum ColumnNo {
    Date = 0,
    InflationRate,
    InterestRate,
    AveragePay,
    EmploymentRate,
    Deposits,
    Withdrawals,
}
export enum PredictionVar {
    Depsits = "Deposits",
    Withdrawals = "Withdrawals",
    Balance = "Balance",
    None = "None",
}
let predictionVarMap = new Map<PredictionVar, number>();
predictionVarMap.set(PredictionVar.Depsits, 0);
predictionVarMap.set(PredictionVar.Withdrawals, 1);
predictionVarMap.set(PredictionVar.Balance, 0);
export { predictionVarMap };
