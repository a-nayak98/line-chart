/* eslint-disable no-unused-vars */
import { useRef } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const LineChart = () => {
  const chartRef = useRef(null);
//   const myLineChart ;
  // Initialize with 6 static data points
  const initialLabels = [
    "16:00:00",
    "16:01:00",
    "16:02:00",
    "16:03:00",
    "16:04:00",
    "16:05:00",
  ];

  const initialData = Array.from({ length: 6 }, () =>
    Math.floor(Math.random() * 51)
  );
  // Initial data
  const initialData1 = {
    labels: initialLabels.map((el) => el),
    datasets: [
      {
        label: "Current Values",
        data: initialData,
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 2,
        fill: false,
      },
    ],
  };
  return <Line ref={chartRef} data={initialData1} height={400} width={700} />;
};

export default LineChart;
