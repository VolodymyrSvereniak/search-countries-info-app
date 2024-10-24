import styled from "styled-components";
import Select from "react-select";

const CustomSelect = styled(Select).attrs({
  styles: {
    control: (provided) => ({
      ...provided,
      cursor: "pointer",
      backgroundColor: "var(--colors-ui-base)",
      borderRadius: "var(--radius)",
      padding: "0.25rem",
      border: "none",
      boxShadow: "var(--shadow)",
      width: "15.43rem",
      height: "3.125rem",
      paddingLeft: "1rem",
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "var(--colors-text)",
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      color: "var(--colors-text)",
    }),
    indicatorSeparator: (provided) => ({
      ...provided,
      display: "none",
    }),
    clearIndicator: (provided) => ({
      ...provided,
      color: "var(--colors-text)",
    }),
    option: (provided, state) => ({
      ...provided,
      cursor: "pointer",
      color: "var(--colors-text)",
      backgroundColor: state.isSelected
        ? "var(--colors-bg)"
        : "var(--colors-ui-base)",
      transform: "translateY(-5px)",
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: "var(--colors-bg)",
      boxShadow: "var(--shadow)",
      height: "10.75rem",
      width: "15.50rem"
    }),
  },
})`
  font-family: var(--family);
  border: none;
  width: 15.40rem;
`;

export default CustomSelect;
