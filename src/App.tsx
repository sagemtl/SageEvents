import LoadingPage from "pages/LoadingPage";
import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import RootRouter from "RootRouter";

import "./global.module.scss";

const App: React.FC = () => {
  return (
    <RecoilRoot>
      <Suspense fallback={<LoadingPage />}>
        <BrowserRouter>
          <RootRouter />
        </BrowserRouter>
      </Suspense>
    </RecoilRoot>
  );
};
export default App;
