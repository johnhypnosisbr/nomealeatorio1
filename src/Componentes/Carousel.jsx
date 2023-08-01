import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="centro">
      {/* <Carousel fade activeIndex={index} sm={12} md={12} lg={12} onSelect={handleSelect}> */}
      {/* <Carousel.Item> */}
      <img src="../img/hortifruti.png" className="imgRadius" />
      {/* </Carousel.Item>
        <Carousel.Item>
          <img src="../img/safra.png" className="carousel" />
        </Carousel.Item> */}
      {/* <Carousel.Item>
          <img src="../img/banner3.jpg" className="carousel" />
        </Carousel.Item> */}
      {/* </Carousel> */}
    </div>
  );
}

export default ControlledCarousel;