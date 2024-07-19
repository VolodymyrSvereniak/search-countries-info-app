import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getCountryDetails,
  getBorderCountryDetails,
  selectedCountryDetails,
} from "../../../slices/countriesSlice/countryDetailsSlice";
import { lazy, Suspense } from "react";
import { LoadingDots } from "../../../components/Loader";


const DetailsInfo = lazy(() => import("./DetailsInfo"));

const Info = () => {
  const dispatch = useDispatch();
  const { name } = useParams();
  const { country, status, borderCountriesNames } = useSelector(
    selectedCountryDetails
  );
  console.log(country);

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

  function handleBorderCountry(code) {
    dispatch(getBorderCountryDetails(code));
  }

  useEffect(() => {
    dispatch(getCountryDetails(name));
  }, [name, dispatch]);

  return (
    <>
      {status === "loading" ? (
        <LoadingDots />
      ) : (
        <Suspense fallback={<LoadingDots />}>
          <DetailsInfo
            {...countryInfo[0]}
            handleBorderCountry={handleBorderCountry}
            borderCountriesNames={borderCountriesNames}
          />
        </Suspense>
      )}
    </>
  );
};

export default Info;
