import React from "react";
import { Line } from "react-chartjs-2";
import { ChartDataInterafce } from "../interfaces/interfaces";

const style: React.CSSProperties = {
  maxWidth: "85vw",
  margin: "0 auto",
  marginBottom: "50px",
};

// const options: ChartOptions<"line">= {
const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          // beginAtZero: true,
        },
      },
    ],
  },
  plugin: {
    legend: {
      display: false,
    },
    zoom: {
      pan: {
        enabled: true,
        mode: "x",
        // onPanComplete: getVisibleValues,
      },
      zoom: {
        enabled: true,
        mode: "x",
        // onZoomComplete: getVisibleValues,
      },
    },
  },
  interaction: {
    mode: "index",
    axis: "y",
  },
  // maintainAspectRatio: false,
};
// function getVisibleValues({ chart:  }) {
//     let x = chart.scales["x-axis-0"];

//     let object = JSON.stringify(chart.data.datasets[0].data.slice(x.minIndex, x.maxIndex + 1));
//     console.log(object);
// }
interface ChartDataInterafceWrapper {
  chartData: ChartDataInterafce;
}
export const LineChart: React.FunctionComponent<ChartDataInterafceWrapper> = ({
  chartData,
}) => {
  const generateChartData = (chartData: ChartDataInterafce) => {
    if (!chartData) {
      return {};
    }

    let dataYP = chartData.YP[0];
    let dataYH = chartData.YH ? chartData.YH[0] : [];
    let dataX = chartData.X;
    let label = chartData.label;
    dataYH = dataYH.slice(0, dataYH.length / 2);
    const data = {
      labels: dataX,
      datasets: [
        {
          label: "Predicted " + label,
          data: dataYP,
          fill: false,
          backgroundColor: "rgb(255, 99, 132)",
          borderColor: "rgba(255, 99, 132, 1)",
        },
        {
          label: "Historical " + label,
          data: dataYH,
          fill: false,
          backgroundColor: "rgb(125, 90, 120)",
          borderColor: "rgba(125, 90, 120, 1)",
        },
      ],
    };
    console.warn("generateChartData rendered");
    return data;
  };
  console.warn("LineChart rendered");
  return (
    <div style={style}>
      <Line type="line" data={generateChartData(chartData)} options={options} />
    </div>
  );
};
