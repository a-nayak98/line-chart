import RealChart from "./components/RealChart";
import LineChart from "./components/LineChart";
import "./App.css";

const App = () => {
  return (
    <>
      <div className="app">
        <h1>Real-Time Line Chart </h1>
        <div className="charts">
          <div className="dummy">
            <h2>Chart with Dummy Data</h2>
            <LineChart />
          </div>
          <div className="dynamic">
            <h2>Chart with Dynamic data</h2>
            <RealChart />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
