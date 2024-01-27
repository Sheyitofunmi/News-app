// import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function ReusableNavLink({ to, text }) {
  return (
    <Link
      to={to}
      className=" text-[#fff] mb-4 hover:text-[#109BE9] active:font-bold active:border-b-2 active:border-[#fff]"
    >
      {text}
    </Link>
  );
}

ReusableNavLink.propTypes = {
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default ReusableNavLink;
