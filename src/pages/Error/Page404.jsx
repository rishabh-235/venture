import React, { useEffect } from "react";
import Myvideo1 from "../../components/images/not_found.webm";
import Myimage from "../../components/images/not_found_poster.jpg";

export default function Page404() {
  useEffect(() => {
    const currentElement = document.querySelector(".error-element");
    if (currentElement) {
      const previousSibling = currentElement.previousElementSibling;
      if (previousSibling) {
        previousSibling.style.backgroundColor = "transparent";
        previousSibling.style.color = "#9ca3af";
        previousSibling.style.border = "none";
      } else {
        console.log("No previous sibling found");
      }
    }
  }, []);

  return (
    <div className="error-element relative bg-black min-h-screen w-full overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover brightness-50 z-0"
        poster={Myimage}
        autoPlay
        loop
        muted
      >
        <source src={Myvideo1} type="video/webm" />
      </video>
      <div className="relative z-10 flex flex-col items-center justify-center py-20 space-y-4 text-center leading-[3.2rem] min-h-screen">
        <h1 className="block text-[3.1rem] text-white font-bold space-y-2 ">
          <span className="block">404</span>
          <span className="block">Hello? Can anyone hear me?</span>
        </h1>
        <h2 className="block text-white font-[400] text-[1.9rem] tracking-wide">
          It seems that you've wandered off the trail into a URL that doesn't
          exist.
        </h2>
      </div>
    </div>
  );
}
