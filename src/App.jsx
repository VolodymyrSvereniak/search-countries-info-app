import Header from "./components/Header";
import Main from "./components/Main";
import HomePage from "./pages/HomePage";



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
