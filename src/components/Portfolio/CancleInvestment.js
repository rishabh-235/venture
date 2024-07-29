import React from "react";
import { Collapse, Card, CardBody } from "@material-tailwind/react";

export default function CollapseDefault(props) {
  const [open, setOpen] = React.useState(false);

  const toggleOpen = () => setOpen((cur) => !cur);

  return (
    <>
      <button
        onClick={toggleOpen}
        className="flex justify-center items-center text-[0.95rem] tracking-widest font-[600] text-light-blue-800 hover:text-light-blue-900"
      >
        {open ? "Hide canceled investments " : "Show canceled investments"}
        <span class="ml-1 material-symbols-outlined">
            {open ? "keyboard_arrow_down" : "keyboard_arrow_up"}
        </span>
      </button>
      <Collapse open={open} className="w-[20rem] -ml-[3.4rem] mt-[0.7rem]">
        <Card className="flex justify-start items-start my-4 mx-auto w-8/12 shadow-none">
          <CardBody>
            <p className="text-gray-400 text-[1.03rem] font-[500]">
              No canceled investments
            </p>
          </CardBody>
        </Card>
      </Collapse>
    </>
  );
}
