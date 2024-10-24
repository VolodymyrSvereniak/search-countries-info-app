import styled from "styled-components";
import { IoSearch } from "react-icons/io5";

const InputContainer = styled.label`
  background-color: var(--colors-ui-base);
  padding: 1rem 2rem;
  display: flex;
  align-items: center;

  border-radius: var(--radius);
  box-shadow: var(--shadow);
  width: 15.43rem;

  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;

const Input = styled.input.attrs({
  type: "search",
  placeholder: "Search for a country...",
})`
  width: 100%;
  margin-left: 2rem;
  border: none;
  outline: none;
  color: var(--colors-text);
  background-color: var(--colors-ui-base);
`;

export default function Search({ value, onChange }) {
  return (
    <InputContainer>
      <IoSearch style={{position: 'absolute'}}/>
      <Input value={value} onChange={onChange} />
    </InputContainer>
  );
}
