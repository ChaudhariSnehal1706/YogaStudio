import React from "react";
import FX1_1 from "../../assets/images/FX1_1.jpg";
import FX1_2 from "../../assets/images/FX1_2.jpg";
import FX2_1 from "../../assets/images/FX2_1.png";
import FX2_2 from "../../assets/images/FX2_2.jpg";
import FX3_1 from "../../assets/images/FX3_1.png";
import FX3_2 from "../../assets/images/FX3_2.png";

function Flexible() {
  return (
    <div className="w-full overflow-hidden lg:py-32 main2">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-end lg:py-7 p-7">
        <div className="mb-4 lg:mb-0 lg:mr-12">
          <p className="font-bold">CUSTOMIZE EVERYTHING</p>
          <h2 className="text-4xl lg:text-5xl mt-4">Flexible to the Core</h2>
        </div>
        <div className="max-w-[571px]">
          <p className="p_color">
            Customize your theme to a great extent and make it truly your own!
            Change colors, typography, and many other visual aspects.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap justify-center lg:justify-center container mx-auto lg:gap-10 lg:p-0 p-7 flex_cd">
        {/* First div box */}
        <div className="w-full lg:w-[30%] bg-white lg:p-20 p-7 rounded-lg shadow-md text-center mb-8">
          <div className="flex justify-center gap-5">
            <img src={FX1_1} alt="FX1_1" className="lg:h-32 h-20" />
            <img src={FX1_2} alt="FX1_2" className="lg:h-32 h-20 mt-7" />
          </div>
          <p className="mt-4">
            Versatile
            Typography Options
          </p>
        </div>

        {/* Second div box */}
        <div className="w-full lg:w-[30%] bg-white lg:p-20 p-7 rounded-lg shadow-md text-center mb-8 relative">
          <div className="flex justify-center gap-5">
            <img src={FX2_1} alt="FX2_1" className="" />
            {/* Apply relative positioning to allow absolute positioning of the image */}
            <img src={FX2_2} alt="FX2_2" className="h-16 absolute  right-28 top-16" />
          </div>
          <p className="mt-4">
            Advanced
            Color Customization
          </p>
        </div>


        {/* Third div box */}
        <div className="w-full lg:w-[30%] bg-white lg:p-20 p-7 rounded-lg shadow-md text-center mb-8 relative">
          <div className="flex justify-center gap-5">
            <img src={FX3_1} alt="FX3_1" className="" />
            <img src={FX3_2} alt="FX3_2"className="h-16 absolute right-20 top-16" />
          </div>
          <p className="mt-4">
            Newsletter
            Integration & Popups
          </p>
        </div>
      </div>
    </div>
  );
}

export default Flexible;
