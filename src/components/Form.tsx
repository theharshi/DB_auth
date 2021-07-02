import React, { useRef } from "react";
import { useState } from "react";
import { PredictionVar, predictionVarMap } from "../interfaces/enums";
import { ApiRequest, ChartDataInterafce } from "../interfaces/interfaces";
import { getData, setDateFormat } from "./Data";
import { LineChart } from "./LineChart";
import { CSVLink, CSVDownload } from "react-csv";

export const Form: React.FunctionComponent = () => {
  const defaultFromDate = "";
  const defaultToDate = "";
  const defaultPredVar = PredictionVar.None;
  const defaultCsvData = [["Date", "Deposits"]];

  //onchange, state change Onclick
  let predVar = useRef<PredictionVar>(defaultPredVar);
  let fromDate = useRef<string>(defaultFromDate);
  let toDate = useRef<string>(defaultToDate);
  let btnEle = useRef<HTMLButtonElement | null>(null);
  // const [loading, setLoading] = useState(false);
  const [csvData, setcsvData] = useState<string | object[]>(defaultCsvData);
  //onclick
  const urlData = useRef<string>("");

  //api response
  const [chartData, setChartData] = useState<ChartDataInterafce | undefined>(
    undefined
  );
  const csvLink = useRef<"none" | "auto">("none");

  // useEffect(() => {
  //     fetch(urlData.current).then((response) =>
  //         response.json().then((data) => {
  //             console.log(data);
  //             let X = data.X;
  //             let YH = [data.YH];
  //             let YP = [data.YP];
  //             let label = predVar.current;
  //             let newChartData: ChartDataInterafce = {
  //                 X,
  //                 YH,
  //                 YP,
  //                 label,
  //             };
  //             setChartData(newChartData);
  //         })
  //     );
  // }, [urlData]);

  function setLoading(val: boolean) {
    let btn = btnEle.current;
    if (btn) {
      if (val) {
        btn.className = "btn btn-secondary";
        btn.innerHTML = `<i class="spinner-border spinner-border-sm"></i>Predicting`;
        btn.disabled = true;
        csvLink.current = "none";
      } else {
        btn.className = "btn btn-primary";
        btn.innerHTML = `Predict`;
        btn.disabled = false;
      }
    }
  }
  function handleSubmit(e: React.MouseEvent) {
    e.preventDefault();
    //NOTE:check if fromDate<=toDate
    if (predVar.current === PredictionVar.None) return;
    let apiUrl =
      "/api/predict_date/" +
      predictionVarMap.get(predVar.current) +
      "/" +
      fromDate.current +
      "/" +
      toDate.current;
    console.log(apiUrl);
    if (apiUrl !== urlData.current) {
      setLoading(true);
      urlData.current = apiUrl;
      fetch(urlData.current).then((response) => {
        console.log(response);
        if (response.ok) {
          response.json().then((data) => {
            console.log(data);
            let X = data.X;
            let YH = [[]];
            let YP = [data.Y];
            let label = predVar.current;
            let newChartData: ChartDataInterafce = {
              X,
              YH,
              YP,
              label,
            };
            csvLink.current = "auto";
            //Render
            setChartData(newChartData);
          });
        } else {
          //NOTE:handle error
          console.log(response);
        }
        setLoading(false);
      });
    } else {
      if (chartData) {
        let newChartData: ChartDataInterafce = {
          X: chartData.X,
          YH: chartData.YH,
          YP: chartData.YP,
          label: chartData.label,
        };
        setChartData(newChartData);
      }
    }
  }

  const csvReport = {
    data: csvData,
    filename: "Predicted_data.csv",
  };
  console.warn("FORM rendered");
  return (
    <div className="container my-10">
      <h4 className="my-3">What do you want to predict?</h4>
      <form>
        <div className="mb-3">
          <div className="dropdown my-3">
            <select
              name="drinks"
              required
              defaultValue={defaultPredVar}
              onChange={(e) => {
                predVar.current = e.currentTarget.value as PredictionVar;
              }}
            >
              <option value={PredictionVar.None} disabled hidden>
                Choose prediction attribute
              </option>
              <option value={PredictionVar.Depsits}>Deposits</option>
              <option value={PredictionVar.Withdrawals}>Withdrawals</option>
              <option value={PredictionVar.Balance}>Balance</option>
            </select>
          </div>
          <label htmlFor="date-from" className="form-label">
            From date
          </label>
          <input
            type="date"
            className="form-control"
            id="date-from"
            defaultValue={defaultFromDate}
            onChange={(e) => {
              let newFromDate = e.currentTarget.value;
              fromDate.current = setDateFormat(newFromDate);
            }}
          />
          <label htmlFor="date-to" className="form-label">
            To date
          </label>
          <input
            type="date"
            className="form-control"
            id="date-to"
            defaultValue={defaultToDate}
            onChange={(e) => {
              let newtoDate = e.currentTarget.value;
              toDate.current = setDateFormat(newtoDate);
            }}
          />
        </div>
        <button
          ref={btnEle}
          id="predict-btn"
          type="submit"
          className="btn btn-primary"
          onClick={(e) => {
            handleSubmit(e);
          }}
        >
          Predict
        </button>
        {/* {!loading && (
                    <button
                        type="submit"
                        className="btn btn-primary "
                        onClick={(e) => {
                            handleSubmit(e);
                        }}
                    >
                        Predict
                    </button>
                )}
                {loading && (
                    <button className="btn btn-primary" disabled style={{ fontStyle: "italic" }}>
                        <i className="spinner-border spinner-border-sm"> </i>Predicting
                    </button>
                )} */}
        <CSVLink
          {...csvReport}
          className="btn btn-secondary ml-3 text-white"
          style={{ pointerEvents: csvLink.current }}
        >
          Export to csv
        </CSVLink>
      </form>
      {chartData ? <LineChart chartData={chartData} /> : null}
    </div>
  );
};
