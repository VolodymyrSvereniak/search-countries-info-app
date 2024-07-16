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

  const countryInfo = country.map((c) => ({
    img: c.flags.png,
    name: c.name.common,
    nativeName: c.name.nativeName,
    population: c.population.toLocaleString("en-US"),
    region: c.region,
    subregion: c.subregion,
    capital: c.capital,
    topLevelDomain: c.tld,
    currencies: c.currencies,
    languages: c.languages,
    borders: c.borders,
  }));

  return (
    <DetailsInfo
      {...countryInfo[0]}
      handleBorderCountry={handleBorderCountry}
    />
  );
};

export default Info;
