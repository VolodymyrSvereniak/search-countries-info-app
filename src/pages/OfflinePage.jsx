import { RiWifiOffLine } from "react-icons/ri";
import { CenteringContainer } from "../components/Container";
import styled from "styled-components";

const ConnectionIcon = styled(RiWifiOffLine)`
  width: 100%;
  height: 30%;
`;

const Title = styled.h1``;

const SubTitle = styled.h3``;

const ReloadButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: var(--colors-ui-base);
  box-shadow: var(--shadow);
  color: var(--colors-text);
  border-radius: var(--radius);
  font-size: var(--fs-md);
  font-weight: var(--fw-normal);
  text-decoration: none;
  border: none;
  cursor: pointer;
`;

export default function OfflinePage() {
  return (
    <CenteringContainer>
      <ConnectionIcon />
      <Title>OFFLINE</Title>
      <SubTitle>Please check your internet connection</SubTitle>
      <ReloadButton onClick={() => window.location.reload()}>
        RETRY
      </ReloadButton>
    </CenteringContainer>
  );
}
