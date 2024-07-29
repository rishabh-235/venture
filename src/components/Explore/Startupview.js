import React, { useState, useEffect } from "react";
import StartupCard from "../StartupCard";
import axios from "axios";

export default function Startupview() {
  const [curr, setCurr] = useState(0);
  const [children, setChildren] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/v1/startup/topfounders")
      .then((response) => {
        setChildren(response.data.data);
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
      });
  }, []); // Empty dependency array to run effect only once after the initial render

  const prev = () => {
    setCurr((prevCurr) =>
      prevCurr === 0 ? children.length - 1 : prevCurr - 1
    );
  };

  const next = () => {
    setCurr((prevCurr) =>
      prevCurr === children.length - 1 ? 0 : prevCurr + 1
    );
  };

  return (
    <div>
      <div className="flex mb-3 w-full justify-end">
        <button onClick={prev}>
          <span className="material-symbols-outlined material-symbols-outlined border-gray-700 mr-2 border-2 p-1 rounded-[5rem] text-[1.2rem]">
            arrow_left_alt
          </span>
        </button>

        <button onClick={next}>
          <span className="material-symbols-outlined material-symbols-outlined border-gray-700 border-2 p-1 rounded-[5rem] text-[1.2rem]">
            arrow_right_alt
          </span>
        </button>
      </div>

      <div className="overflow-hidden relative flex w-[81vw] mb-2">
        {children.map((startup, i) => (
          <div
            className=" transition-transform ease-out duration-500"
            style={{ transform: `translateX(-${curr * 100}%)` }}
            key={i}
          >
            <StartupCard data={startup}  />
          </div>
        ))}
      </div>
    </div>
  );
}

