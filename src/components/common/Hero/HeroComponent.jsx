import { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNewsBySource, selectNews } from "../../redux/newsSlice";

const HeroComponent = () => {
  const dispatch = useDispatch();
  const { articles, loading, error, newsSources } = useSelector(selectNews);

  const fetchNews = useCallback(() => {
    const sources = ["entertainment-weekly", "bbc-news", "cnn"];
    sources.forEach((source) => {
      dispatch(fetchNewsBySource({ sources: source }));
    });
  }, [dispatch]);

  useEffect(() => {
    fetchNews();

    const intervalId = setInterval(fetchNews, 15 * 60 * 1000);

    return () => clearInterval(intervalId);
  }, [fetchNews, dispatch]);

  const getCategory = (sourceId) => {
    const source = newsSources.find((source) => source.id === sourceId);
    return source ? source.category : "Unknown Category";
  };

  const formatDate = (dateString) => {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      timeZoneName: "short",
    };
    const formattedDate = new Date(dateString).toLocaleDateString(
      "en-US",
      options
    );
    return formattedDate;
  };

  return (
    <div className="bg-white lg:mt-[100px] rounded-md bg-opacity-10 backdrop-blur-16 text-[#6c757d] p-5 my-10">
      <h1 className="lg:text-4xl text-3xl font-bold mb-2  ">Popular this week</h1>
      <div className="border-b-4 w-[40%] mb-5 border-[#F36326] "></div>

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}

      <div className=" ">
        {articles.slice(0, 4).map((article) => (
          <div
            data-aos="zoom-in"
            key={article.url}
            className="bg-gray-700 p-3 my-6 rounded duration-500 hover:scale-110 ">
            <div>
              <p className="text-sm text-gray-500">
                {formatDate(article.publishedAt)}
              </p>
              <p className="text-sm text-gray-500 mt-2">
                {getCategory(article.source.id)}
              </p>
            </div>
            <h2 className="text-lg text-[#fff] font-semibold mb-2">{article.title}</h2>

            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline mt-2 inline-block"
            >
              Read more
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroComponent;
