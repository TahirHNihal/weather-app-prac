import React, { useState } from "react";
import day from "../assets/day.svg";
import night from "../assets/night.svg";

const weatherCard = () => {
  const [time, setTime] = useState("9:30");
  return (
    <>
      <div>
        <div className="w-[350px] bg-white dark:bg-slate-500/10 border border-slate-700 rounded-lg text-white mb-2 p-2">
          <form className="flex justify-between items-center w-full">
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
            />
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 px-4 py-2"
            >
              Search
            </button>
          </form>
        </div>
        <div className="w-[350px] bg-white dark:bg-slate-500/10 border border-slate-700 rounded-lg p-5 text-slate-950 dark:text-white flex flex-col items-center justify-center gap-8 text-xl hover:scale-105 duration-300 ease-in-out">
          <div className="flex items-center justify-between w-full">
            <p>Dhaka</p>
            <p>
              {time}
              {/* <span>09</span>:<span>30</span> */}
              <span>PM</span>
            </p>
          </div>
          <div className="w-full text-center">
            <img
              src={night}
              alt=""
              className="drop-shadow-2xl h-[120px] inline-block"
            />
            <p>Night</p>
          </div>
          <div className="flex items-center justify-between w-full">
            <p>19°C</p>
            <p>2.2KM/H</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default weatherCard;
