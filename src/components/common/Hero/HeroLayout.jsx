// import React from 'react'

import HeroComponent from "./HeroComponent";
import NewsDisplay from "./NewsDisplay";

function HeroLayout() {
  return (
    <div className="flex bg-[#f5f5f5] custom-clip-path lg:py-6 lg:px-6 lg:justify-between md:justify-between md:flex-row lg:flex-row flex-col ">
      <div className="lg:w-[57%] md:w-[57%]">
        {" "}
        <NewsDisplay />
      </div>
      <div className="lg:w-[37%] md:w-[40%] pb-5">
        {/* <HeroComponent /> */}
        <HeroComponent sources={["bbc-news", "cnn", "fox-news", "news24"]} />
      </div>
    </div>
  );
}

export default HeroLayout;
