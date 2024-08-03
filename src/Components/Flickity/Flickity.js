import React from "react";
import Flickity from "react-flickity-component";
import "flickity/css/flickity.css";
import COL1 from "../../assets/images/Col1.jpg";
import COL2 from "../../assets/images/Col2.jpg";
import COL3 from "../../assets/images/Col3.jpg";
import COL4 from "../../assets/images/Col4.jpg";
import COL5 from "../../assets/images/Col5.jpg";
import COL6 from "../../assets/images/Col6.jpg";

const flickityOptions = {
  wrapAround: true,
  autoPlay: 2000, // 1 seconds
  prevNextButtons: false,
  pageDots: false,
  draggable: true,
};

function Collection() {
  return (
    <div className="w-full overflow-hidden py-12 sliderdiv">
      <Flickity
        className={"carousel"} // default ''
        elementType={"div"} // default 'div'
        options={flickityOptions} // takes flickity options {}
        disableImagesLoaded={false} // default false
        reloadOnUpdate // default false
        static // default false
      >
        {/* <div className=' '> */}
        <div className="carousel-cell px-7">
          <span className="slider_screen_dots">
            <span></span>
            <span></span>
            <span></span>
          </span>
          <img src={COL1} alt="slide 1" className="w-[28rem]" />
        </div>
        <div className="carousel-cell px-7">
          <span className="slider_screen_dots">
            <span></span>
            <span></span>
            <span></span>
          </span>
          <img src={COL2} alt="slide 2" className="w-[28rem]" />
        </div>
        <div className="carousel-cell px-7">
          <span className="slider_screen_dots">
            <span></span>
            <span></span>
            <span></span>
          </span>
          <img src={COL3} alt="slide 3" className="w-[28rem]" />
        </div>
        <div className="carousel-cell px-7">
          <span className="slider_screen_dots">
            <span></span>
            <span></span>
            <span></span>
          </span>
          <img src={COL4} alt="slide 4" className="w-[28rem]" />
        </div>
        <div className="carousel-cell px-7">
          <span className="slider_screen_dots">
            <span></span>
            <span></span>
            <span></span>
          </span>
          <img src={COL5} alt="slide 5" className="w-[28rem]" />
        </div>
        <div className="carousel-cell px-7">
          <span className="slider_screen_dots">
            <span></span>
            <span></span>
            <span></span>
          </span>
          <img src={COL6} alt="slide 6" className="w-[28rem]" />
        </div>
        {/* </div> */}
      </Flickity>
    </div>
  );
}

export default Collection;
