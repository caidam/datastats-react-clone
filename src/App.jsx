
import React, { useState, useEffect } from "react";
import Navbar from "./components/NavBar";
import BarChartCall from "./components/BarChartCall";
import LineChartCall from "./components/LineChartCall";
import DoughnutChartCall from "./components/DoughnutChartCall";
// import JobTitleSelector from "./components/JobTitleSelector";
// import BarChartCall2 from "./components/BarChartCall2";
// import BarChartLocal from "./components/local_temp/BarChartLocal";
// import LineChartLocal from "./components/local_temp/LineChartLocal";
// import DoughnutChartLocal from "./components/local_temp/DoughnutChartLocal";
import "./test.css";

function App() {

    return (
      <>
        <>
          < Navbar />
        </>
        <div className="chart-container">
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
                    {/* < LineChartLocal /> */}
                </div>
            </div>
            <div className="chart-wrapper">
                <div className="chart-title">Bar Chart - Top Skills</div>
                <div className="bar-chart">
                    <BarChartCall />
                    {/* < BarChartLocal /> */}
                </div>
            </div>
            <div className="chart-wrapper">
              <div className="chart-title"> Doughnut Chart - Offers by Job Title </div>
              <div className="doughnut-chart">
                 <DoughnutChartCall />
                {/* < DoughnutChartLocal /> */}
              </div>
            </div>
        </div>
      </>
    );
}

export default App;