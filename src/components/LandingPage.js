import React, { Component } from "react";

export default class LandingPage extends Component {
  render() {
    return (
      <div className="flex flex-row bg-gradient-to-tr from-white to-orange-200 justify-between items-center">
        <div className=" w-auto">
          <h5 className="text-5xl text-gray-950 mt-10">
            Invest in{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-green-500">
              Community Rounds
            </span>
          </h5>

          <p className=" text-gray-900 text-lg mt-6 px-16">
            Get equaly and front row seats to the startups and small businesses
            you love-for as little as $100.
          </p>
        </div>
      </div>
    );
  }
}
