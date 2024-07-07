import { useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getCountriesDetails,
  selectedCountriesDetails,
} from "../../slices/countriesSlice/countriesDetailsSlice";

export default function DetailsInfo() {
  const dispatch = useDispatch();
  const { name } = useParams();
  const { countries, status } = useSelector(selectedCountriesDetails);
  console.log(countries);
  console.log(name);

  useEffect(() => {
      dispatch(getCountriesDetails(name));
  }, [dispatch,]);

  return <>
            {countries.map((country) => country.name.common)}
        </>;
}
