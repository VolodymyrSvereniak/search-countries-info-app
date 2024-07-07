import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getCountriesDetails,
  selectedCountriesDetails,
} from "../../slices/countriesSlice/countriesDetailsSlice";
import BackButton from "./components/BackButton";
import DetailsInfo from "./components/DetailsInfo";

export default function Details() {
  const { countries, status } = useSelector(selectedCountriesDetails);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { name } = useParams();
  console.log(countries);
  console.log(name);

  function handleBackNavigation() {
    navigate(-1);
  }

  useEffect(() => {
    dispatch(getCountriesDetails(name));
  }, [dispatch]);

  return (
    <>
      <BackButton handleBackNavigation={handleBackNavigation} />
      <DetailsInfo />
    </>
  );
}
