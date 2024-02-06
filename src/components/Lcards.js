import React from "react";
import { useState, useEffect } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from "@material-tailwind/react";

export default function Lcards({ Src, Invested, Investor, Coinvested }) {
  const [Img, setImg] = useState("");

  useEffect(() => {
    // Update the src when the newImg prop changes
    setImg(Src);
  }, [Src]);

  return (
    <Card className="ml-4 mt-9 w-64  rounded-2xl">
      <CardHeader color="blue-gray" className="relative h-auto rounded-2xl">
        <img src={Img} alt="cardimage" className=" h-full" />
      </CardHeader>
      <CardBody className=" mt-5 ml-5">
        <div className="flex">
          <div className=" w-auto mr-7">
            <p className=" text-2xl font-light ">${Invested}</p>
            <p className="flex ">invested</p>
          </div>
          <div className=" w-ato ml-7">
            <p className="flex text-2xl font-light">{Investor}</p>
            <p className="flex">investor</p>
          </div>
        </div>
      </CardBody>
      <CardFooter className="pt-0 flex ml-5 mt-2 h-10 items-center">
        <div>
        <img src={Coinvested} alt="logo" className=" w-16 h-auto mr-2"/>
        </div>
        <span>co-invested</span>
      </CardFooter>
    </Card>
  );
}
