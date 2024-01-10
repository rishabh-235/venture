import React, { useState } from "react";

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSearchSubmit = () => {
    // Add logic here to handle the search submission
    console.log(`Searching for: ${searchValue}`);
  };

  return (
    <div className="hidden md:block flex-shrink flex-grow justify-start px-2">
      <div className="inline-block">
        <div className="inline-flex items-center max-w-full">
          <button
            className="flex items-center flex-grow-0 flex-shrink pl-2 relative w-60 border rounded-full px-1 py-1"
            type="button"
            onClick={handleSearchSubmit}
          >
            <div className="block flex-grow flex-shrink overflow-hidden">
              <input
                type="text"
                value={searchValue}
                onChange={handleSearchChange}
                placeholder="Start your search"
                className="w-full h-full border-none outline-none bg-transparent"
              />
            </div>
            <div className="flex items-center justify-center relative h-8 w-8 rounded-full">
              <svg
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="presentation"
                focusable="false"
                style={{
                  display: "block",
                  fill: "none",
                  height: "12px",
                  width: "12px",
                  stroke: "currentcolor",
                  strokewidth: "5.33333",
                  overflow: "visible",
                }}
              >
                <g fill="none">
                  <path d="m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9"></path>
                </g>
              </svg>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
