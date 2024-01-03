import React, { useState } from "react";
import day from "../assets/day.svg";
import night from "../assets/night.svg";

const weatherCard = () => {
  const [time, setTime] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const [location, setLocation] = useState("dhaka");
  const API_KEY = "1e60842d1cbd4c93a0d120051240301";
  const url = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${location}&aqi=no`;

  const searchLocationhandler = (e) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setWeatherData(data))
      .catch((error) => console.log(error.message));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    searchLocationhandler();
    timeHandler(weatherData?.location?.localtime_epoch);
  };

  const timeHandler = (d) => {
    // const d = new Date();
    let hr = d.getHours();
    let min = d.getMinutes();
    let ampm = hr >= 12 ? "pm" : "am";
    hr = hr % 12;
    hr = hr ? hr : 12; // the hour '0' should be '12'
    min = min < 10 ? "0" + min : min;
    let strTime = `${hr}:${min}${ampm}`;
    setTime(strTime);
    console.log(strTime);
  };
  return (
    <>
      <div>
        <div className="w-[350px] bg-white dark:bg-slate-500/10 border border-slate-700 rounded-lg text-white mb-2 p-2 hover:scale-105 duration-300 ease-in-out">
          <form
            className="flex justify-between items-center w-full"
            onSubmit={handleSubmit}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
              />
            </svg>
            <input
              type="text"
              className="bg-inherit w-8/12 p-2"
              placeholder="Your location..."
              required
              //   value={location}
              onChange={(e) => {
                setLocation(e.target.value);
              }}
            />
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 px-4 py-2"
            >
              Search
            </button>
          </form>
        </div>
        {weatherData ? (
          <div className="w-[350px] bg-white dark:bg-slate-500/10 border border-slate-700 rounded-lg p-5 text-slate-950 dark:text-white flex flex-col items-center justify-center gap-8 text-xl hover:scale-105 duration-300 ease-in-out">
            <div className="flex items-center justify-between w-full">
              <p className="capitalize w-8/12 overflow-hidden">
                {weatherData?.location?.name
                  ? weatherData?.location?.name
                  : "dhaka"}
              </p>
              <p className="w-4/12 text-right uppercase">{time}</p>
            </div>
            <div className="w-full text-center">
              <img
                src={night}
                alt=""
                className="drop-shadow-2xl h-[120px] inline-block"
              />

              <p className="capitalize">
                {weatherData?.current?.condition?.text}
              </p>
            </div>
            <div className="flex items-center justify-between w-full">
              <p>{weatherData?.current?.temp_c}°C</p>
              <p>{weatherData?.current?.wind_mph}MP/H</p>
            </div>
          </div>
        ) : (
          <div className="w-[350px] bg-white dark:bg-slate-500/10 border border-slate-700 rounded-lg p-5 text-slate-950 dark:text-white flex flex-col items-center justify-center gap-8 text-xl hover:scale-105 duration-300 ease-in-out">
            <h1>You haven't search yet</h1>
          </div>
        )}
      </div>
    </>
  );
};

export default weatherCard;
