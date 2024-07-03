import { useEffect } from "react";
import Controls from "../components/Controls";
import CountriesList from "../components/CountriesList";
import { countriesCard } from "../components/countriesCard/countriesCard";
import { useDispatch, useSelector } from "react-redux";
import {
  getCountries,
  selectedCountries,
} from "../slices/countriesSlice/countriesSlice";


export default function HomePage() {
  const dispatch = useDispatch();
  const { countries, loading, error } = useSelector(selectedCountries);

  useEffect(() => {
    dispatch(getCountries());
  }, []);

  console.log(countries[0]);

  return (
    <>
      <Controls />
      <CountriesList>{countriesCard(countries)}</CountriesList>
    </>
  );
}
