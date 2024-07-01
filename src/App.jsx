import { useEffect } from "react";
import Header from "./components/Header";
import Controls from "./components/Controls";
import Main from "./components/Main";
import CountriesList from "./components/CountriesList";
import { countriesCard } from "./components/countriesCard/countriesCard";
import { useDispatch, useSelector } from "react-redux";
import {
  getCountries,
  selectedCountries,
} from "./slices/countriesSlice/countriesSlice";


function App() {
  const dispatch = useDispatch();
  const { countries, loading, error } = useSelector(selectedCountries);

  useEffect(() => {
    dispatch(getCountries());
  }, []);

  console.log(countries[0]);

  return (
    <div className="App">
      <Header />
      <Main>
        <Controls />
        <CountriesList>{countriesCard(countries)}</CountriesList>
      </Main>
    </div>
  );
}

export default App;
