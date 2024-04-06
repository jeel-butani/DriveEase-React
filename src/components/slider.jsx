import React from 'react'
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";
import car1 from '../assets/images/car1.jpg';
import car2 from "../assets/images/car2.jpg";
import car3 from "../assets/images/car3.jpg";
const Slider = () => {
  return (
    <MDBCarousel showControls showIndicators className="max-height-500">
  <MDBCarouselItem itemId={1}>
    <img
      src={car1}
      className="d-block w-100"
      alt="..."
      style={{ maxHeight: '500px', objectFit: 'cover' }}
    />
  </MDBCarouselItem>
  <MDBCarouselItem itemId={2}>
    <img
      src={car2}
      className="d-block w-100"
      alt="..."
      style={{ maxHeight: '500px', objectFit: 'cover' }}
    />
  </MDBCarouselItem>
  <MDBCarouselItem itemId={3}>
    <img
      src={car3}
      className="d-block w-100"
      alt="..."
      style={{ maxHeight: '500px', objectFit: 'cover' }}
    />
  </MDBCarouselItem>
</MDBCarousel>

  );
}

export default Slider