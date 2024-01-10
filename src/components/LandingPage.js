import React, { Component } from "react";
import Mycarousel from "./LCarouser";
import CardDefault from "./Lcards";
import CircularArray from "./DataStructures/CircularArray";
import img1 from "./images/Lcarousel_img/adfontesmedia-card.webp";
import img2 from "./images/Lcarousel_img/curlmix-card.webp";
import img3 from "./images/Lcarousel_img/doorvest-card.webp";
import img4 from "./images/Lcarousel_img/levels-card.webp";
import img5 from "./images/Lcarousel_img/mercury-card.webp";
import img6 from "./images/Lcarousel_img/replit-card.webp";
import img7 from "./images/Lcarousel_img/substack-card.webp";
import img8 from "./images/Lcarousel_img/synthesis-card.webp";
import img9 from "./images/Lcarousel_img/wedio-card.webp";
import logo1 from "./images/Lcarousel_img/gaingels-logo-gray.webp";
import logo2 from "./images/Lcarousel_img/backstage-capital-logo-gray.webp";
import logo3 from "./images/Lcarousel_img/m13-logo-gray.webp";
import logo4 from "./images/Lcarousel_img/a16z-logo-gray.webp";
import logo5 from "./images/Lcarousel_img/yc-logo-gray.webp";
import logo6 from "./images/Lcarousel_img/fj-labs-logo-gray.webp";
import logo7 from "./images/Lcarousel_img/founderment-logo-gray.webp";

export default class LandingPage extends Component {
  constructor(props) {
    super(props);

    // Create a CircularArray to manage the props for CardDefault
    this.cardsArray = new CircularArray(12); // Set the capacity as needed
    this.cardsArray.enqueue({
      src: img1,
      invested: "595877",
      investor: "896",
      coinvested: logo1,
    });
    this.cardsArray.enqueue({
      src: img2,
      invested: "4537310",
      investor: "6948",
      coinvested: logo2,
    });
    this.cardsArray.enqueue({
      src: img3,
      invested: "383219",
      investor: "574",
      coinvested: logo3,
    });
    this.cardsArray.enqueue({
      src: img4,
      invested: "4999989",
      investor: "1440",
      coinvested: logo4,
    });
    this.cardsArray.enqueue({
      src: img5,
      invested: "4914037",
      investor: "24543",
      coinvested: logo4,
    });
    this.cardsArray.enqueue({
      src: img6,
      invested: "5240140",
      investor: "1220",
      coinvested: logo5,
    });
    this.cardsArray.enqueue({
      src: img7,
      invested: "7809219",
      investor: "6688",
      coinvested: logo4,
    });
    this.cardsArray.enqueue({
      src: img8,
      invested: "2987382",
      investor: "1125",
      coinvested: logo6,
    });
    this.cardsArray.enqueue({
      src: img9,
      invested: "156867",
      investor: "83",
      coinvested: logo7,
    });
  }

  render() {
    return (
      <div className="bg-gradient-to-tr from-white to-orange-200">
        <div className="hidden">
          <div className="flex flex-col w-auto mb-9">
            <h5 className="text-4xl font-semibold mt-7 tracking-wide">
              Invest in{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-green-500">
                Community Rounds
              </span>
            </h5>

            <p className=" text-gray-900 text-lg mt-5 px-16 tracking-wide">
              Get equaly and front row seats to the startups and small
              businesses you love-for as little as $100.
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
            <Mycarousel autoSlideInterval={5000} children={this.cardsArray}>
              {Array.from({ length: 12 }).map((_, index) => (
                <CardDefault
                  key={index}
                  Src={this.cardsArray.peek().src}
                  Invested={this.cardsArray.peek().invested}
                  Investor={this.cardsArray.peek().investor}
                  Coinvested={this.cardsArray.peek().coinvested}
                />
              ))}
            </Mycarousel>
          </div>
        </div>

        <div className=" ml-24">
          <div className="flex">
            <div className="flex flex-col w-auto mb-9">
              <h5 className="text-7xl mt-28 tracking-wide flex flex-col items-start">
                Invest in{" "}
                <p className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-green-500">
                  Community Rounds
                </p>
              </h5>

              <div className="flex items-start flex-col">
                <p className=" text-gray-700 text-xl font-semibold mt-7   tracking-wider ">
                  Get equaly and front row seats to the startups and small
                </p>
                <p className=" text-gray-700 text-xl font-semibold mt-1   tracking-wider ">
                  businesses you love-for as little as $100.
                </p>
              </div>

              <div className="flex mt-7">
                <div className=" mr-2">
                  <button
                    type="button"
                    data-ripple-light="true"
                    class=" mt-5 align-middle select-none text-center transition-all  disabled:pointer-events-none font-semibold text-base tracking-wider py-3.5 px-14 rounded-lg bg-light-blue-700 text-white hover:shadow-lg hover:bg-light-blue-900 border-y border-x border-light-blue-700"
                  >
                    Join VentureList
                  </button>
                </div>

                <div className=" ml-2">
                  <button
                    type="button"
                    data-ripple-light="true"
                    class=" mt-5 align-middle select-none text-center transition-all  disabled:pointer-events-none font-semibold text-base tracking-wider py-3.5 px-14 rounded-lg bg-opacity-15 text-black hover:shadow-lg hover:bg-white border-y border-x border-gray-500"
                  >
                    Explore Startups
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    );
  }
}
