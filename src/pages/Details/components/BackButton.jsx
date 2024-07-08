import styled from "styled-components";
import { IoArrowBack } from "react-icons/io5";

const Button = styled.button``;

export default function BackButton({ handleBackNavigation }) {
  return (
    <Button onClick={handleBackNavigation}>
      <IoArrowBack size={25} />
      Back
    </Button>
  );
}