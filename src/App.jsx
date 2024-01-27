import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import NewsComponent from './components/News/NewsComponent';
import ArticleDetails from './components/News/ArticleDetails';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import './App.css';
import Footer from './components/common/Footer';
import ScrollToTop from './components/common/ScrollToTop';
import NotFound from './components/ErrorBoundary/NotFound';
import Loader from './components/common/Loader';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const storedArticleTitle = sessionStorage.getItem('currentArticleTitle');

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <ErrorBoundary>
      <Router>
        <ScrollToTop />
        {isLoading ? (
          <Loader />
        ) : (
          <Routes>
            <>
              <Route path="/" element={<NewsComponent />} />
              {/* <Route path="/article/:articleTitle" element={<ArticleDetails />} /> */}
              <Route
                path="/article/:articleTitle"
                element={
                  storedArticleTitle ? (
                    <Navigate to={`/article/${storedArticleTitle}`} />
                  ) : (
                    <ArticleDetails />
                  )
                }
              />

              <Route path="*" element={<NotFound />} />
            </>
          </Routes>
        )}
        <Footer />
      </Router>
    </ErrorBoundary>
  );
};

export default App;
