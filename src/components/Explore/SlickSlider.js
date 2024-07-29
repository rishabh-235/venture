import React, { useState } from "react";
export default function SlickSlider() {
  const [curr, setCurr] = useState(0);
  const children = [
    {
      style: "hub",
      name: "Technology",
    },
    {
      style: "groups",
      name: "B2C",
    },
    {
      style: "agriculture",
      name: "Agricultre & Agtech",
    },
    {
      style: "domain",
      name: "B2B",
    },
    {
      style: "local_mall",
      name: "Consuner Goods",
    },
    {
      style: "park",
      name: "Sustainability",
    },
    { style: "toys", name: "Transportation" },
    {
      style: "save",
      name: "Hardware",
    },
    { style: "exercise", name: "Health & Fitness" },
    {
      style: "subscriptions",
      name: "Subscription",
    },
    {
      style: "backup",
      name: "SaaS",
    },
    {
      style: "store",
      name: "Retail",
    },
    {
      style: "experiment",
      name: "Science & R&D",
    },
    {
      style: "smartphone",
      name: "Mobile Apps",
    },
    {
      style: "finance_chip",
      name: "Fintech & Finance",
    },
    {
      style: "travel",
      name: "Travel & Tourism",
    },
    {
      style: "restaurant",
      name: "Food & Beverage",
    },
    {
      style: "stethoscope",
      name: "Healthcare",
    },
    {
      style: "home_work",
      name: "Real Estate",
    },
    {
      style: "local_laundry_service",
      name: "Home Tech",
    },
    {
      style: "globe_asia",
      name: "Climate Change",
    },
    {
      style: "comedy_mask",
      name: "Entertainment",
    },
    {
      style: "newspaper",
      name: "Media",
    },
    {
      style: "nutrition",
      name: "Distillery & Vineyards",
    },
    {
      style: "robot_2",
      name: "AI",
    },
    {
      style: "query_stats",
      name: "Sport Tech",
    },
    {
      style: "mode_fan",
      name: "Clean Tech",
    },
    {
      style: "shoppingmode",
      name: "Ecommerce",
    },
    {
      style: "factory",
      name: "Manufacturing",
    },
    {
      style: "movie",
      name: "Film",
    },
    {
      style: "biotech",
      name: "Biotech",
    },
    {
      style: "shopping_cart",
      name: "Marketplace",
    },
    {
      style: "labs",
      name: "Food Tech",
    },
    {
      style: "extension",
      name: "Recreation",
    },
    {
      style: "settings",
      name: "Service",
    },
    {
      style: "liquor",
      name: "Alcohol & Vice",
    },
    {
      style: "lunch_dining",
      name: "Restaurant",
    },
    {
      style: "stadia_controller",
      name: "Games",
    },
    {
      style: "sports_and_outdoors",
      name: "Sports",
    },
    {
      style: "currency_bitcoin",
      name: "Blockchain & Web3",
    },
    {
      style: "sports_bar",
      name: "Brewery",
    },
    {
      style: "child_care",
      name: "Childcare",
    },
    {
      style: "nightlife",
      name: "Bars & Clubs",
    },
    {
      style: "festival",
      name: "Events & Festivals",
    },
    {
      style: "lightbulb",
      name: "Energy",
    },
    {
      style: "styler",
      name: "Fashion",
    },
    {
      style: "local_cafe",
      name: "Cafe & Food Truck",
    },
    {
      style: "school",
      name: "Edtech",
    },
    {
      style: "engineering",
      name: "Infrastructure & Construction",
    },
  ];

  const prev = () => {
    setCurr((prevCurr) =>
      prevCurr === 0 ? children.length - 1 : prevCurr - 1.5
    );
  };

  const next = () => {
    setCurr((prevCurr) =>
      prevCurr === children.length - 1 ? 0 : prevCurr + 1.5
    );
  };

  return (
    <div className=" h-[5rem] mt-[3rem] flex w-[78rem]">
      {/* you're using an IIFE (Immediately Invoked Function Expression) to conditionally render JSX. In that case, you can indeed use parentheses to immediately invoke the function. */}
      {(() => {
        if (curr !== 0) {
          return (
            <button
              className="mt-3 -mr-8 h-8 flex items-start z-10 "
              onClick={prev}
            >
              <span className="material-symbols-outlined border-gray-500 border-2 p-1 rounded-[5rem] text-gray-500 text-[1.2rem] hover:text-white hover:border-white hover:bg-deep-orange-400">
                arrow_left_alt
              </span>
            </button>
          );
        } else {
          return null;
        }
      })()}

      <div
        className={`overflow-hidden relative flex w-[62vw] h-[4rem] mb-12  ${
          curr && "before:absolute"
        } before:left-0 before:top-0 before:z-[2] before:h-full before:w-[7.5rem] before:bg-[linear-gradient(to_right,white_10%,rgba(255,255,255,0)_100%)] before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[7.5rem] after:-scale-x-100 after:bg-[linear-gradient(to_right,white_10%,rgba(255,255,255,0)_100%)] after:content-['']`}
      >
        {children.map((icon, i) => (
          <div
            className=" transition-transform ease-out duration-500"
            style={{ transform: `translateX(-${curr * 300}%)` }}
          >
            <div className=" w-[8.5rem] flex justify-evenly cursor-pointer">
              <div className="  text-gray-500 hover:text-light-blue-800 hover:border-b-2 hover:border-light-blue-800">
                <div className="material-symbols-outlined text-[1.7rem] font-[200] ">
                  {icon.style}
                </div>
                <div className=" text-[0.78rem] font-[600]  text-nowrap mt-1">
                  {icon.name}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {(() => {
        if (3 * curr < children.length - 5) {
          return (
            <button
              onClick={next}
              className=" mt-3 -ml-8 h-8 flex items-start z-10"
            >
              <span className="material-symbols-outlined border-gray-500 border-2 p-1 rounded-[5rem] text-gray-500 text-[1.2rem] hover:text-white hover:border-white hover:bg-deep-orange-400">
                {" "}
                arrow_right_alt
              </span>
            </button>
          );
        } else {
          return null;
        }
      })()}
    </div>
  );
}
