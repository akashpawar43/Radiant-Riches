import React from "react";
import { Button, Img, Line, List, SelectBox, Text } from "components";
import Navbar from "./Navbar";
import Update from "./Update";
import Nav2 from "./Nav2";
import Breadcrumbs from "./Breadcrumbs";
import Hosting from "./Hosting";
import Footer from "./Footer";
import Signup from "./Signup";


const FramePage = () => {
  return (
    <>
      <div className="bg-gray-50 flex flex-col font-inter justify-end mx-auto w-full">
        <Navbar />
        <main>
          <div className="flex flex-col items-center md:px-5 container mx-auto">
            <div className=" flex flex-col max-w-7xl">
              <Update />
              <Nav2 />
              <Breadcrumbs />
              <Hosting />
              <Signup />
            </div>
          </div>
        </main>
        <Footer />
      </div>
      {/* <Line className=" bg-gray-300 h-px inset-x-[0] mx-auto top-[6%] w-[65%]" /> */}
    </>
  );
};

export default FramePage;
