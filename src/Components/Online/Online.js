import React from "react";
import ON1 from "../../assets/images/ON1.png";
import ON2 from "../../assets/images/ON2.png";
import ON3 from "../../assets/images/ON3.png";
import ON4 from "../../assets/images/ON4.png";
import ON5 from "../../assets/images/ON5.png";
import ON6 from "../../assets/images/ON6.png";
import ON7 from "../../assets/images/ON7.png";
import ON8 from "../../assets/images/ON8.png";
import ON9 from "../../assets/images/ON9.png";
// import collapse1 from "../../assets/images/collapse1.png";
// import collapse2 from "../../assets/images/collapse2.png";

function Online() {
  return (
    <div className="main3">
      <div className="container mx-auto  lg:pt-40 pb-20">
        <div className="flex flex-col md:flex-row items-center justify-evenly w-full lg:gap-52  ">

          <div className="px-10 py-10 md:py-0 text-left max-w-[621px]">
            <div className="content-wrap">
              {/* <p className=" py-2 uppercase text-sm font-bold tracking-wider">
                GET YOUR OWN ONLINE STORE
              </p> */}
              <img src={ON5} alt="ON5" />
              <h2 className=" font-bold lg:text-5xl text-[1.8rem] py-3">
              Our Online Shop Supports Payments with Cryptocurrencies
              </h2>
              <p className="text-left bef lg:w-[650px] pb-7 max-w-[540px]">
              Pay for the goods with just one click! Elegro plugin makes it super easy to pay with cryptocurrencies!
              </p>
              <h2 className="bg-orange-700 hover:bg-orange-600 text-white text-center px-8 py-5 text-sm w-[9rem]">
                View Now
              </h2>
            </div>
          </div>

          <div className="item lg:mt-10 md:mt-0 ">
            <div className="flex flex-wrap justify-start items-start">
              <div className="inner_item lg:w-[160px] lg:h-[160px] w-[120px] h-[120px] bg-white flex flex-col justify-center items-center rounded-full mb-10 ml-10 relative z-10">
                <img src={ON1} alt="ON1" />
                {/* <img src={collapse2} alt="collapse1" className="curve1" /> */}
              </div>
              <div className="inner_item lg:w-[160px] lg:h-[160px] w-[120px] h-[120px] bg-white flex flex-col justify-center items-center rounded-full mb-10 ml-10 relative z-10">
                <img src={ON2} alt="ON2" />
              </div>
              <div className="inner_item lg:w-[160px] lg:h-[160px] w-[120px] h-[120px] bg-white flex flex-col justify-center items-center rounded-full mb-10 ml-10 relative z-10">
                <img src={ON3} alt="ON3" />
              </div>
              <div className="inner_item lg:w-[160px] lg:h-[160px] w-[120px] h-[120px] bg-white flex flex-col justify-center items-center rounded-full mb-10 ml-10 relative z-10">
                <img src={ON4} alt="ON4" />
              </div>
              <div className="inner_item lg:w-[160px] lg:h-[160px] w-[120px] h-[120px] bg-white flex flex-col justify-center items-center rounded-full mb-10 ml-10 relative z-10">
                <img src={ON5} alt="ON5" />
              </div>
              <div className="inner_item lg:w-[160px] lg:h-[160px] w-[120px] h-[120px] bg-white flex flex-col justify-center items-center rounded-full mb-10 ml-10 relative z-10">
                <img src={ON6} alt="ON6" />
                {/* <img src={collapse1} alt="collapse2" className="curve curve2" /> */}
              </div>
              <div className="inner_item lg:w-[160px] lg:h-[160px] w-[120px] h-[120px] bg-white flex flex-col justify-center items-center rounded-full mb-10 ml-10 relative z-10">
                <img src={ON7} alt="ON7-coin" />
              </div>
              <div className="inner_item lg:w-[160px] lg:h-[160px] w-[120px] h-[120px] bg-white flex flex-col justify-center items-center rounded-full mb-10 ml-10 relative z-10">
                <img src={ON8} alt="ON8" />
              </div>
              <div className="inner_item lg:w-[160px] lg:h-[160px] w-[120px] h-[120px] bg-white flex flex-col justify-center items-center rounded-full mb-10 ml-10 relative z-10">
                <img src={ON9} alt="ON9" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Online;
