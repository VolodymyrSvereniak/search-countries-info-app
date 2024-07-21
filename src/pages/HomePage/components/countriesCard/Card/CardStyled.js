import styled from "styled-components";
import { LazyLoadImage } from "react-lazy-load-image-component";


export const Wrapper = styled.article`
  width: 15.4rem;
  background-color: var(--colors-ui-base);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  cursor: pointer;
  overflow: hidden;
`;

export const CardImage = styled(LazyLoadImage)`
  display: block;
  width: 100%;
  height: 9.1875rem;
  object-fit: cover;
  box-shadow: var(--shadow);
`;

export const CardBody = styled.div`
  padding: 0.9375rem;
`;

export const CardTitle = styled.h3`
  padding: 0.7rem 0.3rem 0;
  margin: 0;
  font-weight: var(--fw-bold);
`;

export const CardInfo = styled.ul`
  list-style: none;
  margin: 0;
  padding: 1rem 0 1rem;
  font-size: var(--fs-sm);
`;

export const CardInfoItem = styled.li`
  font-weight: var(--fw-light);
  /* line-height: 1.5; */
  padding: 0.3rem;
`;

export const CardInfoTitle = styled.b`
  font-weight: var(--fw-bold);
`;