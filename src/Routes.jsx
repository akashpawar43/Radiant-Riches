import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const Frame = React.lazy(() => import("pages/index"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Frame />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
