import React, {useEffect} from "react";
import Myvideo1 from "./images/not_found.webm";
import Myvideo2 from "./images/not_found.mp4";
import Myimage from "./images/not_found.png";

export default function Page404() {
    useEffect(() => {
        const currentElement = document.querySelector('.error-element');
        if (currentElement) {
          const previousSibling = currentElement.previousElementSibling;
          if (previousSibling) {
            previousSibling.style.backgroundColor = 'transparent';
            previousSibling.style.color = '#9ca3af'
            previousSibling.style.border='none'
          } else {
            console.log('No previous sibling found');
          }
        }
      }, []);

  return (
    <div className="error-element fixed top-0 left-0 bg-black h-screen w-screen z-5">
      <video
        className="fixed left-1/2 -translate-x-1/2 h-full min-h-screen w-full object-cover brightness-50"
        poster={Myimage}
        autoPlay
        loop
        muted
      >
        <source src={Myvideo1} type="video/webm" />
        <source src={Myvideo2} type="video/mpm" />
      </video>
      <div className="h-screen w-screen absolute top-1/4 left-0 space-y-4 text-center leading-[3.2rem]">
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
