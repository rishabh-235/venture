import React from 'react'
import { Collapse, Card, CardBody } from "@material-tailwind/react";


export default function Status() {
    // const [openSection, setOpenSection] = React.useState(null);

//   const toggleOpen = (section) => {
//     setOpenSection((prevSection) => (prevSection === section ? null : section));
//   };
  return (
<div className="flex flex-col justify-start items-center ml-[3.5rem] w-[47rem] h-[20rem]">
      <div className="flex justify-start items-center w-full">
        <p className="text-[1.5rem] tracking-wide font-[500]">VIP Membership</p>
      </div>

      <div className="w-full flex flex-col justify-center items-center mt-5">
        <Collapse
        //  open={openSection !== "status"}
        open={true}
         >
          <Card>
            <CardBody>
              <button
                className="w-full h-[3.2rem] hover:bg-indigo-100 hover:bg-opacity-70 px-2"
                // onClick={() => toggleOpen("status")}
              >
                <div className="w-full flex justify-between">
                  <div className="mr-5 font-[400] tracking-wide text-[0.95rem]">
                    Status
                  </div>
                  <div className="flex">
                    <p className="mr-2 text-[0.95rem] text-gray-600">
                      
                    </p>
                  </div>
                </div>
              </button>
            </CardBody>
          </Card>
        </Collapse>
        <Collapse
        //  open={openSection === "status"} 
        className="-mt-[1.3rem]">
          <Card className="w-full my-4 mx-auto px-2 shadow-none border-[1.7px] border-gray-200 rounded-[4px]">
            <CardBody className="w-full">
              
            </CardBody>
          </Card>
        </Collapse>
      </div>
      
    </div>
  )
}
