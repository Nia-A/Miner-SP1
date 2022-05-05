import React from "react";
import Frame2043 from "pages/Frame2043";
import Frame2046 from "pages/Frame2046";
import Frame2042 from "pages/Frame2042";
import Frame2045 from "pages/Frame2045";
import Frame2044 from "pages/Frame2044";
import Landingpage from "pages/Landingpage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";

const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/frame2044" element={<Frame2044 />} />
        <Route path="/frame2045" element={<Frame2045 />} />
        <Route path="/frame2042" element={<Frame2042 />} />
        <Route path="/frame2046" element={<Frame2046 />} />
        <Route path="/frame2043" element={<Frame2043 />} />
        <Route path="/dhiwise-dashboard" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default ProjectRoutes;
