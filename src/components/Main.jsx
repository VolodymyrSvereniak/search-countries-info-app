import styled from "styled-components";
import { ContentContainer } from "./Container";

const Wrapper = styled.main`
  padding: 3rem 0;
  
  @media (max-width: 768px) {   
    padding: 2rem 0;
  }
`;

export default function Main({ children }) {
  return (
    <Wrapper>
      <ContentContainer>{children}</ContentContainer>
    </Wrapper>
  );
}
