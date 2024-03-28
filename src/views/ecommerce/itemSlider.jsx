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
        <Typography className="ItemDesign"><img className="ImageDesing" src="https://delhibookstore.com/wp-content/uploads/2023/07/9789386648587-scaled.jpg" alt='../'/></Typography>

        </div>
        <div>
        <Typography className="ItemDesign"><img className="ImageDesing" src='https://delhibookstore.com/wp-content/uploads/2023/07/9789386648624-scaled.jpg' alt='../'/></Typography>

        </div>
        <div>
        <Typography className="ItemDesign"><img className="ImageDesing" src='https://delhibookstore.com/wp-content/uploads/2023/07/9789386648631-scaled.jpg' alt='../'/></Typography>

        </div>
        <div>
        <Typography className="ItemDesign"><img className="ImageDesing" src='https://delhibookstore.com/wp-content/uploads/2023/07/9789386648662-scaled.jpg' alt='../'/></Typography>

        </div>
        <div>
        <Typography className="ItemDesign"><img className="ImageDesing" src='https://delhibookstore.com/wp-content/uploads/2023/07/9789386648686-scaled.jpg' alt='../'/></Typography>

        </div>
      </Slider>
    </div>
  );
}

export default ItemMultipleSider;

