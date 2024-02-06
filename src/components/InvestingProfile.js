import React, { Component } from "react";
import { Button } from "@material-tailwind/react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from "@material-tailwind/react";

export default class InvestingProfile extends Component {
  render() {
    return (
      <div style={{ fontFamily: "'Montserrat', sans-serif" }} className="flex flex-col items-center justify-center mt-14">
        <div className=" w-[50vw]">
          <h2 className="text-[3.12vw] tracking-wide text-gray-700 leading-[60px]">From Tomorrow's unicorns to local coffee shops</h2>
          <p className="text-[1.4vw] text-gray-900 mt-5 px-12 mb-10">invest to bring founders' dreams to life, strengthen local communities, build a portfolio of long-term angle investments, or all of the above.</p>
        </div>
        <div className=" flex  justify-center items-center ">
          <div className="-mt-28 w-[45%] flex flex-col ml-40 -mr-16">
            <div>
              <p className="mb-2 w-[13vw]  text-[1.2vw]  font-[500] text-gray-600">
                Browse by industry
              </p>
              <div className="flex flex-row items-start justify-start flex-wrap">
                <Button
                  variant="outlined"
                  className="m-[0.6vw] px-[1vw] py-[0.35rem] text-[1.1vw] tracking-wider font-[300] border-2 transition-colors hover:border-gray-400"
                >
                  Coffee
                </Button>
                <Button
                  variant="outlined"
                  className="m-[0.6vw] px-[1vw] py-[0.35rem] text-[1.1vw] tracking-wider font-[300] border-2 transition-colors hover:border-gray-400"
                >
                  Restaurant
                </Button>
                <Button
                  variant="outlined"
                  className="m-[0.6vw] px-[1vw] py-[0.35rem] text-[1.1vw] tracking-wider font-[300] border-2 transition-colors hover:border-gray-400"
                >
                  Film
                </Button>
                <Button
                  variant="outlined"
                  className="m-[0.6vw] px-[1vw] py-[0.35rem] text-[1.1vw] tracking-wider font-[300] border-2 transition-colors hover:border-gray-400"
                >
                  Tech
                </Button>
                <Button
                  variant="outlined"
                  className="m-[0.6vw] px-[1vw] py-[0.35rem] text-[1.1vw] tracking-wider font-[300] border-2 transition-colors hover:border-gray-400"
                >
                  Healthcare
                </Button>
                <Button
                  variant="outlined"
                  className="m-[0.6vw] px-[1vw] py-[0.35rem] text-[1.1vw] tracking-wider font-[300] border-2 transition-colors hover:border-gray-400"
                >
                  Music
                </Button>
                <Button
                  variant="outlined"
                  className="m-[0.6vw] px-[1vw] py-[0.35rem] text-[1.1vw] tracking-wider font-[300] border-2 transition-colors hover:border-gray-400"
                >
                  Brewery
                </Button>
                <Button
                  variant="outlined"
                  className="m-[0.6vw] px-[1vw] py-[0.35rem] text-[1.1vw] tracking-wider font-[300] border-2 transition-colors hover:border-gray-400"
                >
                  Biotech
                </Button>
                <Button
                  variant="outlined"
                  className="m-[0.6vw] px-[1vw] py-[0.35rem] text-[1.1vw] tracking-wider font-[300] border-2 transition-colors hover:border-gray-400"
                >
                  Ecommerce
                </Button>
                <Button
                  variant="outlined"
                  className="m-[0.6vw] px-[1vw] py-[0.35rem] text-[1.1vw] tracking-wider font-[300] border-2 transition-colors hover:border-gray-400"
                >
                  PCBs & B-Corps
                </Button>
                <Button
                  variant="outlined"
                  className="m-[0.6vw] px-[1vw] py-[0.35rem] text-[1.1vw] tracking-wider font-[300] border-2 transition-colors hover:border-gray-400"
                >
                  Sustainability
                </Button>
                <Button
                  variant="outlined"
                  className="m-[0.6vw] px-[1vw] py-[0.35rem] text-[1.1vw] tracking-wider font-[300] border-2 transition-colors hover:border-gray-400"
                >
                  Eduacation
                </Button>
              </div>
            </div>

            <div>
              <p className="mb-2 mt-6 w-[13vw]  text-[1.25vw]  font-[500] text-gray-600">
                Browse by founder
              </p>
              <div className="flex flex-row items-start justify-start flex-wrap">
                <Button
                  variant="outlined"
                  className="m-[0.6vw] px-[1vw] py-[0.35rem] text-[1.1vw] tracking-wider font-[300] border-2 transition-colors hover:border-gray-400"
                >
                  Minority Founder
                </Button>
                <Button
                  variant="outlined"
                  className="m-[0.6vw] px-[1vw] py-[0.35rem] text-[1.1vw] tracking-wider font-[300] border-2 transition-colors hover:border-gray-400"
                >
                  Female Founder
                </Button>
              </div>
            </div>

            <div>
              <p className="mb-2 mt-6 w-[13vw]  text-[1.25vw]  font-[500] text-gray-600">
                Browse by backers
              </p>
              <div className="flex flex-row items-start justify-start flex-wrap">
                <Button
                  variant="outlined"
                  className="m-[0.6vw] px-[1vw] py-[0.35rem] text-[1.1vw] tracking-wider font-[300] border-2 transition-colors hover:border-gray-400"
                >
                  Notable VCs
                </Button>
                <Button
                  variant="outlined"
                  className="m-[0.6vw] px-[1vw] py-[0.35rem] text-[1.1vw] tracking-wider font-[300] border-2 transition-colors hover:border-gray-400"
                >
                  Y Combinator
                </Button>
              </div>
            </div>

            <div>
              <p className="mb-2 mt-6 w-[12vw]  text-[1.25vw]  font-[500] text-gray-600">
                Browse by stage
              </p>
              <div className="flex flex-row items-start justify-start flex-wrap">
                <Button
                  variant="outlined"
                  className="m-[0.6vw] px-[1vw] py-[0.35rem] text-[1.1vw] tracking-wider font-[300] border-2 transition-colors hover:border-gray-400"
                >
                  Pre-Seed
                </Button>
                <Button
                  variant="outlined"
                  className="m-[0.6vw] px-[1vw] py-[0.35rem] text-[1.1vw] tracking-wider font-[300] border-2 transition-colors hover:border-gray-400"
                >
                  Seed
                </Button>
                <Button
                  variant="outlined"
                  className="m-[0.6vw] px-[1vw] py-[0.35rem] text-[1.1vw] tracking-wider font-[300] border-2 transition-colors hover:border-gray-400"
                >
                  Series A
                </Button>
                <Button
                  variant="outlined"
                  className="m-[0.6vw] px-[1vw] py-[0.35rem] text-[1.1vw] tracking-wider font-[300] border-2 transition-colors hover:border-gray-400"
                >
                  Series B
                </Button>
              </div>
            </div>
          </div>
          <div className=" w-1/2 h-[45vw] mr-10">
            <Card className="max-w-[32vw] overflow-hidden border-2 border-black ml-[6rem]">
              <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="m-0 h-[32vw] rounded-none"
              >
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="ui/ux review check"
                />
              </CardHeader>

              <CardBody className="flex flex-col items-start m-7">
                <a href="/" className=" text-[1.2vw] font-[600] text-black">
                  {" "}
                  Red Bay Coffee
                </a>
                <p className=" my-[3px] text-[1.11vw] font-[500]">
                  Beautiful coffee to the people
                </p>
                <p className=" my-[3px] text-[1.11vw] font-[500]">
                  213 investor invested $1,60,269
                </p>
              </CardBody>

              <CardFooter className="flex items-center justify-between -mt-3">
                <Button className=" flex justify-center items-center bg-gray-800  hover:bg-black px-5 py-2 ml-7 mb-5 text-[14px] tracking-wide rounded-[3px]">
                  Explore Coffee Shops{" "}
                  <span class="material-symbols-outlined ml-2">
                    arrow_right_alt
                  </span>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}
