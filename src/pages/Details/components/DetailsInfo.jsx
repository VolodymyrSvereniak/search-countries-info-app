import styled from "styled-components";

const Wrapper = styled.section``;

export default function DetailsInfo({
  name,
  img,
  population,
  region,
  borders = [],
}) {
  return (
    <Wrapper>
      {name}
      <img src={img} alt="" />
      {population}
      {region}
      {borders?.map((b) => (
        <p>{b}</p>
      ))}
    </Wrapper>
  );
}
