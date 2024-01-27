import { BsDashLg } from "react-icons/bs";
import { useTypewriter, Cursor } from "react-simple-typewriter";

function HeroSection() {
  const [typedText] = useTypewriter({
    words: [
      "Latest News",
      "Breaking Stories",
      "In-Depth Analysis",
      "Top Headlines",
      "Live Updates",
      "Exclusive Reports",
    ],
    loop: {},
  });
  return (
    <div className="pb-5 lg:pb-8">
      <div className="flex justify-center items-end mx-auto w-[80%] row-span-1 text-center text-black md:w-[80%] lg:leading-snug">
        <div className="flex flex-row items-center">
          <span className="font-light grid place-items-right text-orange text-center md:text-xl">
            <BsDashLg />
          </span>
          <h1 className="grid font-extrabold place-items-center  tracking-[.1rem] whitespace-nowrap text-[#F36326]  text-lg px-4">
            YOUR GO-TO NEWS SOURCE
          </h1>
          <span className="md:text-xl text-orange">
            <BsDashLg />
          </span>
        </div>
      </div>
      <h2 className="mx-auto row-span-1 leading-[64px] lg:text-5xl text-3xl text-center font-[700] md:text-5xl lg:w-[100%] lg:text-[64px] lg:tracking-[.01em] lg:leading-[60px]  md:pt-12">
        <span className="text-black inline-block w-[80%] md:w-full">
          Stay Informed with
        </span>
        <div className="text-[#109BE9] md:pt-5">
          {typedText}
          <Cursor />
        </div>
        <span className="text-black font-bold lg:text-lg pb-7 text-sm inline-block w-[80%] md:w-full  lg:pt-10">
          Anytime, Anywhere. Get the Latest Updates.
        </span>
      </h2>
    </div>
  );
}
export default HeroSection;
