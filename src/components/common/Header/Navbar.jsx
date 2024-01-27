// import { useState } from "react";
// import { Link } from "react-router-dom";
// import ReusableNavLink from "../ReusableNavLink";
// import PropTypes from "prop-types";

// const NavBar = ({ onSearch }) => {
//   const navList = [
//     { text: "IG", href: "/about" },
//     { text: "TW", href: "/" },
//     { text: "FB", href: "/contact" },
//     { text: "YT", href: "/login" },
//   ];

//   const [open, setOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [error, setError] = useState(null);

//   const handleToggle = () => {
//     setOpen(!open);
//   };

//   const handleSearchChange = (event) => {
//     setSearchQuery(event.target.value);
//     setError(null);
//   };

//   const handleSearch = () => {
//     if (searchQuery.trim() === "") {
//       setError("Please enter a search term.");
//     } else {
//       onSearch(searchQuery);
//     }
//   };

//   return (
//     <div className="relative bg-[#909090] grid grid-cols-5 items-center gap-4 sm:text-left md:flex py-4 px-3 md:flex-row md:justify-between md:px-10">
//       <Link to="/">
//         <img
//           src="/02.svg"
//           alt="Logo"
//           className="sm:h-full"
//           width={150}
//           height={50}
//         />
//       </Link>
//       <div className="col-span-5">
//         <div className="relative">
//           <img
//             src="/search-glass.svg"
//             alt="Search Image"
//             width={20}
//             height={20}
//             className="mr-2 cursor-pointer absolute left-3 top-1/2 transform -translate-y-1/2"
//             onClick={handleSearch}
//           />
//           {error && <p className="text-red-500">{error}</p>}
//           <input
//             className="pl-8 w-full px-4 py-2 border-2 border-solid border-gray-300 rounded-lg"
//             id="searchInputBar"
//             type="text"
//             placeholder="Search for..."
//             name="search"
//             aria-label="Search through communities"
//             size="35"
//             value={searchQuery}
//             onChange={handleSearchChange}
//           />
//         </div>
//       </div>

//       <nav
//         className={`${
//           open
//             ? "fixed left-0 top-0 h-full w-full p-3 z-50 bg-[#909090]"
//             : "hidden"
//         } md:relative md:block md:h-auto md:w-auto md:top-auto md:left-auto`}
//       >
//         <ul className="md:flex md:items-center md:justify-between md:gap-10">
//           {navList.map(({ text, href }) => (
//             <ReusableNavLink key={href} to={href} text={text} />
//           ))}
//         </ul>
//       </nav>

//       <button
//         onClick={handleToggle}
//         className={`z-50 col-start-5 self-end row-start-1 w-10 h-6 bg-no-repeat bg-center md:hidden ${
//           open ? "bg-close-icon" : "bg-menu-icon"
//         }`}
//         aria-label={open ? "close menu" : "open menu"}
//       ></button>
//     </div>
//   );
// };

// NavBar.propTypes = {
//   onSearch: PropTypes.func.isRequired,
// };

// export default NavBar;

import { useState } from "react";
// import { Link } from "react-router-dom";
// import ReusableNavLink from "../ReusableNavLink";
// import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { fetchNewsBySearch } from "../../redux/newsSlice";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { AiOutlineSearch } from "react-icons/ai";

const NavBar = () => {
  const dispatch = useDispatch();
  // const navList = [
  //   { text: "IG", href: "/" },
  //   { text: "TW", href: "/" },
  //   { text: "FB", href: "/" },
  //   { text: "YT", href: "/" },
  // ];

  const [searchQuery, setSearchQuery] = useState("");
  const [error, setError] = useState(null);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    setError(null);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    if (searchQuery.trim() === "") {
      setError("Please enter a search term.");
    } else {
      dispatch(fetchNewsBySearch(searchQuery));
    }
  };
  const [typedText] = useTypewriter({
    words: [
      "News Now!",
      "Flash Facts!",
      "Live Updates!",
      "Stay Informed!",
      "Swift News!",
      "Quick View!",
      "Fast Facts!",
      "Buzz In!",
      "Up Now!",
    ],
    loop: {},
  });

  return (
    <div className="relative bg-[#c3b7b7] flex justify-between md:flex-row flex-col  items-center gap-4 py-4 lg:px-10 md:px-7 px-3 ">
      <div className="flex justify-between  text-center items-center">
        <div className=" md:pb-[10px] sm:pb-[10px]">
          <div className="text-[#fff] text-2xl lg:text-3xl md:pt-7  font-semibold ">
            {typedText}
            <Cursor />
          </div>
        </div>



      </div>
      {/* <div className="flex justify-between text-center items-center">
        <nav className="">
          <ul className="flex justify-between lg:gap-10 gap-4 pt-3">

            {navList.map(({ text, href }, index) => (
              <ReusableNavLink key={index} to={href} text={text} />
            ))}

          </ul>
        </nav>
      </div> */}
      <div className="col-span-6 md:pt-9">
        <div className="relative">
          {error && <p className="text-red-500">{error}</p>}
          <form onSubmit={handleSearch}>
            <aside className="flex-1 lg:flex justify-end">

              <div className="flex flex-row">
                <input
                  type="text"
                  id="searchInputBar"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  placeholder="Search..."
                  className="flex-1 w-full rounded-l-md px-4 py-1 bg-inputsBgOne border-none placeholder:font-segoeRegular placeholder:text-sm placeholder:text-[#53565E] focus:outline-none hover:border-[#109BE9] focus:border-[#109BE9] active:border-[#109BE9]"
                />

                <button className="rounded-r-md px-3 py-[0.4rem] bg-[#53565E] ">
                  <AiOutlineSearch
                    size={25}
                    className="text-white hover:cursor-pointer"
                  />
                </button>

              </div>
            </aside>
          </form>
        </div>
      </div>




    </div>
  );
};

// NavBar.propTypes = {
//   onSearch: PropTypes.func.isRequired,
// };

export default NavBar;
