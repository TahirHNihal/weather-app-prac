import "./App.css";
import WeatherCard from "./components/weatherCard";

function App() {
  const apiURL = `https://api.weatherapi.com/v1/current.json?key=1e60842d1cbd4c93a0d120051240301&q=toronto&aqi=no`;

  return (
    <>
      <div className="bg-white dark:bg-slate-900 h-screen flex items-center justify-center">
        <WeatherCard />
      </div>
    </>
  );
}

export default App;
