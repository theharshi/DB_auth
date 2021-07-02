// import json from "../assets/dataset_1K.json";
// import json from "../assets/dataset_10K.json";
import json from "../assets/dataset_100K.json";
import { ColumnNo, PredictionVar } from "../interfaces/enums";
import {
  ApiRequest,
  ApiResponse,
  ChartDataInterafce,
} from "../interfaces/interfaces";

const getColumn = (
  data: (number | string)[][],
  colNo: ColumnNo,
  startIndex: number = 0,
  endIndex: number = data.length - 1
) => {
  let colData: (number | string)[] = [];
  for (let i = startIndex; i <= endIndex; i++) {
    const deposit = data[i][colNo];
    colData.push(deposit);
  }
  return colData;
};

export const setDateFormat = (date: string) => {
  let split = date.split("-");
  let newDate = split[2] + "-" + split[1] + "-" + split[0];
  return newDate;
};

export const getData = (apiRequest: ApiRequest) => {
  let dataJson = JSON.stringify(json as any);
  let dataset: ApiResponse = JSON.parse(dataJson);
  let startDate = setDateFormat(apiRequest.fromDate);
  let endDate = setDateFormat(apiRequest.toDate);
  console.log("start-end date", startDate, endDate);
  let allDates = <string[]>getColumn(dataset.data, ColumnNo.Date);
  let startIndex = allDates.indexOf(startDate);
  let endIndex = allDates.indexOf(endDate);
  console.log("start-end index", startIndex, endIndex);
  let X = <string[]>(
    getColumn(dataset.data, ColumnNo.Date, startIndex, endIndex)
  );
  let Yd = <number[]>(
    getColumn(dataset.data, ColumnNo.Deposits, startIndex, endIndex)
  );
  let Yw = <number[]>(
    getColumn(dataset.data, ColumnNo.Withdrawals, startIndex, endIndex)
  );
  let predVar = apiRequest.predVar;
  let Y: number[] = [];
  if (predVar == PredictionVar.Depsits) {
    Y = Yd;
  } else if (predVar == PredictionVar.Withdrawals) {
    Y = Yw;
  } else if (predVar == PredictionVar.Balance) {
    Yd.forEach((d, index) => {
      let w = Yw[index];
      Y.push(d - w);
    });
  }

  return <ChartDataInterafce>{
    X: X,
    YP: [Y],
    label: predVar + " in Million USD",
  };
};
