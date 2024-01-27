// // import { useEffect, useState } from "react";
// // import { useSelector } from "react-redux";
// // import { useNavigate, useParams } from "react-router-dom";
// // import { selectNews } from "../redux/newsSlice";
// // import { formatPublishedDate } from "../utils/dateUtils";
// // import HeaderLayout from "../common/Header/HeaderLayout";

// // const ArticleDetails = () => {
// //   const { articleTitle } = useParams();
// //   const navigate = useNavigate();
// //   const { articles } = useSelector(selectNews);
// //   const [article, setArticle] = useState(null);
// //   const [loading, setLoading] = useState(false);
// //   console.log(articleTitle)

// //   useEffect(() => {
// //     setLoading(true);
// //     if (articleTitle) {
// //       const selectedArticle = articles.find(article => article.id == articleTitle);
// //       setArticle(selectedArticle);
// //       setLoading(false);
// //     }


// //   }, []);
// //   if (loading) {
// //     return (<p>loagcdhjv grkn .kgrjh</p>)
// //   }

// //   if (!article) {
// //     return null;
// //   }


// //   return (
// //     <div>
// //       <HeaderLayout />
// //       <div className="  lg:px-20 md:py-6">
// //         <h1 className="lg:text-3xl text-2xl font-bold text-center pt-3 mb-10">
// //           {article.title}
// //         </h1>
// //         <div className="px-10 pt-2 pb-10">
// //           <div className="flex justify-center items-center">
// //             {article.urlToImage && (
// //               <img
// //                 src={article.urlToImage}
// //                 alt={article.title}
// //                 className="mb-6 rounded-lg shadow-xl "
// //               />
// //             )}
// //           </div>

// //           <p className="text-lg mt-8 mb-6">{article.description}</p>
// //           <p className="text-sm text-gray-600 mb-2">
// //             Author: {article.author || "Unknown"}
// //           </p>
// //           <p className="text-sm text-gray-600 mb-4">
// //             Published Date: {formatPublishedDate(article.publishedAt)}
// //           </p>
// //           <div className="text-lg mb-6">
// //             <p className="text-sm text-gray-600 mb-4">
// //               {formatPublishedDate(article.content)}
// //             </p>
// //           </div>
// //           <div className="flex justify-between">
// //             <div>
// //               <a
// //                 href={article.url}
// //                 target="_blank"
// //                 rel="noopener noreferrer"
// //                 className="text-blue-500 hover:underline mt-2 inline-block"
// //               >
// //                 Read more
// //               </a>
// //             </div>
// //             <div>
// //               {" "}
// //               <button
// //                 className="bg-[#F36326] text-white py-2 px-4 rounded"
// //                 onClick={() => navigate("/")}
// //               >
// //                 Back to News
// //               </button>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ArticleDetails;


// import { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import { useNavigate, useParams } from "react-router-dom";
// import { selectNews } from "../redux/newsSlice";
// import { formatPublishedDate } from "../utils/dateUtils";
// import HeaderLayout from "../common/Header/HeaderLayout";

// const ArticleDetails = () => {
//   const { articleTitle } = useParams();
//   const navigate = useNavigate();


//   const { articles, loading, error } = useSelector(selectNews);
//   const [article, setArticle] = useState(null);

//   useEffect(() => {
//     console.log("Article Title:", articleTitle);
//     console.log("All Articles:", articles);

//     const fetchData = async () => {
//       try {

//         if (articleTitle && articles.length > 0) {
//           const selectedArticle = articles.find(article => article.id.toString() === articleTitle);
//           if (selectedArticle) {
//             console.log("Selected Article:", selectedArticle);
//             setArticle(selectedArticle);
//           } else {
//             console.log("Article not found");
//           }
//         } else {
//           console.log("Invalid data or no articles available");
//         }
//       } catch (error) {
//         console.error("Error fetching articles:", error);
//       }
//     };

//     fetchData();
//   }, [articleTitle, articles]);

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   if (error) {
//     return <p>Error loading articles. Please try again later.</p>;
//   }

//   if (!article) {
//     return <p>No article found</p>;
//   }

//   return (
//     <div>
//       <HeaderLayout />
//       <div className="lg:px-20 md:py-6">
//         {/* ... rest of your component code */}
//         <h1 className="lg:text-3xl text-2xl font-bold text-center pt-3 mb-10">
//           {article.title}
//         </h1>       <div className="px-10 pt-2 pb-10">
//           <div className="flex justify-center items-center">
//             {article.urlToImage && (
//               <img
//                 src={article.urlToImage}
//                 alt={article.title}
//                 className="mb-6 rounded-lg shadow-xl "
//               />
//             )}
//           </div>

//           <p className="text-lg mt-8 mb-6">{article.description}</p>
//           <p className="text-sm text-gray-600 mb-2">
//             Author: {article.author || "Unknown"}
//           </p>
//           <p className="text-sm text-gray-600 mb-4">
//             Published Date: {formatPublishedDate(article.publishedAt)}
//           </p>
//           <div className="text-lg mb-6">
//             <p className="text-sm text-gray-600 mb-4">
//               {formatPublishedDate(article.content)}
//             </p>
//           </div>
//           <div className="flex justify-between">
//             <div>
//               <a
//                 href={article.url}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-blue-500 hover:underline mt-2 inline-block"
//               >
//                 Read more
//               </a>
//             </div>
//             <div>
//               {" "}
//               <button
//                 className="bg-[#F36326] text-white py-2 px-4 rounded"
//                 onClick={() => navigate("/")}
//               >
//                 Back to News
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ArticleDetails;




// ArticleDetails.jsx

import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { selectNews, fetchArticles } from "../redux/newsSlice";
import { formatPublishedDate } from "../utils/dateUtils";
import HeaderLayout from "../common/Header/HeaderLayout";
import NotFound from "../ErrorBoundary/NotFound";

const ArticleDetails = () => {
  const { articleTitle } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { articles, loading, error } = useSelector(selectNews);
  const [article, setArticle] = useState(null);
  console.log(articleTitle)

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Check if articles have already been loaded
        if (!articles.length) {
          // If not, dispatch the fetchArticles action to load articles
          await dispatch(fetchArticles());
        }

        // Find and set the article
        if (articleTitle && articles.length > 0) {
          const selectedArticle = articles.find(
            (article) => article.id.toString() == articleTitle
          );
          console.log(selectedArticle)
          if (selectedArticle) {
            setArticle(selectedArticle);
            // Store the current article title in session storage
            sessionStorage.setItem("currentArticleTitle", articleTitle);
          } else {
            console.log("Article not found");
          }
        } else {
          console.log("Invalid data or no articles available");
        }
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    fetchData();
  }, [articleTitle, articles, dispatch]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error || !article) {
    // Display the NotFound component in case of an error or if the article is not found
    return <NotFound />;
  }


  // if (error) {
  //   return <p>Error loading articles. Please try again later.</p>;
  // }

  // if (!article) {
  //   return <p>No article found</p>;
  // }

  return (
    <div>
      <HeaderLayout />
      <div className="lg:px-20 md:py-6">
        <h1 className="lg:text-3xl text-2xl font-bold text-center pt-3 mb-10">
          {article.title}
        </h1>
        <div className="px-10 pt-2 pb-10">
          <div className="flex justify-center items-center">
            {article.urlToImage && (
              <img
                src={article.urlToImage}
                alt={article.title}
                className="mb-6 rounded-lg shadow-xl"
              />
            )}
          </div>

          <p className="text-lg mt-8 mb-6">{article.description}</p>
          <p className="text-sm text-gray-600 mb-2">
            Author: {article.author || "Unknown"}
          </p>
          <p className="text-sm text-gray-600 mb-4">
            Published Date: {formatPublishedDate(article.publishedAt)}
          </p>
          <div className="text-lg mb-6">
            <p className="text-sm text-gray-600 mb-4">
              {formatPublishedDate(article.content)}
            </p>
          </div>
          <div className="flex justify-between">
            <div>
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline mt-2 inline-block"
              >
                Read more
              </a>
            </div>
            <div>
              <button
                className="bg-[#F36326] text-white py-2 px-4 rounded"
                onClick={() => navigate("/")}
              >
                Back to News
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetails;
