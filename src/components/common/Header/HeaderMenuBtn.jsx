// import React from "react";
import PropTypes from "prop-types";

const HeaderMenuBtn = ({ openMenu, handleMenu }) => {
  return (
    <button
      className="z-10 block md:hidden space-y-1"
      aria-label="nav mobile menu"
      onClick={handleMenu}
    >
      <span
        className={`bg-zinc-700 dark:bg-[#11142D] w-4 h-0.5 block transition-opacity duration-500 ${openMenu ? "opacity-0" : "opacity-1"
          }`}
      ></span>
      <span
        className={`bg-zinc-700 dark:bg-[#11142D] w-6 h-0.5 block transition-transform duration-500 ${openMenu ? "translate-x-1 translate-y-2 rotate-45" : ""
          }`}
      ></span>
      <span
        className={`bg-zinc-700 dark:bg-[#11142D] w-8 h-0.5 block transition-transform duration-500 ${openMenu ? "-rotate-45" : ""
          }`}
      ></span>
    </button>
  );
};

HeaderMenuBtn.propTypes = {
  openMenu: PropTypes.bool.isRequired,
  handleMenu: PropTypes.func.isRequired,
};

export default HeaderMenuBtn;
