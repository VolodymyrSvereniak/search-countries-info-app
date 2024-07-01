import Header from "./components/Header";
import Controls from "./components/Controls";
import Main from "./components/Main";
import CountriesList from "./components/CountriesList";
import Card from "./components/Card";
import { useEffect } from "react";
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
        <CountriesList>
          {countries.map((country) => {
            const countriesInfo = {
              img: country.flags.png,
              name: country.name.common,
              info: [
                {
                  title: 'Population',
                  description: country.population.toLocaleString('en-US')
                },
                {
                  title: 'Region',
                  description: country.region
                },
                {
                  title: 'Capital',
                  description: country.capital[0]
                }
              ],
            };
            return <Card key={country.cca3} {...countriesInfo}/>
          })}
        </CountriesList>
      </Main>
    </div>
  );
}

export default App;
