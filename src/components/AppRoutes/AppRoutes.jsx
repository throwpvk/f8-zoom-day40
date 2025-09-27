import { HashRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "../../components/ScrollToTop";
import Home from "../../pages/Home";
import DefaultLayout from "../../layouts/DefaultLayout";

function AppRoutes() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default AppRoutes;
