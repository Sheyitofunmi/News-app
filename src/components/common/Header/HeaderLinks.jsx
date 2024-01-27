import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSelectedSource, fetchNewsBySource } from "../../redux/newsSlice";

const HeaderLinks = () => {
  const dispatch = useDispatch();
  const activeClassName =
    "font-bold text-[#fff] hover:text-[#109BE9] active:border-b-2 active:border-[#fff]";

  const handleSourceClick = (source) => {
    dispatch(setSelectedSource(source));
    dispatch(fetchNewsBySource({ sources: source }));
  };

  return (
    <ul className="hidden md:flex justify-center basis-1/2 -mt-1 ml-8 gap-x-6 md:gap-x-8 md:mr-0 text-xl">
      <motion.li className={`z-10`}>
        <NavLink
          to="/"
          onClick={() => handleSourceClick("bbc-news")}
          className={({ isActive }) => (isActive ? activeClassName : undefined)}
        >
          BBC
        </NavLink>
      </motion.li>
      <li className="z-10">
        <NavLink
          to="/"
          onClick={() => handleSourceClick("cnn")}
          className={({ isActive }) => (isActive ? activeClassName : undefined)}
        >
          CNN
        </NavLink>
      </li>
      <li className="z-10">
        <NavLink
          to="/"
          onClick={() => handleSourceClick("fox-news")}
          className={({ isActive }) => (isActive ? activeClassName : undefined)}
        >
          FOX
        </NavLink>
      </li>
      <motion.li className={`z-10`}>
        <NavLink
          to="/"
          onClick={() => handleSourceClick("news24")}
          className={({ isActive }) => (isActive ? activeClassName : undefined)}
        >
          News24
        </NavLink>
      </motion.li>
    </ul>
  );
};

export default HeaderLinks;
