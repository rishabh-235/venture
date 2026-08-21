import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  loadPitchData,
  setLoading,
  setError,
  clearError,
} from "../../redux/slice/pitchDataSlice";
import { fetchMyStartup, savePitchData } from "../../redux/slice/startupSlice";
import { transformStartupToRedux } from "../../utils/pitchDataTransforms";

export default function PitchEdit() {
  const dispatch = useDispatch();
  const pitchData = useSelector((state) => state.pitchData);
  const [saveStatus, setSaveStatus] = useState("");
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  // Load existing startup data on component mount
  useEffect(() => {
    const loadExistingData = async () => {
      if (!pitchData.isDataLoaded && isInitialLoad) {
        dispatch(setLoading(true));
        try {
          const resultAction = await dispatch(fetchMyStartup());
          if (
            fetchMyStartup.fulfilled.match(resultAction) &&
            resultAction.payload
          ) {
            const transformedData = transformStartupToRedux(
              resultAction.payload,
            );
            dispatch(loadPitchData(transformedData));
          }
        } catch (error) {
          console.error("Error loading startup data:", error);
          dispatch(setError("Failed to load existing data"));
        }
        setIsInitialLoad(false);
      }
    };

    loadExistingData();
  }, [dispatch, pitchData.isDataLoaded, isInitialLoad]);

  const pitchDataSubmission = async () => {
    setSaveStatus("saving");
    dispatch(clearError());

    try {
      const resultAction = await dispatch(savePitchData(pitchData));

      if (savePitchData.fulfilled.match(resultAction)) {
        setSaveStatus("saved");
        setTimeout(() => setSaveStatus(""), 3000);
      } else {
        setSaveStatus("error");
        dispatch(setError(resultAction.payload || "Failed to save pitch data"));
        setTimeout(() => setSaveStatus(""), 5000);
      }
    } catch (error) {
      console.error("Error submitting form data:", error);
      setSaveStatus("error");
      dispatch(setError("Failed to save pitch data"));
      setTimeout(() => setSaveStatus(""), 5000);
    }
  };

  return (
    <div className="bottomelement h-[34.4rem] overflow-hidden">
      <nav
        className="flex px-5 py-3 text-gray-700 bg-gray-50 mt-1 z-30"
        aria-label="Breadcrumb"
      >
        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
          <li className="inline-flex items-center">
            <a
              href="/"
              className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
            >
              Gayatri Enterprises
            </a>
          </li>
          <li>
            <div className="flex items-center">
              <svg
                className="rtl:rotate-180 block w-3 h-3 mx-1 text-gray-400 "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <a
                href="/"
                className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
              >
                Overview
              </a>
            </div>
          </li>
          <li aria-current="page">
            <div className="flex items-center">
              <svg
                className="rtl:rotate-180  w-3 h-3 mx-1 text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">
                Edit campaign
              </span>
            </div>
          </li>
        </ol>
      </nav>

      <div className=" overflow-hidden flex h-[35rem]">
        <div className=" flex flex-col justify-center items-center w-[23%]  gap-3 overflow-y-scroll z-10 py-[6rem]">
          <div className=" flex flex-col justify-center items-center text-start w-full mt-[5rem]  px-5">
            <h2 className=" w-full text-start text-[1.09rem] font-[700] pb-2">
              Part 1: The Pitch
            </h2>
            <Link
              to={"basics"}
              className=" w-full text-start text-[1.06rem] text-gray-500 font-[500] px-4 py-3 rounded-sm hover:bg-[#eff2f7]"
            >
              Basics
            </Link>
            <Link
              to={"highlights"}
              className=" w-full text-start text-[1.06rem] text-gray-500 font-[500] px-4 py-3 rounded-sm hover:bg-[#eff2f7]"
            >
              Highlights
            </Link>
            <Link
              to={"team"}
              className=" w-full text-start text-[1.06rem] text-gray-500 font-[500] px-4 py-3 rounded-sm hover:bg-[#eff2f7]"
            >
              Team
            </Link>
            <Link
              to={"pitch_editor"}
              className=" w-full text-start text-[1.06rem] text-gray-500 font-[500] px-4 py-3 rounded-sm hover:bg-[#eff2f7]"
            >
              Pitch
            </Link>
            <Link
              to={"featured_investor"}
              className=" w-full text-start text-[1.06rem] text-gray-500 font-[500] px-4 py-3 rounded-sm hover:bg-[#eff2f7]"
            >
              Featured Investor
            </Link>
          </div>
          <div className=" flex flex-col justify-center items-center text-start w-full px-5">
            <h2 className=" w-full text-start text-[1.09rem] font-[700] pb-2">
              Part 2: The Terms
            </h2>
            <Link
              to="contract"
              className=" w-full text-start text-[1.06rem] text-gray-500 font-[500] px-4 py-3 rounded-sm hover:bg-[#eff2f7]"
            >
              Contract
            </Link>
            <Link
              to="perks"
              className=" w-full text-start text-[1.06rem] text-gray-500 font-[500] px-4 py-3 rounded-sm hover:bg-[#eff2f7]"
            >
              Perks
            </Link>
          </div>
          <div className=" flex flex-col justify-center items-center text-start w-full px-5">
            <h2 className=" w-full text-start text-[1.09rem] font-[700] pb-2">
              Part 3: The Raise
            </h2>
            <Link
              to="funding_goal"
              className=" w-full text-start text-[1.06rem] text-gray-500 font-[500] px-4 py-3 rounded-sm hover:bg-[#eff2f7]"
            >
              Funding Goals
            </Link>
            <Link
              to="discoverability"
              className=" w-full text-start text-[1.06rem] text-gray-500 font-[500] px-4 py-3 rounded-sm hover:bg-[#eff2f7]"
            >
              Discoverability
            </Link>
            <Link
              to="extra"
              className=" w-full text-start text-[1.06rem] text-gray-500 font-[500] px-4 py-3 rounded-sm hover:bg-[#eff2f7]"
            >
              Extras
            </Link>
          </div>
        </div>
        <div className=" w-full overflow-y-scroll relative">
          <Outlet />
        </div>
      </div>

      <div className=" flex fixed w-[100%] bottom-0 h-[5rem] z-30 justify-center items-center border-2 bg-white">
        <div className="flex flex-col items-center">
          <button
            className={`gap-1 rounded-lg text-white text-[0.9rem] font-[800] flex justify-center items-center py-[0.55rem] px-6 ${
              saveStatus === "saving"
                ? "bg-gray-500 cursor-not-allowed"
                : saveStatus === "saved"
                  ? "bg-green-600"
                  : saveStatus === "error"
                    ? "bg-red-600"
                    : "bg-[#16263d] hover:bg-[#1a2b42]"
            }`}
            onClick={pitchDataSubmission}
            disabled={saveStatus === "saving"}
          >
            {saveStatus === "saving" && (
              <svg
                className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            )}
            {saveStatus === "saving"
              ? "Saving..."
              : saveStatus === "saved"
                ? "Saved!"
                : saveStatus === "error"
                  ? "Error!"
                  : "Save Changes"}
          </button>
          {pitchData.loading && (
            <div className="text-sm text-gray-500 mt-1">
              Loading existing data...
            </div>
          )}
          {pitchData.error && (
            <div className="text-sm text-red-500 mt-1">{pitchData.error}</div>
          )}
        </div>
      </div>
    </div>
  );
}
