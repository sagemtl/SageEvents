import LandingPage from "pages/LandingPage";
import { Route, Routes } from "react-router-dom";

const RootRouter = () => (
  <Routes>
    <Route path="/" element={<LandingPage />} />
  </Routes>
);

export default RootRouter;
