import Header from "./components/Header";
import Main from "./components/Main";
import HomePage from "./pages/HomePage";
import Details from "./pages/Details";
import NotFound from "./pages/NotFound";

function App() {
  
  return (
    <div className="App">
      <Header />
      <Main>
        <HomePage/>
      </Main>
    </div>
  );
}

export default App;
