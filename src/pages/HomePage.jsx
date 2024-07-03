import { useEffect } from "react";
import Controls from "../components/Controls";
import CountriesList from "../components/CountriesList";
import { countriesCard } from "../components/countriesCard/countriesCard";
import { useDispatch, useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  getCountries,
  selectedCountries,
} from "../slices/countriesSlice/countriesSlice";

export default function HomePage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { countries, status, error } = useSelector(selectedCountries);

  const handleNavigate = (name) => navigate(`/details/${name}`);
  
  const countriesCardList = countriesCard(countries, handleNavigate);
  
  useEffect(() => {
    if (!countries.length && status !== 'loading') {
      dispatch(getCountries());
    }
  }, [countries, status]);

  return (
    <>
      <Controls />
      <CountriesList>{countriesCardList}</CountriesList>
    </>
  );
}
