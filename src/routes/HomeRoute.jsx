import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import Loader from '../components/Loader';

const HomeRoute = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(location.pathname === '/');

  useEffect(() => {
    // Only show loader on landing page
    if (location.pathname === '/') {
      setLoading(true);
      const timer = setTimeout(() => setLoading(false), 1500);
      return () => clearTimeout(timer);
    } else {
      // Immediately hide loader for other routes
      setLoading(false);
    }
  }, [location.pathname]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <ScrollToTop />
          <Header />
          <Outlet />
          <Footer />
        </>
      )}
    </>
  );
};

export default HomeRoute;