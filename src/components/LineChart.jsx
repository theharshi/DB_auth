import { ChartOptions } from "chart.js";
import React, { Component } from "react";
import { Line } from "react-chartjs-2";
// import { getData } from "./Data";

var X = [1, 2, 3, 4];
var Y = [1, 2, 3, 4];
const style = {
  maxWidth: "85vw",
  margin: "0 auto",
  marginBottom: "50px",
};
const options = {
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
function generateChartData() {
  // let chartXY = getData();
  let dataY = Y;
  let dataX = X;
  const data = {
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
}
export class LineChart extends Component {
  render() {
    return (
      <div style={style}>
        <Line type="line" data={generateChartData()} options={options} />
      </div>
    );
  }
}
// export  LineChart;
