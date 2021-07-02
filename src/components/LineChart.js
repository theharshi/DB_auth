// "use strict";
import React, { Component } from "react";
import { ChartOptions } from "chart.js";
import { Line } from "react-chartjs-2";
// import { getData } from "./Data";

// Object.defineProperty(exports, "__esModule", { value: true });
// exports.LineChart = void 0;
var Data_1 = require("./Data");
var style = {
  maxWidth: "85vw",
  margin: "0 auto",
  marginBottom: "50px",
};
var options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
  plugin: {
    legend: false,
  },
};
var generateChartData = function () {
  var chartXY = Data_1.getData();
  var dataY = chartXY.Y[0];
  var dataX = chartXY.X;
  var data = {
    labels: dataX,
    datasets: [
      {
        label: "Deposits in Million USD",
        data: dataY,
        fill: false,
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgba(255, 99, 132, 1)",
      },
    ],
  };
  return data;
};
class LineChart extends Component {
  render() {
    return (
      <div style={style}>
        <Line type="line" data={generateChartData()} options={options} />
      </div>
    );
  }
}
export default LineChart;
// exports.LineChart = function () {
//     render()
//   return (
//     <div style={style}>
//       <Line type="line" data={generateChartData()} options={options} />
//     </div>
//   );
