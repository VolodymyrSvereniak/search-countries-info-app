import styled from "styled-components";
import { CenteringContainer } from "../../components/Container";
import { Link } from "react-router-dom";

const Title = styled.h1`
  font-size: 5rem;
`;

const Description = styled.h2`
  font-size: 2rem;
`;

const HomeButton = styled(Link)`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: var(--colors-ui-base);
  box-shadow: var(--shadow);
  color: var(--colors-text);
  border-radius: var(--radius);
  font-size: var(--fs-md);
  font-weight: var(--fw-normal);
  text-decoration: none;
`;

export default function NotFound() {
  return (
    <CenteringContainer>
      <Title>404</Title>
      <Description>Page Not Found</Description>
      <HomeButton to="/">Go to Home</HomeButton>
    </CenteringContainer>
  );
}
