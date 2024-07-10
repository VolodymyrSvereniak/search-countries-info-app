import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getBorderCountryDetails,
  getCountryDetails,
  selectedCountryDetails,
} from "../../../slices/countriesSlice/countryDetailsSlice";
import DetailsInfo from "./DetailsInfo";

const Info = () => {
  const dispatch = useDispatch();
  const { name } = useParams();
  const { country } = useSelector(selectedCountryDetails);
  console.log(country);
  console.log(name);

  function handleBorderCountry(code) {
    dispatch(getBorderCountryDetails(code));
  }

  useEffect(() => {
    dispatch(getCountryDetails(name));
  }, [name, dispatch]);

  const countryInfo = country.map((с) => ({
    img: с.flags.png,
    name: с.name.common,
    nativeName: с.name.nativeName,
    population: с.population,
    region: с.region,
    subregion: с.subregion,
    capital: с.capital,
    topLevelDomain: с.tld,
    currencies: с.currencies,
    languages: с.languages,
    borders: с.borders,
  }));

  return (
    <DetailsInfo
      {...countryInfo[0]}
      handleBorderCountry={handleBorderCountry}
    />
  );
};

export default Info;
