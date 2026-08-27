import { useMemo } from "react";

export default function Mycarousel({
    children: slides,
    anime,
    rever
  }){

    const clonedSlides = useMemo(
      () => [slides[slides.length], ...slides, slides[0]],
      [slides],
    );

    return (
      <div className={`flex overflow-hidden ${rever}`} >
        <div className={`displayslide${anime} flex`}
        >
          {clonedSlides.map((slide, index) => (
            <div key={slide?.key ?? index} >
              {slide}
            </div>
          ))}
        </div>

        <div className={`displayslide${anime} flex`}
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