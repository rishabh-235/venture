import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
} from "@material-tailwind/react";

export default function CardDefault() {
  return (
    <Card className=" w-96 rounded-lg">
      <CardHeader color="blue-gray" className="relative h-auto">
        <img
          src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
          alt="cardimage"
          className=" h-full"
        />
      </CardHeader>
      <CardBody>
        <h5 className="text-blue-gray mb-2">
          UI/UX Review Check
        </h5>
        <p>
          The place is close to Barceloneta Beach and bus stop just 2 min by
          walk and near to &quot;Naviglio&quot; where you can enjoy the main
          night life in Barcelona.
        </p>
      </CardBody>
      <CardFooter className="pt-0 ">
        <Button className="text-cyan-500">Read More</Button>
      </CardFooter>
    </Card>
  );
}
