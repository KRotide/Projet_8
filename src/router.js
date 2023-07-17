import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // BrowserRouter utilise la gestion des URL du navigateur
import Home from "./pages/home/home";
import About from "./pages/about/about";
import Accomodation from "./pages/accomodation/accomodation";
import PageNotFound from "./pages/pageNotFound/pageNotFound";

function Router() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/accomodation/:id" element={<Accomodation />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default Router;
