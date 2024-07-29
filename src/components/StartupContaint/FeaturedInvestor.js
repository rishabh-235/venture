import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
} from "@material-tailwind/react";

export function TestimonialCard() {
  return (
    <Card color="transparent" shadow={false} className="w-full mt-8 p-3 border-[1px] border-gray-200">
      <CardHeader
        color="transparent"
        floated={false}
        shadow={false}
        className="mx-0 flex items-center gap-4"
      >
        <img
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
          alt="tania andrew"
          className=" rounded-[10rem] w-[4.5rem] h-[4.5rem]"
        />
        <div className="flex w-full flex-col gap-0.5">
          <div className="flex items-center justify-between">
            <div className=" flex justify-between items-center">
              <div className=" flex flex-col justify-center items-start">
                <Typography variant="h5" color="blue-gray">
                  Tania Andrew
                </Typography>
                <div className=" text-start text-[0.92rem] text-red-800 font-[600] mt-1">
                  Frontend Lead @ Google
                </div>
              </div>
              <button className=" ml-7 border-[1px] border-gray-500 rounded-[0.3rem] text-[0.8rem] font-[600] text-black w-[4.7rem] h-[1.87rem]">
                Follow
              </button>
            </div>
            <div className=" flex justify-end mr-4">
              <p className=" text-[0.9rem] font-[600] text-gray-500">
                invested ₹18.8L
              </p>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardBody className="mb-3 p-0 mt-4">
        <div className=" text-start text-[0.9rem] text-gray-800 tracking-wide font-[600]">
          An Architect with a passion for Motorbikes and Travelling the world
        </div>
        <div className=" mt-9 text-start text-gray-700 tracking-wide font-[500]">
          “I have researched this company and studied the Luxury Electric
          Motorcycle Current Market. There is no competition with this unique
          design aesthetically and mechanically. This is the best and i have
          decided to invest in the best. I am very confident in more than 5
          times profit as a return of investment within the next couple of
          years. This is a golden opportunity not to bee missed. The founder is
          a very experienced motorcycle designer annd enthusiast.”
        </div>
      </CardBody>
    </Card>
  );
}
