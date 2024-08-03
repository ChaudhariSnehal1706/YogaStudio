import React from "react";
import Flickity from "../Flickity/Flickity";
import INFO1 from "../../assets/images/Sell1.png";
import INFO2 from "../../assets/images/Sell2.jpg";
import INFO3 from "../../assets/images/Sell3.jpg";
import INFO4 from "../../assets/images/Sell4.png";

function Collection() {
  return (
    <div className="w-full overflow-hidden lg:py-32 sliderdiv">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-end p-7">
        <div className="text-white mb-4 lg:mb-0 lg:mr-12">
          <p className="text-white font-bold">READY-MADE LAYOUTS</p>
          <h2 className="text-white text-4xl lg:text-6xl mt-4">
            Collection of Inner Pages
          </h2>
        </div>
        <div className="text-white max-w-[571px]">
          <p className="p_color">
            Make your work stand out with our collection of unique and beautiful
            inner page layouts.
          </p>
        </div>
      </div>
      <Flickity />
      <div className="container mx-auto flex flex-col justify-between items-center lg:pt-40 pb-20">
        <div className="flex flex-col md:flex-row items-center justify-evenly w-full ">
          
          <div className="item lg:mt-10 md:mt-0 relative">
            <div className="absolute lg:0 top-0 lg:left-16 left-20 transform -translate-x-1/2 -translate-y-1/2 lg:w-28 w-14">
              <img src={INFO4} alt="INFO4" className="" />
            </div>
            <div className="absolute lg:right-0 right-11 lg:top-14 top-5 transform -translate-x-1/2 lg:w-16 w-8">
              <img src={INFO3} alt="INFO3" className="" />
            </div>
            <div className="absolute lg:bottom-28 bottom-11 lg:left-24 left-[6.1rem] transform -translate-x-1/2 translate-y-1/2 lg:w-80 w-28">
              <img src={INFO2} alt="INFO2" className="" />
            </div>
            <img
              src={INFO1}
              alt="INFO1"
              className="lg:w-[42.75rem] w-auto lg:p-0 md:p-0 px-14"
            />
          </div>

          <div className="px-10 py-10 md:py-0 text-left max-w-[621px]">
            <div className="content-wrap">
              <p className="text-white py-2 uppercase text-sm font-bold tracking-wider">
              GET YOUR OWN ONLINE STORE
              </p>
              <h2 className="text-white font-bold lg:text-5xl text-[1.8rem] py-3">
              Sell Like a Pro with WooCommerce
              </h2>
              <p className="text-left bef lg:w-[650px] pb-7 max-w-[540px]">
              Build your online store with WooCommerce — the most popular WordPress plugin that lets you create a digital shop for free!
              </p>
              <h2 className="bg-lime-700 hover:bg-lime-600 text-white text-center px-8 py-5 text-sm w-[9rem]">
                Shop Now
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Collection;
