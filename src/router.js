import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import Accomodation from "./pages/accomodation/accomodation";
import About from "./pages/about/about";
import PageNotFound from "./pages/pageNotFound/pageNotFound";

function Router() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/accomodation/:id" element={<Accomodation />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default Router;
