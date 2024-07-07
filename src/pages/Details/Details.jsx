import styled from "styled-components";
import { IoArrowBack } from "react-icons/io5";
import DetailsInfo from "./DetailsInfo";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.section`
  width: 100%;
  display: flex;
`;

const BackButton = styled.button``;

export default function Details() {
  const navigate = useNavigate();

  function handleBackNavigation() {
    navigate(-1);
  }

  return (
    <Wrapper>
      <BackButton onClick={handleBackNavigation}>
        <IoArrowBack />
        Back
      </BackButton>
      <DetailsInfo />
    </Wrapper>
  );
}
