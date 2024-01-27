// import { useState } from "react";
// import { NavLink, Outlet } from "react-router-dom";
// import PropTypes from "prop-types";
// import { BsMoon, BsSunFill } from "react-icons/bs";
// import HeaderMenu from "./HeaderMenu";
// import HeaderLinks from "./HeaderLinks";
// import HeaderMenuBtn from "./HeaderMenuBtn";

// const Header = ({ theme, setTheme }) => {
//   const [openMenu, setOpenMenu] = useState(false);

//   const handleMenu = () => {
//     setOpenMenu((p) => !p);
//   };

//   const handleTheme = () => {
//     if (theme === "light") {
//       setTheme("dark");
//     } else {
//       setTheme("light");
//     }
//   };

//   return (
//     <>
//       <header
//         className={`bg-neutral-50 border-b-2 border-[#fff] border-opacity-23 dark:bg-[#c3b7b7] dark:text-neutral-50 text-zinc-700`}
//       >
//         <nav className="p-4 md:px-8 flex justify-between items-center ">
//           <p className="z-10">
//             <NavLink to="/" className="flex items-center">
//               <img src="/loogo.png" alt="NewsOpera Logo" className="w-[70%]" />
//             </NavLink>
//           </p>

//           <HeaderLinks />
//           <div className="hidden z-10 px-3 pb-3 relative md:flex justify-center">
//             <button aria-label="toggle theme" onClick={handleTheme}>
//               {theme === "light" ? (
//                 <BsSunFill className="w-8 h-8  " />
//               ) : (
//                 <BsMoon className="w-6 h-6" />
//               )}
//             </button>
//           </div>
//           <HeaderMenuBtn openMenu={openMenu} handleMenu={handleMenu} />
//         </nav>
//         <HeaderMenu theme={theme} handleTheme={handleTheme} open={openMenu} />
//       </header>
//       <Outlet />
//     </>
//   );
// };

// Header.propTypes = {
//   theme: PropTypes.string.isRequired,
//   setTheme: PropTypes.func.isRequired,
// };

// export default Header;












import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

import HeaderMenu from "./HeaderMenu";
import HeaderLinks from "./HeaderLinks";
import HeaderMenuBtn from "./HeaderMenuBtn";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleMenu = () => {
    setOpenMenu((p) => !p);
  };

  return (
    <>
      <header className="bg-neutral-50 border-b-2 border-[#fff] border-opacity-23 dark:bg-[#c3b7b7] dark:text-neutral-50 text-zinc-700">
        <nav className="p-4 md:px-8 flex justify-between items-center ">
          <p className="z-10">
            <NavLink to="/" className="flex items-center">
              <img src="/new-logo.png" alt="NewsOpera Logo" className=" w-[40%]" />
            </NavLink>
          </p>

          <HeaderLinks />
          <div className="hidden z-10 px-3 pb-3 relative md:flex justify-center">

          </div>
          <HeaderMenuBtn openMenu={openMenu} handleMenu={handleMenu} />
        </nav>
        <HeaderMenu open={openMenu} />
      </header>
      <Outlet />
    </>
  );
};



export default Header;










