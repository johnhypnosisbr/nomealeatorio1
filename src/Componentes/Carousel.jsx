import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel fade activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img src="../img/banner1.jpg" className="carousel"/>
      </Carousel.Item>
      <Carousel.Item>
        <img src="../img/banner2.jpg" className="carousel"/>
      </Carousel.Item>
      <Carousel.Item>
        <img src="../img/banner3.jpg" className="carousel"/>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;