import { useEffect, useRef } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  TimeScale,
} from "chart.js";
import "chartjs-adapter-date-fns";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  TimeScale
);

const RealChart = () => {
  const chartRef = useRef(null);

  // Initialize with 6 static data points
  const initialLabels = [
    "10:00:00",
    "10:01:00",
    "10:02:00",
    "10:03:00",
    "10:04:00",
    "10:05:00",
  ];

  const initialCurrentData = Array.from({ length: 6 }, () =>
    Math.floor(Math.random() * 51)
  );

  const data = {
    labels: initialLabels,
    datasets: [
      {
        label: "Current Values",
        data: initialCurrentData,
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 2,
        fill: false,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        min: 0,
        max: 50,
        title: {
          display: true,
          text: "Current Values",
        },
      },
      x: {
        title: {
          display: true,
          text: "Date Time Stamp",
        },
        type: "time",
        time: {
          parser: "HH:mm:ss",
          tooltipFormat: "HH:mm:ss",
          unit: "second",
          displayFormats: {
            second: "HH:mm:ss",
          },
        },
      },
    },
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      const lineChart = chartRef.current;
      if (lineChart) {
        const now = new Date();
        const timeLabel =
          `${now.getHours().toString().padStart(2, "0")}:` +
          `${now.getMinutes().toString().padStart(2, "0")}:` +
          `${now.getSeconds().toString().padStart(2, "0")}`;
        const newValue = Math.floor(Math.random() * 51);

        // Adding new labels and data point in chart
        lineChart.data.labels.push(timeLabel);
        lineChart.data.datasets[0].data.push(newValue);

        // setting limit for data point in frame
        const maxPoints = 20;
        if (lineChart.data.labels.length > maxPoints) {
          lineChart.data.labels.shift();
          lineChart.data.datasets[0].data.shift();
        }
        lineChart.update("none");
      }
    }, 1000 * 1); // Adding data every second

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  return (
    <Line
      ref={chartRef}
      data={data}
      options={options}
      height={400}
      width={700}
    />
  );
};

export default RealChart;
