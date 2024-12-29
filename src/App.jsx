import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import ExperiencePage from "./pages/ExperiencePage/ExperiencePage";
import ContactPage from "./pages/ContactPage/ContactPage";
import AboutMePage from "./pages/AboutMePage/AboutMePage";
import { HelmetProvider } from "react-helmet-async";
import MainLayout from "./shared/MainLayout";
import PagingContextProvider from "./context/PagingContext";

function App() {
  return (
    <>
      <PagingContextProvider>
      <HelmetProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route path="/home" index element={<HomePage />}></Route>
              <Route path="/about" element={<AboutMePage />}></Route>
              <Route path="/experience" element={<ExperiencePage />}></Route>
              <Route path="/contact" element={<ContactPage />}></Route>
              <Route path="*" element={<HomePage />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </HelmetProvider>
      </PagingContextProvider>
    </>
  );
}

export default App;
