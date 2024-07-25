import { useEffect } from "react";
import { getBorderCountriesNames } from "../../../../slices/countriesSlice/countryDetailsSlice";
import { useDispatch } from "react-redux";
import {
  Container,
  Flag,
  CountryName,
  InfoWrapper,
  InfoGroup,
  InfoList,
  InfoItem,
  InfoTag,
  Info,
  BorderCountries,
  BorderCountry,
} from "./DetailsInfoStyled";

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

  const currenciesDestructure = Object.values(Object.values(currencies))
    .map((c) => c.name)
    .join(", ");

  const bordersDestructure = (border) => {
    return borderCountriesNames?.map((c) => {
      return c.cca3 === border ? c.name.common : '';
    });
  };

  useEffect(() => {
    dispatch(getBorderCountriesNames(borders?.join(",")));
  }, [borders, dispatch]);

  return (
    <Container>
      <Flag src={img} alt={name} />
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
