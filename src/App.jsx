
import React, { useState, useEffect } from "react";
import BarChartCall from "./components/BarChartCall";
import LineChartCall from "./components/LineChartCall";
import DoughnutChartCall from "./components/DoughnutChartCall";
import JobTitleSelector from "./components/JobTitleSelector";
import BarChartCall2 from "./components/BarChartCall2";
import "./test.css";

function App() {

    return (
      <>
        <div className="chart-container">
            <div>
                <h1 style={{ textAlign: 'center' }}>Datastats</h1>
            </div>
            {/* <div>
              <JobTitleSelector/>
            </div>
            <div className="chart-wrapper">
              < BarChartCall2 />
            </div> */}
            <div className="chart-wrapper">
                <div className="chart-title">Line Chart - Daily Job Offers</div>
                <div className="line-chart">
                    <LineChartCall />
                </div>
            </div>
            <div className="chart-wrapper">
                <div className="chart-title">Bar Chart - Top Skills</div>
                <div className="bar-chart">
                    <BarChartCall />
                </div>
            </div>
            <div className="chart-wrapper">
              <div className="chart-title"> Doughnut Chart - Offers by Job Title </div>
              <div className="doughnut-chart">
                <DoughnutChartCall />
              </div>
            </div>
        </div>
      </>
    );
}

export default App;