// import axios from "axios";
// import axiosRateLimit from "axios-rate-limit";
// import { createSlice, createAsyncThunk, nanoid } from "@reduxjs/toolkit";

// const apiKey = "0d122f7e1d564ff3bdaa22e689ff68a9";

// const newsApi = axiosRateLimit(
//   axios.create({
//     baseURL: "https://newsapi.org/v2",
//     headers: {
//       "X-API-KEY": apiKey,
//     },
//   }),
//   { maxRequests: 5, perMilliseconds: 1000 }
// );

// function getCurrentWeekDuration() {
//   const currentDate = new Date();
//   const currentDayOfWeek = currentDate.getDay();

//   const startDateOfWeek = new Date(currentDate);
//   startDateOfWeek.setDate(currentDate.getDate() - currentDayOfWeek);
//   startDateOfWeek.setHours(0, 0, 0, 0);

//   const endDateOfWeek = new Date(startDateOfWeek);
//   endDateOfWeek.setDate(startDateOfWeek.getDate() + 6);
//   endDateOfWeek.setHours(23, 59, 59, 999);

//   const obj = {
//     endDateOfWeek: endDateOfWeek.getTime(),
//     startDateOfWeek: startDateOfWeek.getTime(),
//   };
//   return obj;
// }

// const weekDuration = getCurrentWeekDuration();



// export const fetchNewsBySource = createAsyncThunk(
//   "news/fetchNewsBySource",
//   async (params, { rejectWithValue }) => {
//     try {
//       const response = await newsApi.get("/everything", {
//         params: {
//           ...params,
//           sortBy: "publishedAt",
//           language: "en",
//         },
//       });

//       if (response.data.status === "ok") {
//         const filteredArticles = response.data.articles.filter(
//           (article) =>
//             article.urlToImage &&
//             !article.removed &&
//             article.urlToImage.trim() !== ""
//         ).slice(0, 42).map((article) => {
//           return {
//             ...article,
//             id: nanoid()
//           }
//         })

//         return { ...response.data, articles: filteredArticles };
//       } else {
//         throw new Error("News API returned an error: " + response.data.message);
//       }
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

// export const fetchNewsBySearch = createAsyncThunk(
//   "news/fetchNewsBySearch",
//   async (query, { rejectWithValue }) => {
//     try {
//       const response = await newsApi.get("/everything", {
//         params: {
//           q: query,
//           language: "en",
//         },
//       });

//       if (response.data.status === "ok") {
//         const filteredArticles = response.data.articles.filter(
//           (article) =>
//             article.urlToImage &&
//             !article.removed &&
//             article.urlToImage.trim() !== "" &&
//             new Date(article.publishedAt).getTime() >=
//             weekDuration.startDateOfWeek &&
//             new Date(article.publishedAt).getTime() <=
//             weekDuration.endDateOfWeek
//         );

//         return { ...response.data, articles: filteredArticles };
//       } else {
//         throw new Error("News API returned an error: " + response.data.message);
//       }
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

// export const fetchNewsSources = createAsyncThunk(
//   "news/fetchNewsSources",
//   async (_, { rejectWithValue }) => {
//     try {
//       const response = await newsApi.get("/top-headlines/sources");
//       if (response.data.status === "ok") {
//         const sources = response.data.sources;
//         // console.log("News Sources:", sources);
//         return sources;
//       } else {
//         throw new Error("News API returned an error: " + response.data.message);
//       }
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

// const newsSlice = createSlice({
//   name: "news",
//   initialState: {
//     articles: [],
//     article: [],
//     headlineArticle: [],
//     headlineArticles: [],
//     selectedSource: "",
//     currentPage: 1,
//     totalPages: 1,
//     loading: false,
//     error: null,
//     newsSources: [],
//     totalResults: 0,
//   },
//   reducers: {
//     setArticles: (state, action) => {
//       state.articles = action.payload.articles;
//       state.currentPage = action.payload.currentPage;
//       state.totalPages = action.payload.totalPages;
//       state.loading = false;
//     },
//     setNewsSources: (state, action) => {
//       console.log("newsSources", action.payload);
//       state.newsSources = action.payload.newsSources;
//       state.currentPage = action.payload.currentPage;
//       state.totalPages = action.payload.totalPages;
//       state.loading = false;
//     },
//     setLoading: (state) => {
//       state.loading = true;
//     },
//     setError: (state, action) => {
//       state.error = action.payload;
//       state.loading = false;
//     },
//     setSelectedSource: (state, action) => {
//       state.selectedSource = action.payload;
//       state.currentPage = 1;
//     },
//     setCurrentPage: (state, action) => {
//       state.currentPage = action.payload;
//     },

//     // newsSources
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchNewsBySource.fulfilled, (state, action) => {
//         state.articles = action.payload.articles;
//         state.currentPage = action.payload.currentPage;
//         state.totalPages = action.payload.totalPages;
//         state.loading = false;
//         state.error = null;
//       })
//       .addCase(fetchNewsBySource.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(fetchNewsBySource.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       })
//       .addCase(fetchNewsBySearch.fulfilled, (state, action) => {
//         state.articles = action.payload.articles;
//         state.currentPage = action.payload.currentPage;
//         state.totalPages = action.payload.totalPages;
//         state.loading = false;
//         state.error = null;
//       })
//       .addCase(fetchNewsBySearch.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(fetchNewsBySearch.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       })
//       .addCase(fetchNewsSources.fulfilled, (state, action) => {
//         state.newsSources = action.payload;
//         state.loading = false;
//       })
//       .addCase(fetchNewsSources.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(fetchNewsSources.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       });
//   },
// });

// export const {
//   setArticles,
//   setLoading,
//   setError,
//   setSelectedSource,
//   setCurrentPage,
// } = newsSlice.actions;

// export const selectNews = (state) => state.news;
// export default newsSlice.reducer;




// newsSlice.jsx

import axios from "axios";
import axiosRateLimit from "axios-rate-limit";
import { createSlice, createAsyncThunk, nanoid } from "@reduxjs/toolkit";

const apiKey = "0d122f7e1d564ff3bdaa22e689ff68a9";

const newsApi = axiosRateLimit(
  axios.create({
    baseURL: "https://newsapi.org/v2",
    headers: {
      "X-API-KEY": apiKey,
    },
  }),
  { maxRequests: 5, perMilliseconds: 1000 }
);

function getCurrentWeekDuration() {
  const currentDate = new Date();
  const currentDayOfWeek = currentDate.getDay();

  const startDateOfWeek = new Date(currentDate);
  startDateOfWeek.setDate(currentDate.getDate() - currentDayOfWeek);
  startDateOfWeek.setHours(0, 0, 0, 0);

  const endDateOfWeek = new Date(startDateOfWeek);
  endDateOfWeek.setDate(startDateOfWeek.getDate() + 6);
  endDateOfWeek.setHours(23, 59, 59, 999);

  const obj = {
    endDateOfWeek: endDateOfWeek.getTime(),
    startDateOfWeek: startDateOfWeek.getTime(),
  };
  return obj;
}

const weekDuration = getCurrentWeekDuration();

export const fetchArticles = createAsyncThunk(
  "news/fetchArticles",
  async (_, { rejectWithValue }) => {
    try {
      const response = await newsApi.get("/everything", {
        params: {
          sortBy: "publishedAt",
          language: "en",
        },
      });

      if (response.data.status === "ok") {
        return response.data.articles.map((article) => ({
          ...article,
          id: nanoid(),
        }));
      } else {
        throw new Error("News API returned an error: " + response.data.message);
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchNewsBySource = createAsyncThunk(
  "news/fetchNewsBySource",
  async (params, { rejectWithValue }) => {
    try {
      const response = await newsApi.get("/everything", {
        params: {
          ...params,
          sortBy: "publishedAt",
          language: "en",
        },
      });

      if (response.data.status === "ok") {
        const filteredArticles = response.data.articles
          .filter(
            (article) =>
              article.urlToImage &&
              !article.removed &&
              article.urlToImage.trim() !== ""
          )
          .slice(0, 42)
          .map((article) => {
            return {
              ...article,
              id: nanoid(),
            };
          });

        return { ...response.data, articles: filteredArticles };
      } else {
        throw new Error("News API returned an error: " + response.data.message);
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchNewsBySearch = createAsyncThunk(
  "news/fetchNewsBySearch",
  async (query, { rejectWithValue }) => {
    try {
      const response = await newsApi.get("/everything", {
        params: {
          q: query,
          language: "en",
        },
      });

      if (response.data.status === "ok") {
        const filteredArticles = response.data.articles
          .filter(
            (article) =>
              article.urlToImage &&
              !article.removed &&
              article.urlToImage.trim() !== "" &&
              new Date(article.publishedAt).getTime() >=
              weekDuration.startDateOfWeek &&
              new Date(article.publishedAt).getTime() <=
              weekDuration.endDateOfWeek
          );

        return { ...response.data, articles: filteredArticles };
      } else {
        throw new Error("News API returned an error: " + response.data.message);
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchNewsSources = createAsyncThunk(
  "news/fetchNewsSources",
  async (_, { rejectWithValue }) => {
    try {
      const response = await newsApi.get("/top-headlines/sources");
      if (response.data.status === "ok") {
        const sources = response.data.sources;
        return sources;
      } else {
        throw new Error("News API returned an error: " + response.data.message);
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const newsSlice = createSlice({
  name: "news",
  initialState: {
    articles: [],
    article: [],
    headlineArticle: [],
    headlineArticles: [],
    selectedSource: "",
    currentPage: 1,
    totalPages: 1,
    loading: false,
    error: null,
    newsSources: [],
    totalResults: 0,
  },
  reducers: {
    setArticles: (state, action) => {
      state.articles = action.payload.articles;
      state.currentPage = action.payload.currentPage;
      state.totalPages = action.payload.totalPages;
      state.loading = false;
    },
    setNewsSources: (state, action) => {
      state.newsSources = action.payload.newsSources;
      state.currentPage = action.payload.currentPage;
      state.totalPages = action.payload.totalPages;
      state.loading = false;
    },
    setLoading: (state) => {
      state.loading = true;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    setSelectedSource: (state, action) => {
      state.selectedSource = action.payload;
      state.currentPage = 1;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticles.fulfilled, (state, action) => {
        state.articles = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchArticles.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchArticles.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    builder
      .addCase(fetchNewsBySource.fulfilled, (state, action) => {
        state.articles = action.payload.articles;
        state.currentPage = action.payload.currentPage;
        state.totalPages = action.payload.totalPages;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchNewsBySource.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchNewsBySource.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchNewsBySearch.fulfilled, (state, action) => {
        state.articles = action.payload.articles;
        state.currentPage = action.payload.currentPage;
        state.totalPages = action.payload.totalPages;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchNewsBySearch.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchNewsBySearch.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchNewsSources.fulfilled, (state, action) => {
        state.newsSources = action.payload;
        state.loading = false;
      })
      .addCase(fetchNewsSources.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchNewsSources.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const {
  setArticles,
  setLoading,
  setError,
  setSelectedSource,
  setCurrentPage,
} = newsSlice.actions;

export const selectNews = (state) => state.news;
export default newsSlice.reducer;
