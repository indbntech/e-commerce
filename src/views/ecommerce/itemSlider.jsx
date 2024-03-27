import { Typography } from "@mui/material";
import React from "react";
import Slider from "react-slick";
import ItemImg from './image/9783540684107.jpg'

function ItemMultipleSider() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: false,
    speed: 500,
    autoplaySpeed: 3000,
    cssEase: "linear"
  };
  return (
    <div className="slider-container ">
      <Slider className="arrowStyle" {...settings}>
        <div>
          <Typography className="ItemDesign"><img className="ImageDesing" src={ItemImg} alt='../'/></Typography>
        </div>
        <div>
        <Typography className="ItemDesign"><img className="ImageDesing" src={ItemImg} alt='../'/></Typography>

        </div>
        <div>
        <Typography className="ItemDesign"><img className="ImageDesing" src={ItemImg} alt='../'/></Typography>

        </div>
        <div>
        <Typography className="ItemDesign"><img className="ImageDesing" src={ItemImg} alt='../'/></Typography>

        </div>
        <div>
        <Typography className="ItemDesign"><img className="ImageDesing" src={ItemImg} alt='../'/></Typography>

        </div>
        <div>
        <Typography className="ItemDesign"><img className="ImageDesing" src={ItemImg} alt='../'/></Typography>

        </div>
      </Slider>
    </div>
  );
}

export default ItemMultipleSider;

