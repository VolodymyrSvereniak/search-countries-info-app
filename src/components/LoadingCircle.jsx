import styled from "styled-components";
import { tailspin } from "ldrs";

const LoadCircle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 60vh;
`;

export default function LoadingCircle() {
  tailspin.register();

  return (
    <LoadCircle>
      <l-tailspin size="100" stroke="5" speed="1" color="black"></l-tailspin>
    </LoadCircle>
  );
}
