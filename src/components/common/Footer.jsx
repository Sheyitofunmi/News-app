// import React from 'react'
import { SiMinutemailer } from "react-icons/si";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <div className="bg-[#109BE9] py-20 pb-2  footer-clip-path text-white">
      <div className="lg:px-6 ">
        <div className="border-b border-white border-opacity-23">
          <div className="flex items-center justify-center pb-5 ">
            <div className="bg-[#fff] lg:w-3/4 md:w-3/4 w-[80%] lg:p-10 md:p-10 rounded-md">
              <div className="flex pb-8  flex-col lg:flex-row md:flex-row lg:justify-between lg:items-end md:justify-between md:items-end px-3">
                <div className=" lg:w-[55%] md:w-[55%] ">
                  <h3 className="text-[#109BE9] text-[1.5rem] lg:text-6xl md:text-6xl font-bold lg:leading-[4.5rem] md:leading-[4.5rem] tracking-tighter">
                    Sign Up for Our Newsletters
                  </h3>
                </div>
                <div className="lg:w-[40%] md:w-[40%]">
                  <p className="text-[#109BE9] font-medium lg:pt-0 md:pt-0 lg:pb-4 md:pb-4 pt-3 text-base">
                    Don’t miss to subscribe to our new feeds, kindly fill the
                    form below.
                  </p>
                </div>
              </div>

              <div className="relative overflow-hidden ">
                <form action="#">
                  <input
                    type="text"
                    placeholder="   Email address"
                    className="w-full px-3 py-2 md:py-3 bg-[#11142D] border border-[#11142D] text-white"
                  />
                  <button className="absolute right-0 bg-orange-500 py-[1rem] px-8 border border-orange-500 top-0">
                    <SiMinutemailer className="text-white text-22 transform -rotate-6" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className=" pt-5 pb-5 flex px-3 md:px-6  lg:flex-row flex-col justify-between ">
          <div className="lg:w-[20%]">
            <div className="pb-5">
              <NavLink to="/" className="flex justify-center items-center">
                <img
                  src="/loogo.png"
                  alt="NewsOpera Logo"
                  className="lg:w-[100%] w-[50%]"
                />
              </NavLink>
            </div>
            <div className="hidden lg:block text-center">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod.
              </p>
            </div>
          </div>

          <div className="lg:w-[60%] flex justify-between">
            <div className="">
              <div className="pb-3">
                <h2 className="text-[#11142D] hover:text-[#fff] active:border-b-2 active:border-[#fff] font-mulish text-lg font-[800] leading-6 tracking-tight">
                  Categories
                </h2>
              </div>
              <div>
                <ul>
                  <li className="hidden lg:block hover:text-[#11142D]">
                    International
                  </li>
                  <li className="hover:text-[#11142D]">Regional</li>
                  <li className="hover:text-[#11142D]">Politics</li>
                  <li className="hover:text-[#11142D]">Business</li>
                  <li className="hover:text-[#11142D]">Sports</li>
                  <li className="hover:text-[#11142D]">Health</li>
                </ul>
              </div>
            </div>

            <div className="">
              <div className="pb-3">
                <h2 className="text-[#11142D] hover:text-[#fff] font-mulish text-lg font-[800] leading-6 tracking-tight">
                  Company
                </h2>
              </div>
              <div>
                <ul>
                  <li className="hover:text-[#11142D]">About Us</li>
                  <li className="hover:text-[#11142D]">Careers</li>
                  <li className="hover:text-[#11142D]">Privacy Policy</li>
                  <li className="hidden lg:block hover:text-[#11142D]">
                    Terms Of Services
                  </li>
                  <li className="hover:text-[#11142D]">Contact Us</li>
                </ul>
              </div>
            </div>

            <div className="">
              <div className="pb-3">
                <h2 className="text-[#11142D] hover:text-[#fff] font-mulish text-lg font-[800] leading-6 tracking-tight">
                  Social Media
                </h2>
              </div>
              <div>
                <ul>
                  <li className="hover:text-[#11142D]">Youtube</li>
                  <li className="hover:text-[#11142D]">Instagram</li>
                  <li className="hover:text-[#11142D]">Facebook</li>
                  <li className="hover:text-[#11142D]">Twitter</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="copyright-area bg-gray-800 py-5 text-center">
        <div className="">
          <p>
            Copyright &copy; 2023, All Right Reserved{" "}
            <a href="https://twitter.com/sheyitofunmi">Sheyitofunmi</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
