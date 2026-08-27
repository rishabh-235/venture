import React, { useState, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import StartupCard from "../../components/StartupCard";
import { fetchTopFounders } from "../../redux/slice/startupSlice";

export default function Startupview() {
  const dispatch = useDispatch();
  const [curr, setCurr] = useState(0);
  const children = useSelector((state) => state.startup.topFounders);
  const slideStyle = useMemo(
    () => ({ transform: `translateX(-${curr * 100}%)` }),
    [curr],
  );

  useEffect(() => {
    dispatch(fetchTopFounders());
  }, [dispatch]);

  const prev = () => {
    setCurr((prevCurr) =>
      prevCurr === 0 ? children.length - 1 : prevCurr - 1,
    );
  };

  const next = () => {
    setCurr((prevCurr) =>
      prevCurr === children.length - 1 ? 0 : prevCurr + 1,
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
            style={slideStyle}
            key={i}
          >
            <StartupCard data={startup} />
          </div>
        ))}
      </div>
    </div>
  );
}
