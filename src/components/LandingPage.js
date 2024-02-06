import React, { Component } from "react";
import Mycarousel from "./carsousel/LCarouser";
import Vercarousel from "./carsousel/VerCarousel";
import Lcards from "./Lcards";
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
    this.cardsArray = new CircularArray(9); // Set the capacity as needed
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
      <div className="bg-gradient-to-tr from-white via-white to-orange-200">
        <div className="xl:hidden">
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
            <Mycarousel children={this.cardsArray}>
              {Array.from({ length: 24 }).map((_, index) => (
                <Lcards
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

        <div className="xl:flex hidden">
          <div className="flex flex-col ml-[5vw] w-[50vw] mb-9">
            <div className="text-[4.5vw] leading-[4.5vw]  mt-28 tracking-wide flex flex-col items-start">
              <h5 className="">Invest in </h5>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-green-500">
                Community Rounds
              </span>
            </div>

            <div className="flex items-start text-[1.4vw] flex-col">
              <p className=" text-gray-700 font-semibold mt-[2.5vw]   tracking-wider ">
                Get equaly and front row seats to the startups and small
              </p>
              <p className=" text-gray-700 font-semibold mt-1   tracking-wider ">
                businesses you love-for as little as $100.
              </p>
            </div>

            <div className="flex mt-[2.5vw]">
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

          <div
            className="flex items-center justify-center w-[45%] mr-[1.17vw] -mt-9"
            style={{ rotate: "3deg" }}
          >
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-orange-100 via-orange-100 to-transparent z-10"></div>
            <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white to-transparent z-10 "></div>
            <div className="flex items-center justify-center w-72 -m-4 ">
              <Vercarousel children={this.cardsArray} anime={"U"} rever={""}>
                {Array.from({ length: 9 }).map((_, index) => (
                  <Lcards
                    key={index}
                    Src={this.cardsArray.top().src}
                    Invested={this.cardsArray.top().invested}
                    Investor={this.cardsArray.top().investor}
                    Coinvested={this.cardsArray.peek().coinvested}
                  />
                ))}
              </Vercarousel>
            </div>

            <div className="flex items-center justify-center w-72">
              <Vercarousel
                children={this.cardsArray}
                anime={"D"}
                rever={"flex flex-col-reverse"}
              >
                {Array.from({ length: 12 })
                  .map((_, index) => (
                    <Lcards
                      key={index}
                      Src={this.cardsArray.top().src}
                      Invested={this.cardsArray.top().invested}
                      Investor={this.cardsArray.top().investor}
                      Coinvested={this.cardsArray.peek().coinvested}
                    />
                  ))
                  .reverse()}
              </Vercarousel>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
