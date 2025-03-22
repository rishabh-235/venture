import React from "react";
import {
  Popover,
  PopoverHandler,
  PopoverContent,
  Button,
} from "@material-tailwind/react";
 
export function InfoPopover(prop) {
  const [openPopover, setOpenPopover] = React.useState(false);
 
  const triggers = {
    onMouseEnter: () => setOpenPopover(true),
    onMouseLeave: () => setOpenPopover(false),
  };
 
  return (
    <Popover open={openPopover} handler={setOpenPopover}>
      <PopoverHandler {...triggers}>
        <Button variant="text">Profile Info</Button>
      </PopoverHandler>
      <PopoverContent {...triggers} className="z-50 max-w-[24rem]">
        <div className=" bg-orange-500">
dfklsfkn
        </div>
      </PopoverContent>
    </Popover>
  );
}