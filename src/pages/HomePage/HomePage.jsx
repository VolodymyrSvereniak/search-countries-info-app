import { useEffect } from "react";
import Controls from "./components/Controls";
import CountriesList from "./components/CountriesList";
import { countriesCard } from "./components/countriesCard/countriesCard";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  getCountries,
  selectedCountries,
} from "../../slices/countriesSlice/countriesSlice";
import LoadingCircle from "../../components/LoadingCircle";

export default function HomePage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { filteredCountries, status } = useSelector(selectedCountries);

  const handleNavigate = (name) => navigate(`/details/${name}`);

  const countriesCardList = countriesCard(filteredCountries, handleNavigate);

  useEffect(() => {
    if (!filteredCountries.length) {
      dispatch(getCountries());
    }
  }, [filteredCountries, dispatch]);

  if (status === "loading") {
    return <LoadingCircle />;
  }

  return (
    <>
      <Controls />
      <CountriesList>{countriesCardList}</CountriesList>
    </>
  );
}
