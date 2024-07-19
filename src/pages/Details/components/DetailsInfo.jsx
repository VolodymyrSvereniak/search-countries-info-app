import styled from "styled-components";
import { useEffect } from "react";
import { getBorderCountriesNames } from "../../../slices/countriesSlice/countryDetailsSlice";
import { useDispatch } from "react-redux";

const Container = styled.section`
  padding: 3rem 0;
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  grid-template-rows: 22.8125rem;
  gap: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 100%;
    grid-template-rows: 17.1875rem;
    gap: 0;
  }
`;

const Flag = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  box-shadow: var(--shadow);
  border-radius: var(--radius);

  @media (max-width: 768px) {
    height: 13.75rem;
  }
`;

const CountryName = styled.h2`
  margin: 0;
  font-weight: var(--fw-bold);
`;

const InfoWrapper = styled.div`
  padding: 1.5rem 0 2rem 2rem;

  @media (max-width: 768px) {
    padding: 0;
  }
`;

const InfoGroup = styled.div`
  display: flex;
  gap: 8rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const InfoList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  font-size: var(--fs-sm);
  padding: 0.625rem 0 2.2rem;
  gap: 1rem;

  @media (max-width: 768px) {
    padding: 0.3125rem 0 2rem;
  }
`;

const InfoItem = styled.li``;

const InfoTag = styled.strong`
  place-self: center;
  font-weight: var(--fw-bold);
`;

const Info = styled.span``;

const BorderCountries = styled.div`
  display: grid;
  white-space: nowrap;
  grid-template-columns: repeat(4, minmax(100px, 1fr));
  width: 100%;
  gap: 1rem;

  @media (max-width: 768px) {
    text-align: start;
    grid-template-columns: repeat(2, 127px);
    gap: 0.5  rem;
  }
`;

const BorderCountry = styled.span`
  text-align: center;
  background-color: var(--colors-ui-base);
  border-radius: var(--radius);
  border: none;
  box-shadow: var(--shadow);
  line-height: 2.5;
  cursor: pointer;
  font-size: var(--fs-sm);
`;

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
  borderCountriesNames = [],
}) {
  const dispatch = useDispatch();
  const nativeNameDestructure = Object.values(nativeName)?.map(
    (native) => native.common
  );
  const nativeNameValue = nativeNameDestructure[0];
  const languagesDestructure = Object.values(languages).join(", ");
  const bordersDestructure = (border) => {
    return borderCountriesNames?.map((c) => {
      if (c.cca3 == border) {
        return c.name.common;
      }
    });
  };
  const currenciesDestructure = Object.values(Object.values(currencies))
    .map((c) => c.name)
    .join(", ");

  useEffect(() => {
    dispatch(getBorderCountriesNames(borders?.join(",")));
  }, [borders, dispatch, getBorderCountriesNames]);

  return (
    <Container>
      <Flag src={img} alt={name}/>
      <InfoWrapper>
        <CountryName>{name}</CountryName>
        <InfoGroup>
          <InfoList>
            <InfoItem>
              <InfoTag>Native Name: </InfoTag>
              <Info>{nativeNameValue}</Info>
            </InfoItem>
            <InfoItem>
              <InfoTag>Population: </InfoTag>
              <Info>{population}</Info>
            </InfoItem>
            <InfoItem>
              <InfoTag>Region: </InfoTag>
              <Info>{region}</Info>
            </InfoItem>
            <InfoItem>
              <InfoTag>Sub Region: </InfoTag>
              <Info>{subregion}</Info>
            </InfoItem>
          </InfoList>
          <InfoList>
            <InfoItem>
              <InfoTag>Capital: </InfoTag>
              <Info>{capital}</Info>
            </InfoItem>
            <InfoItem>
              <InfoTag>Top Level Domain: </InfoTag>
              <Info>{topLevelDomain}</Info>
            </InfoItem>
            <InfoItem>
              <InfoTag>Currencies: </InfoTag>
              <Info>{currenciesDestructure}</Info>
            </InfoItem>
            <InfoItem>
              <InfoTag>Languages: </InfoTag>
              <Info>{languagesDestructure}</Info>
            </InfoItem>
          </InfoList>
        </InfoGroup>
        <BorderCountries>
          <InfoTag>Border Countries: </InfoTag>
          {borders.length ? (
            borders?.map((b) => (
              <BorderCountry key={b} onClick={() => handleBorderCountry(b)}>
                {bordersDestructure(b)}
              </BorderCountry>
            ))
          ) : (
            <Info>There's no border countries</Info>
          )}
        </BorderCountries>
      </InfoWrapper>
    </Container>
  );
}
