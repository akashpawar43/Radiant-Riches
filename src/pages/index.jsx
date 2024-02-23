import React from "react";
import { Button, Img, Line, List, SelectBox, Text } from "components";
import Navbar from "./Navbar";
import Update from "./Update";
import Nav2 from "./Nav2";
import Breadcrumbs from "./Breadcrumbs";
import Hosting from "./Hosting";
import Footer from "./Footer";


const FramePage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter justify-end mx-auto w-full">
        <div className="flex flex-col items-center max-w-[1603px] mx-auto md:px-5 w-full">
          <Navbar />
          <div className="h-[2820px] sm:h-[3916px] md:h-[4606px] relative w-full">
            <div className="absolute flex flex-col md:gap-10 gap-80 inset-x-[0] justify-start mx-auto top-[0] w-full">
              <div className="h-[2375px] sm:h-[3586px] md:h-[4556px] relative w-full">
                <div className="absolute h-[2372px] sm:h-[3586px] md:h-[4556px] inset-[0] justify-center m-auto w-full">
                  
                  <div className="absolute h-[2347px] sm:h-[3586px] md:h-[4556px] inset-[0] justify-center m-auto w-full">
                    <div className="bg-gray-50 h-[1411px] mt-[147px] mx-auto w-[65%]"></div>
                    <div className="absolute bg-gray-50 flex flex-col h-full inset-[0] items-center m-auto p-[107px] md:px-10 sm:px-5 w-full">
                      <div className="flex flex-col gap-[26px] justify-start mt-[1rem] w-[78%] md:w-full">
                        <div className="flex flex-col gap-[18px] items-start justify-start md:ml-[0] ml-[22px] w-[79%] md:w-full">
                          <Nav2 />
                          <Breadcrumbs />
                        </div>
                        <Hosting />
                      </div>
                    </div>
                  </div>
                  <Update />
                </div>
                <Line className="absolute bg-gray-300 h-px inset-x-[0] mx-auto top-[6%] w-[65%]" />
                <div className="absolute bg-gray-50 bottom-[0] flex md:flex-col flex-row md:gap-10 gap-[151px] items-start justify-start p-2.5 right-[16%] w-[65%]">
                  <Text
                    className="leading-[44.00px] mb-10 md:mt-0 mt-[23px] md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-600_01 w-2/5 sm:w-full"
                    size="txtInterRegular32Bluegray60001"
                  >
                    Sign up and get exclusive special deals
                  </Text>
                  <div className=" flex flex-row w-[45%]">  
                    <div className="bg-white-A700 h-[52px] mb-[68px] md:mt-0 mt-[31px] rounded-bl-[12px] rounded-tl-[12px] w-[80%]"></div>
                    <Button
                      className="cursor-pointer mb-[68px] min-w-[97px] md:mt-0 mt-[31px] rounded-br-[12px] rounded-tr-[12px] text-center text-sm tracking-[0.70px]"
                      size="lg"
                    >
                      Sign Up
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default FramePage;
