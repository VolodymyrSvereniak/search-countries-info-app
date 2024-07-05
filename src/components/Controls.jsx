import { useState } from "react";
import styled from "styled-components";
import Search from "./Search";
import CustomSelect from "./CustomSelect";
import {
  filterCountries,
  filterByRegion,
} from "../slices/countriesSlice/countriesSlice";
import { useDispatch } from "react-redux";

const options = [
  { value: "Africa", label: "Africa" },
  { value: "America", label: "America" },
  { value: "Asia", label: "Asia" },
  { value: "Europe", label: "Europe" },
  { value: "Oceania", label: "Oceania" },
];

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    margin-top: 1rem;
  }
`;

export default function Controls() {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState(null);

  console.log(region);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearch(value);
    dispatch(filterCountries(value));
  };

  const handleSelectorByRegion = (selectedOption) => {
    setRegion(selectedOption);
    dispatch(filterByRegion(selectedOption?.value));
    setSearch("");
  };

  return (
    <Wrapper>
      <Search value={search} onChange={handleInputChange} />
      <CustomSelect
        options={options}
        placeholder="Filter by Region"
        isClearable
        isSearchable={false}
        value={region}
        onChange={handleSelectorByRegion}
      />
    </Wrapper>
  );
}
