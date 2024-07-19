import styled from "styled-components";
import { tailspin, dotPulse } from "ldrs";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 60vh;
`;

export const LoadingCircle = () => {
  tailspin.register();

  return (
    <Wrapper>
      <l-tailspin size="100" stroke="5" speed="1" color="black"></l-tailspin>
    </Wrapper>
  );
};

export const LoadingDots = () => {
  dotPulse.register();

  return (
    <Wrapper>
      <l-dot-pulse size="43" speed="1.3" color="black"></l-dot-pulse>
    </Wrapper>
  );
};
