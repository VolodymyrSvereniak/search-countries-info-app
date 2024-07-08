import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getCountriesDetails,
  selectedCountriesDetails,
} from "../../../slices/countriesSlice/countriesDetailsSlice";
import DetailsInfo from "./DetailsInfo";

const Info = () => {
  const dispatch = useDispatch();
  const { name } = useParams();
  const { countries, status } = useSelector(selectedCountriesDetails);
  console.log(countries);
  console.log(name);

  useEffect(() => {
    dispatch(getCountriesDetails(name));
  }, [name, dispatch]);

  const countriesInfo = countries.map((c) => ({
        name: c.name.common,
        img: c.flags.png,
        population: c.population,
        region: c.region,
        borders: c.borders,
      }));

  return <DetailsInfo {...countriesInfo[0]} />;
};

export default Info;
