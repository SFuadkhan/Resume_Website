import React, { useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import ExperiencePage from "./pages/ExperiencePage/ExperiencePage";
import ContactPage from "./pages/ContactPage/ContactPage";
import AboutMePage from "./pages/AboutMePage/AboutMePage";
import { HelmetProvider } from "react-helmet-async";
import MainLayout from "./shared/MainLayout";
import { usePagingContext } from "./context/PagingContext";
import { AnimatePresence, motion } from "framer-motion";

function App() {
  const { page } = usePagingContext();
  const navigate = useNavigate();

  useEffect(() => {
    switch (page) {
      case 1:
        navigate("/home", { replace: true });
        break;
      case 2:
        navigate("/about", { replace: true });
        break;
      case 3:
        navigate("/experience", { replace: true });
        break;
      case 4:
        navigate("/contact", { replace: true });
        break;
      default:
        break;
    }
  }, [page, navigate]);

  const getRandomDirection = () => {
    const directions = [
      { x: -100, y: 0 }, // From the left
      { x: 100, y: 0 },  // From the right
      { x: 0, y: -100 }, // From the top
      { x: 0, y: 100 },  // From the bottom
    ];
    return directions[Math.floor(Math.random() * directions.length)];
  };
  
  const PageTransition = ({ children }) => {
    const initialDirection = getRandomDirection();
  
    return (
      <motion.div
        initial={{ opacity: 0, ...initialDirection }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        exit={{ opacity: 0, ...initialDirection }}
        transition={{ duration: 0.5 }}
        style={{ width: "100%" }}
      >
        {children}
      </motion.div>
    );
  };

  const AnimatedRoutes = () => {
    const location = useLocation();

    return (
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<MainLayout />}>
            <Route
              path="/home"
              element={
                <PageTransition>
                  <HomePage />
                </PageTransition>
              }
            />
            <Route
              path="/about"
              element={
                <PageTransition>
                  <AboutMePage />
                </PageTransition>
              }
            />
            <Route
              path="/experience"
              element={
                <PageTransition>
                  <ExperiencePage />
                </PageTransition>
              }
            />
            <Route
              path="/contact"
              element={
                <PageTransition>
                  <ContactPage />
                </PageTransition>
              }
            />
            <Route
              path="*"
              element={
                <PageTransition>
                  <HomePage />
                </PageTransition>
              }
            />
          </Route>
        </Routes>
      </AnimatePresence>
    );
  };

  return (
    <HelmetProvider>
      <AnimatedRoutes />
    </HelmetProvider>
  );
}

export default App;
