// import axios from "axios";

// const apiKey = "0d122f7e1d564ff3bdaa22e689ff68a9";

// const newsApi = axios.create({
//   baseURL: "https://newsapi.org/v2",
//   headers: {
//     "X-API-KEY": apiKey,
//   },
// });

// export const fetchNewsBySource = async (source, page) => {
//   try {
//     const response = await newsApi.get("/everything", {
//       params: {
//         sources: source,
//         page: page,
//         pageSize: 10,
//       },
//     });

//     if (response.data.status === "ok") {
//       return response.data;
//     } else {
//       throw new Error("News API returned an error: " + response.data.message);
//     }
//   } catch (error) {
//     throw new Error("Failed to fetch news: " + error.message);
//   }
// };

// export const fetchNewsBySearch = async (query) => {
//   try {
//     const response = await newsApi.get("/everything", {
//       params: {
//         q: query,
//         pageSize: 10,
//       },
//     });

//     if (response.data.status === "ok") {
//       return response.data;
//     } else {
//       throw new Error("News API returned an error: " + response.data.message);
//     }
//   } catch (error) {
//     throw new Error("Failed to fetch news: " + error.message);
//   }
// };

// export const fetchNewsSources = async () => {
//   try {
//     const response = await newsApi.get("/top-headlines/sources");
//     if (response.data.status === "ok") {
//       return response.data.sources;
//     } else {
//       throw new Error("News API returned an error: " + response.data.message);
//     }
//   } catch (error) {
//     throw new Error("Failed to fetch news sources: " + error.message);
//   }
// };
