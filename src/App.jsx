import Header from "./pages/Header/Header"
import Main from "./components/Main";
import HomePage from "./pages/HomePage/HomePage";
import Details from "./pages/Details/Details";
import NotFound from "./pages/NotFound";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/details/:name" element={<Details />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Main>
    </div>
  );
}

export default App;
