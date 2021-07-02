import { PredictionVar } from "./enums";

export interface ApiRequest {
    predVar: PredictionVar;
    fromDate: string;
    toDate: string;
}
export interface ApiResponse {
    columns: string[];
    index: number[];
    data: (number | string)[][];
}
export interface ChartDataInterafce {
    X: (string | number)[];
    YH?: number[][];
    YP: number[][];
    label: string;
}
