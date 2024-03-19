import React from "react";
import Slider from "react-slick";
const img1 = 'https://delhibookstore.com/wp-content/uploads/2023/12/banner-latest1-1.png';
const img2 = 'https://delhibookstore.com/wp-content/uploads/2023/12/lkj.png';
const img3 = 'https://delhibookstore.com/wp-content/uploads/2023/09/banner-121.png';

function FadeSlickSlider() {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img src={img1}  alt="..."/>
        </div>
        <div>
          <img src={img2} alt="..."/>
        </div>
        <div>
        <img src={img3} alt="..."/>
        </div>
        <div>
        <img src={img2} alt="..."/>
        </div>
      </Slider>
    </div>
  );
}

export default FadeSlickSlider;
