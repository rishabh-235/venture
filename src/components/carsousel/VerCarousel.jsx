import { useMemo } from "react";

export default function Vercarousel({ children: slides ,anime,rever}) {

  const clonedSlides = useMemo(
    () => [slides[slides.length], ...slides, slides[0]],
    [slides],
  );

  return (
    <div className={`overflow-hidden max-h-screen  ${rever}`}>
      <div className={`slide${anime} flex flex-col-reverse`}>
        {clonedSlides.map((slide, index) => (
          <div key={slide?.key ?? index}>{slide}</div>
        ))}
      </div>
      <div className={`slide${anime}`}>
        {clonedSlides.map((slide, index) => (
          <div key={slide?.key ?? index}>{slide}</div>
        ))}
      </div>
    </div>
  );
}
