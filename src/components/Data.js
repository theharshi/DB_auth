"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getData = void 0;
var dataset_json_1 = require("../assets/dataset.json");
var Columns;
(function (Columns) {
  Columns[(Columns["InflationRate"] = 0)] = "InflationRate";
  Columns[(Columns["InterestRate"] = 1)] = "InterestRate";
  Columns[(Columns["AveragePay"] = 2)] = "AveragePay";
  Columns[(Columns["EmploymentRate"] = 3)] = "EmploymentRate";
  Columns[(Columns["Deposit"] = 4)] = "Deposit";
  Columns[(Columns["Withdrawal"] = 5)] = "Withdrawal";
  Columns[(Columns["Date"] = 6)] = "Date";
})(Columns || (Columns = {}));
exports.getData = function () {
  var dataJson = JSON.stringify(dataset_json_1.default);
  var dataset = JSON.parse(dataJson);
  var dates = [];
  var deposits = [];
  for (var i = 0; i < dataset.index.length; i++) {
    var dateString = dataset.data[i][Columns.Date];
    // const dateSplit = dateString.split("-");
    // const y = parseInt(dateSplit[0]);
    // const m = parseInt(dateSplit[1]) - 1;
    // const d = parseInt(dateSplit[2]);
    // const date = new Date(y, m, d);
    var deposit = dataset.data[i][Columns.Deposit];
    dates.push(dateString);
    deposits.push(deposit);
  }
  return {
    X: dates,
    Y: [deposits],
  };
};
