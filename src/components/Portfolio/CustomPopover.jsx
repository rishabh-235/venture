import React from "react";
import {
  Popover,
  PopoverHandler,
  PopoverContent,
} from "@material-tailwind/react";
 
export function PopoverWithDescription() {
  const [openPopover, setOpenPopover] = React.useState(false);
 
  const triggers = {
    onMouseEnter: () => setOpenPopover(true),
    onMouseLeave: () => setOpenPopover(false),
  };
 
  return (
    <Popover open={openPopover} handler={setOpenPopover} placement="right">
      <PopoverHandler {...triggers}>
        <button><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#999999"><path d="M440-280h80v-240h-80v240Zm40-320q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm0 520q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z"/></svg></button>
      </PopoverHandler>
      <PopoverContent {...triggers} className="z-50 max-w-[26rem] bg-gray-800 text-white">
        <div>
          Your portfolio value is an estimate of the sum of all your completed Wefunder investments. Investments are valued based on their most recent financing or liquidity event.
        </div>
      </PopoverContent>
    </Popover>
  );
}