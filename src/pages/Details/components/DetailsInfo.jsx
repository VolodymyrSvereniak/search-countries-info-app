import styled from "styled-components";

const Wrapper = styled.section``;

export default function DetailsInfo({
  img,
  name,
  nativeName = [],
  population,
  region,
  subregion,
  capital,
  topLevelDomain = [],
  currencies = [],
  languages = [],
  borders = [],
  handleBorderCountry,
}) {
  const nativeNameDestructure = Object.values(nativeName)?.map(
    (native) => native.common
  );
  const languagesDestructure = Object.values(languages);
  const currenciesDestructure = Object.values(Object.values(currencies)).map(
    (c) => c.name
  );
  const nativeNameValue = nativeNameDestructure[0];

  console.log(currenciesDestructure);

  return (
    <Wrapper>
      {name}
      <img src={img} alt="" />
      {population}
      {subregion}
      {capital}
      {topLevelDomain[0]}
      <p>Mon:{currenciesDestructure}</p>
      {region}
      {borders?.map((b, i) => (
        <p key={i} onClick={() => handleBorderCountry(b)}>
          {b}
        </p>
      ))}
      {nativeNameValue}
      {languagesDestructure?.map((l) => (
        <p>{l}</p>
      ))}
    </Wrapper>
  );
}
