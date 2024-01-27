import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { useNavigate, Link } from "react-router-dom";
import { fetchNewsBySource, selectNews } from "../../redux/newsSlice";
import AOS from 'aos';
import 'aos/dist/aos.css';

const NewsDisplay = () => {
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const { articles, loading, error, selectedSource } = useSelector(selectNews);
  const [currentArticleIndex, setCurrentArticleIndex] = useState(0);
  const [displayedArticles, setDisplayedArticles] = useState([]);





  useEffect(() => {
    AOS.init();
  }, [])

  useEffect(() => {
    if (selectedSource) {
      dispatch(fetchNewsBySource({ sources: selectedSource }));
    }
  }, [dispatch, selectedSource]);

  useEffect(() => {
    if (articles.length > 0) {
      setDisplayedArticles([
        articles[currentArticleIndex],
        articles[(currentArticleIndex + 1) % articles.length],
        articles[(currentArticleIndex + 2) % articles.length],
      ]);
    }
  }, [articles, currentArticleIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentArticleIndex((prevIndex) => (prevIndex + 1) % articles.length);
    }, 600000);

    return () => clearInterval(interval);
  }, [articles]);



  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (articles.length === 0) {
    return <p>No articles available</p>;
  }







  const firstArticle = displayedArticles[0];
  const remainingArticles = displayedArticles.slice(1);

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div

        className="mb-8 p-4 flex flex-col justify-center   ">
        <div className="relative text-center mb-4">
          {firstArticle && (
            <div >
              <img
                src={firstArticle.urlToImage}
                alt={firstArticle.title}
                key={firstArticle.id}
                className="w-full duration-500 hover:scale-110  rounded-md cursor-pointer"
              // onClick={() => navigateToDetails(firstArticle.id)}
              // onClick={() => navigateToDetails(firstArticle.id || index)}
              />

            </div>

          )}
          <div className="absolute shadow-xl top-0 right-0 bg-white lg:p-2 p-1">
            <p className="text-[#333333]  ">
              {firstArticle &&
                new Date(firstArticle.publishedAt).toLocaleDateString()}
            </p>
          </div>
        </div>


        <h2 className="text-2xl font-bold mb-2 text-[#333333]">
          {firstArticle && firstArticle.title}
        </h2>

      </div>

      <h1 className="lg:text-4xl text-3xl font-bold mb-2 text-[#6c757d]  ">Recommended Article</h1>
      <div className="border-b-4 w-[20%] mb-5 border-[#F36326] "></div>

      <div className="flex flex-col gap-6">


        {remainingArticles.map((article, index) => (
          <div
            data-aos="zoom-in-up"
            data-aos-duration="2000"
            key={index}
            className=" items-center lg:border border-gray-300 rounded-md gap-4 flex p-1 lg:p-4"
          >

            <div className="overflow-hidden w-full md:max-w-xs  lg:max-w-xs  rounded">
              <img
                src={article.urlToImage}
                alt={article.title}
                className="mb-4 rounded-md transition-transform lg:max-w-sm h-auto  duration-500 hover:scale-110 cursor-pointer"

              />
            </div>

            <div className="w-1/2">
              <h2 className="lg:text-xl text-xs text-[#333333] font-bold lg:mb-2">
                {article && article.title}
              </h2>
              <p className="text-[#333333] lg:text-xl text-xs mb-5">
                {article &&
                  new Date(article.publishedAt).toLocaleDateString()}
              </p>

            </div>




          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsDisplay;
