export default function Mycarousel({
    children: slides,
    anime,
    rever
  }){
  
    const clonedSlides = [
      slides[slides.length],
      ...slides,
      slides[0],
    ];
  
    return (
      <div className={`flex overflow-hidden ${rever}`} >
        <div className={`displayslide${anime} flex`}
        >
          {clonedSlides.map((slide, index) => (
            <div key={index} >
              {slide}
            </div>
          ))}
        </div>
  
        <div className={`displayslide${anime} flex`}
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