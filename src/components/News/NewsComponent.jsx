import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { formatPublishedDate } from "../utils/dateUtils";
import Pagination from "../common/Pagination";
import styles from "./NewsComponent.module.css";


import {
  fetchNewsBySource,
  fetchNewsSources,
  selectNews,
  setSelectedSource,
  setCurrentPage,
} from "../redux/newsSlice";
import HeroSection from "../common/HeroSection";
import HeaderLayout from "../common/Header/HeaderLayout";
import HeroLayout from "../common/Hero/HeroLayout";

const NewsComponent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const { articles, selectedSource, loading, error, newsSources } =
    useSelector(selectNews);

  // const pageSize = 15;
  const articlesPerPage = 6;
  const start = (page - 1) * articlesPerPage;
  const end = page * articlesPerPage;

  const totalArticles = articles.length;
  console.log("totalArticles", totalArticles);
  const totalPages = Math.ceil(totalArticles / articlesPerPage);

  useEffect(() => {
    dispatch(fetchNewsSources());
    dispatch(fetchNewsBySource({ q: "news" }))
  }, [dispatch]);


  const handleSourceChange = (selectedSource) => {
    dispatch(setSelectedSource(selectedSource));
    dispatch(setCurrentPage(1));
  };

  const navigateToDetails = (title) => {
    navigate(`/article/${title} `);
  };







  return (
    <div>
      <HeaderLayout />
      <HeroLayout />
      <div className={`${styles.newsContainer} p-3 mt-4`}>
        <HeroSection />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mb-20">
          <div className="mb-6 pl-3 relative">
            <label
              htmlFor="source"
              className="block mb-2 text-xl font-[700] text-[#263238]"
            >
              Select News Source:
            </label>
            <div className="border-b-4 w-[20%] mb-5 border-[#F36326] "></div>

            <div className="relative inline-block w-full">
              <select
                id="source"
                className="mt-1 p-5 block w-full text-[14px] border-2 border-[#109BE9] rounded-md bg-white shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm appearance-none"
                value={selectedSource}
                onChange={(e) => handleSourceChange(e.target.value)}
              >
                <option value="">All Sources</option>
                {newsSources.map((source) => (
                  <option key={source.id} value={source.id}>
                    {source.name}
                  </option>
                ))}
              </select>
              {/* Custom arrow styling */}
              <div className="absolute inset-y-0 right-0 flex items-center pr-5 pointer-events-none">
                <svg
                  className="fill-current h-4 w-4 text-[#109BE9]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 12l-6-6-1 1 7 7 7-7-1-1-6 6z" />
                </svg>
              </div>
            </div>
          </div>

        </div>

        <div className="text-center">
          {loading ? (
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          ) : (
            <p>{/* Page {currentPage} of {totalPages} */}</p>
          )}
        </div>

        {error ? (
          <p className="text-danger">Error: {error.message}</p>
        ) : (
          <ul className="list-none grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3  gap-6">
            {articles.slice(start, end).map((article) => (
              <li
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
                key={article.id}

                className={`${styles.listContainer} float-left object-cover  duration-500 hover:scale-110 overflow-hidden rounded-lg  shadow-lg  bg-blend-lighten w-full px-[0 1.7rem]`}
                style={{
                  backgroundImage: `url(${article.urlToImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  minHeight: "540px",
                  position: "relative",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <Link to={`/article/${article.id}`} className="bg-gradient-to-b from-gray-500 via-transparent to-gray-700            absolute w-full h-full ">
                  <div className="p-[1em]">
                    <div
                      className={`${styles.date_time} float-left absolute top-0 pt-2 text-sm text-[#fff]`}
                    >
                      {formatPublishedDate(article.publishedAt)}
                    </div>
                  </div>

                  <div className={`${styles.content_news}  pt-3 pb-24`}>
                    <div className=" p-2">
                      <p className=" text-lg font-mulish text-[#fff] font-normal leading-[110%] tracking-[0.096px]">
                        Author: {article.author || "Unknown"}
                      </p>
                    </div>

                    <div className="p-2">
                      <h3 className="font-mulish text-[#fff] text-2xl font-bold leading-7">
                        {article.title}
                      </h3>
                    </div>

                    <div className="text-center">
                      <button
                        className="font-[800] cursor-pointer text-xl text-red-600 "
                        onClick={() => navigateToDetails(article.id)}
                      >
                        Read More
                      </button>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        )}

        <Pagination
          page={page}
          setPage={setPage}
          data={articles}
          dataPerPage={articlesPerPage}
          totalPages={totalPages}
        />
      </div>
    </div>
  );
};

export default NewsComponent;

// <ul className="list-none grid lg:grid-cols-4  md:grid-cols-3  grid-cols-2  gap-6">
//   {articles.slice(start, end).map((article, index) => (
//     // <Tilt key={article.id || index} option={customOptions}>
//     <li
//       key={article.id || index}
//       onClick={() => navigateToDetails(article.id || index)}
//       className="mb-4 flex flex-col bg-gray-200 rounded-md lg:h-[534px] md:h-[534px] w-full justify-between   text-start"
//     >
//       {/* bg-gray-200 */}
//       <div className="relative">
//         {article.urlToImage && (
//           <img
//             src={article.urlToImage}
//             alt={article.title}
//             className="  w-full lg:h-[312px] md:h-[312px] object-cover cursor-pointer"
//             // onClick={() => navigateToDetails(index)}
//           />
//         )}
//         <div className="absolute bottom-0 left-0 py-3 px-5 bg-[#FFFFFF]">
//           {" "}
//           Right
//         </div>
//       </div>
//       <div className="p-2">
//         <h3 className="font-mulish text-title-text text-2xl font-bold  leading-7">
//           {article.title}
//         </h3>
//       </div>

//       <div className="flex justify-between p-2">
//         <p className="text-[#9A9AB0] font-mulish pb-3 text-xs font-normal  leading-[110%] tracking-[0.096px]">
//           {formatPublishedDate(article.publishedAt)}
//         </p>
//         <p className="text-[#9A9AB0] text-xs font-mulish font-normal  leading-[110%] tracking-[0.096px]">
//           {" "}
//           {article.author || "Unknown"}
//         </p>
//       </div>

//       {/* <button
//         className="bg-blue-500 text-white py-2 px-4 rounded"
//         onClick={() => navigateToDetails(index)}
//       >
//         Read more
//       </button> */}
//     </li>
//     // </Tilt>
//   ))}
// </ul>
