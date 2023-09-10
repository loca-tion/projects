import React from "react";
import logo6 from "../Images/logo6.jpeg";

const AboutUs = () => {
  return (
    <>
      <div className="bg-blue-50 md:w-full md:h-[468px] md:mt-[185px] my-8">
        <div className="flex justify-between items-center">
          <div className=" md:block hidden">
            <img
              className="md:w-[384px] md:h-[468px] md:ml-[205px]"
              src="/10.jpeg"
            />
          </div>

          <div className=" sm:ml-[200px] sm:mt-[107px] sm:text-left text-center py-16 ml-0 px-12 md:mt-[10px]">
            <h1 className="text-[#0E2368] font-source-sans-pro text-5xl font-bold py-8">
              About Us
            </h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. t has survived
              not only five centuries.
            </p>
            <button className="w-[132px] h-[42px] py-[3px] px-[26px] bg-[#E23744] rounded-[21px] mt-8  text-white">
              Read More
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
