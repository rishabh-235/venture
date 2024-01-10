import React, { Component } from "react";
import Mycarousel from "./LCarouser";
import CardDefault from "./Lcards";

export default class LandingPage extends Component {
  render() {
    const numberOfCards = 3;
    const cardsArray = Array.from({ length: numberOfCards });

    return (
      <div className="bg-gradient-to-tr from-white to-orange-200">
        <div className="flex flex-col w-auto mb-9">
          <h5 className="text-4xl font-semibold mt-10 tracking-wide">
            Invest in{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-green-500">
              Community Rounds
            </span>
          </h5>

          <p className=" text-gray-900 text-lg mt-5 px-16 tracking-wide">
            Get equaly and front row seats to the startups and small businesses
            you love-for as little as $100.
          </p>

          <div>
            <button
              type="button"
              data-ripple-light="true"
              class=" mt-5 align-middle select-none text-center transition-all  disabled:pointer-events-none font-semibold text-base tracking-wider py-3.5 px-36 rounded-lg bg-light-blue-700 text-white hover:shadow-lg hover:bg-light-blue-900 border-y border-x border-light-blue-700"
            >
              Join VentureList
            </button>
          </div>

          <div>
            <button
              type="button"
              data-ripple-light="true"
              class=" mt-3 align-middle select-none text-center transition-all  disabled:pointer-events-none font-semibold text-base tracking-wider py-3.5 px-36 rounded-lg bg-opacity-15 text-black hover:shadow-lg hover:bg-white border-y border-x border-gray-500"
            >
              Explore Startups
            </button>
          </div>
        </div>
        
        <div className="flex items-center justify-center">
          <Mycarousel autoSlideInterval={3000}>
            {cardsArray.map((_, index) => (
              
              <CardDefault key={index} />
            ))}
          </Mycarousel>
        </div>
      </div>
    );
  }
}
