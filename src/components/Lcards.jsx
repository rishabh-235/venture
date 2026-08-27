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
    <Card className="ml-4 mt-5 w-64 rounded-2xl">
      <CardHeader color="blue-gray" className="relative mt-4 h-auto rounded-2xl">
        <img
          src={Img}
          alt="cardimage"
          loading="lazy"
          className="w-full h-full object-cover aspect-[864/624]"
        />
      </CardHeader>
      <CardBody>
        <div className="flex">
          <div className=" w-auto mr-7">
            <p className=" text-2xl font-light ">${Invested}</p>
            <p className="flex ">invested</p>
          </div>
          <div className=" w-ato ml-4">
            <p className="flex text-2xl font-light">{Investor}</p>
            <p className="flex">investor</p>
          </div>
        </div>
      </CardBody>
      <CardFooter className="pt-0 flex h-10 items-center">
        <div>
        <img src={Coinvested} alt="logo" loading="lazy" className=" w-16 h-auto mr-4"/>
        </div>
        <span>co-invested</span>
      </CardFooter>
    </Card>
  );
}
