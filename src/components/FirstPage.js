import React from "react";
import logo from "../Images/logo.png";

const FirstPage = () => {
  return (
    <div className="overflow-hidden">
    <img src={logo}  className="absolute md:w-[800px] md:left-[43.8%]"/>
      <div className="flex md:justify-between md:bg-pink  md:flex-row flex-col-reverse">
        <div className="md:col-span-1">
          <img
            className="md:w-[107px] md:h-[83px] md:mt-[33px] md:ml-[100px] md:block hidden"
            src="/1.jpeg"
            alt="image 1"
          />
          <h1 className="md:w-[345px] md:h-[207px] md:mt-[111px] md:ml-[100px] font-source-sans-pro text-5xl font-bold md:text-left text-[#0E2368] mt-8">
            Discover the <span className="text-[#E23744]">Best</span> Food and
            Drinks
          </h1>
          <h1 className="md:w-[345px] md:h-[55px] md:mt-[26px] md:ml-[100px] font-open-sans md:text-left text-[#444957] my-6">
            Naturally made Healthcare Products for the better care & support of
            your body.
          </h1>
          <button className="w-[190px] h-[63px] mt-[41px] bg-[#E23744] rounded-[34px] text-white font-bold">
            Explore Now
          </button>
        </div>
        <div className="md:col-span-1">
          <img
            className="md:w-[735px] md:h-[804px] md:object-cover md:z-10"
            src="/3.jpeg"
          />
        </div>
      </div>
    </div>
  );
};

export default FirstPage;
