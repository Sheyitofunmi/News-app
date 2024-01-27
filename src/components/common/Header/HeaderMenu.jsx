import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { liVariants, ulVariants } from "../../utils/animate";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { setSelectedSource, fetchNewsBySource } from "../../redux/newsSlice";

const HeaderMenu = ({ open }) => {
  const dispatch = useDispatch();
  const activeClassName =
    "font-bold hover:text-[#109BE9] active:border-b-2 active:border-[#fff]";

  const handleSourceClick = (source) => {
    dispatch(setSelectedSource(source));
    dispatch(fetchNewsBySource({ sources: source }));
  };

  return (
    <motion.ul
      variants={ulVariants}
      animate={open ? "open" : "closed"}
      className="bg-neutral-300 dark:bg-zinc-700 dark:text-neutral-50 flex flex-col md:hidden fixed z-10 space-y-3 p-6 text-zinc-700 w-36 right-4 rounded-xl mt-4 font-semibold  overflow-hidden "
    >
      <motion.li variants={liVariants} className={`z-10`}>
        <NavLink
          to="/"
          onClick={() => handleSourceClick("bbc-news")}
          className={({ isActive }) => (isActive ? activeClassName : undefined)}
        >
          BBC
        </NavLink>
      </motion.li>
      <motion.li variants={liVariants} className="z-10">
        <NavLink
          to="/"
          onClick={() => handleSourceClick("cnn")}
          className={({ isActive }) => (isActive ? activeClassName : undefined)}
        >
          CNN
        </NavLink>
      </motion.li>
      <motion.li variants={liVariants} className="z-10">
        <NavLink
          to="/"
          onClick={() => handleSourceClick("fox-news")}
          className={({ isActive }) => (isActive ? activeClassName : undefined)}
        >
          FOX
        </NavLink>
      </motion.li>
      <motion.li variants={liVariants} className={`z-10`}>
        <NavLink
          to="/"
          onClick={() => handleSourceClick("news24")}
          className={({ isActive }) => (isActive ? activeClassName : undefined)}
        >
          News24
        </NavLink>
      </motion.li>
    </motion.ul>
  );
};

HeaderMenu.propTypes = {
  open: PropTypes.bool.isRequired,
};

export default HeaderMenu;
