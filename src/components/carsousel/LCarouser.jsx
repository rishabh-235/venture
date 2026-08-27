// https://www.youtube.com/watch?v=XJSOgV4VELk&ab_channel=YourCodeLab

import { useMemo } from "react";

export default function Mycarousel({
  children: slides,
}){

  const clonedSlides = useMemo(
    () => [slides[slides.length], ...slides, slides[0]],
    [slides],
  );

  return (
    <div className="flex overflow-hidden" >
      <div className="slide flex"
      >
        {clonedSlides.map((slide, index) => (
          <div key={slide?.key ?? index} >
            {slide}
          </div>
        ))}
      </div>

      <div className="slide flex"
      >
        {clonedSlides.map((slide, index) => (
          <div key={slide?.key ?? index} >
            {slide}
          </div>
        ))}
      </div>
    </div>
  )
}