import Header from "./pages/Header/Header";
import Main from "./components/Main";
import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { LoadingDots } from "./components/Loader";

const Details = lazy(() => import("./pages/Details/Details"));
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const NotFound = lazy(() => import("./pages/Errors/NotFound"));

function App() {
  return (
    <div className="App">
      <Header />
      <Main>
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<LoadingDots />}>
                <HomePage />
              </Suspense>
            }
          />
          <Route
            path="/details/:name"
            element={
              <Suspense fallback={<LoadingDots />}>
                <Details />
              </Suspense>
            }
          />
          <Route
            path="*"
            element={
              <Suspense>
                <NotFound />
              </Suspense>
            }
          />
        </Routes>
      </Main>
    </div>
  );
}

export default App;
