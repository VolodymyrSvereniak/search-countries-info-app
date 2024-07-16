import styled from "styled-components";
import { IoArrowBack } from "react-icons/io5";

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0 2.1rem;
  margin-top: 0.5rem;
  color: var(--colors-text);
  background-color: var(--colors-ui-base);
  border-radius: var(--radius);
  border: none;
  box-shadow: var(--shadow);
  line-height: 2.8;
  cursor: pointer;
  font-size: var(--fs-sm);
`;

export default function BackButton({ handleBackNavigation }) {
  return (
    <Button onClick={handleBackNavigation}>
      <IoArrowBack size={20} />
      Back
    </Button>
  );
}