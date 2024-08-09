import styled from "styled-components";

export const Container = styled.section`
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

export const Flag = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  box-shadow: var(--shadow);
  border-radius: var(--radius);

  @media (max-width: 768px) {
    height: 13.75rem;
  }
`;

export const CountryName = styled.h2`
  margin: 0;
  font-weight: var(--fw-bold);
`;

export const InfoWrapper = styled.div`
  padding: 1.5rem 0 2rem 2rem;

  @media (max-width: 768px) {
    padding: 0;
  }
`;

export const InfoGroup = styled.div`
  display: flex;
  gap: 8rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const InfoList = styled.ul`
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

export const InfoItem = styled.li``;

export const InfoTag = styled.strong`
  place-self: center;
  font-weight: var(--fw-bold);
`;

export const Info = styled.span``;

export const BorderCountries = styled.div`
  display: grid;
  white-space: nowrap;
  grid-template-columns: repeat(4, minmax(100px, 1fr));
  width: 100%;
  gap: 1rem;

  @media (max-width: 768px) {
    text-align: start;
    grid-template-columns: repeat(2, 127px);
    gap: 0.5rem;
  }
`;

export const BorderCountry = styled.span`
  text-align: center;
  background-color: var(--colors-ui-base);
  border-radius: var(--radius);
  border: none;
  box-shadow: var(--shadow);
  line-height: 2.5;
  cursor: pointer;
  font-size: var(--fs-sm);
  font-weight: var(--fw-normal);

  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;
