import ErrorPage from "pages/ErrorPage";
import LandingPage from "pages/LandingPage";
import SuccessPage from "pages/SuccessPage";
import { Route, Routes } from "react-router-dom";

const RootRouter = () => (
  <Routes>
    <Route path="/" element={<LandingPage />} />
    <Route path="/success" element={<SuccessPage />} />
    <Route path="*" element={<ErrorPage />} />
  </Routes>
);

export default RootRouter;
