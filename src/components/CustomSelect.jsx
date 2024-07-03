import styled from "styled-components";
import Select from "react-select";

const CustomSelect = styled(Select).attrs({
  styles: {
    control: (provided) => (
      {
        ...provided,
        cursor: "pointer",
        backgroundColor: "var(--colors-ui-base)",
        borderRadius: "var(--radius)",
        padding: "0.25rem",
        border: "none",
        boxShadow: "var(--shadow)",
        height: "50px",
        paddingLeft: "1rem",
      }
    ),
    singleValue: (provided) => ({
      ...provided,
      color: "var(--colors-text)",
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      color: "var(--colors-text)",
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
      transform: 'translateY(-5px)'
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: "var(--colors-bg)",
      height: "172px",
    }),
  },
})`
  font-family: var(--family);
  width: 11.875rem;
  border: none;
`;

export default CustomSelect;
