// https://www.youtube.com/watch?v=XJSOgV4VELk&ab_channel=YourCodeLab


export default function Mycarousel({
  children: slides,
}){

  const clonedSlides = [
    slides[slides.length],
    ...slides,
    slides[0],
  ];

  return (
    <div className="flex overflow-hidden" >
      <div className="slide flex"
      >
        {clonedSlides.map((slide, index) => (
          <div key={index} >
            {slide}
          </div>
        ))}
      </div>

      <div className="slide flex"
      >
        {clonedSlides.map((slide, index) => (
          <div key={index} >
            {slide}
          </div>
        ))}
      </div>
    </div>
  )
}