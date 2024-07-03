import styled from "styled-components";

const Wrapper = styled.article`
  width: 15.4rem;
  background-color: var(--colors-ui-base);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  cursor: pointer;
  overflow: hidden;
`;

const CardImage = styled.img`
  display: block;
  width: 100%;
  height: 147px;
  object-fit: cover;
  box-shadow: var(--shadow);
`;

const CardBody = styled.div`
  padding: 0.9375rem;
`;

const CardTitle = styled.h3`
  padding: 0.7rem 0.3rem 0;
  margin: 0;
  font-weight: var(--fw-bold);
`;

const CardInfo = styled.ul`
  list-style: none;
  margin: 0;
  padding: 1rem 0 1rem;
  font-size: var(--fs-sm);
`;

const CardInfoItem = styled.li`
  font-weight: var(--fw-light);
  /* line-height: 1.5; */
  padding: 0.3rem;
`;

const CardInfoTitle = styled.b`
  font-weight: var(--fw-bold);
`;

export default function Card({ img, name, info = [], handleNavigate }) {
  return (
    <Wrapper onClick={handleNavigate}>
      <CardImage src={img} alt={name} />
      <CardBody>
        <CardTitle>{name}</CardTitle>
        <CardInfo>
          {info.map((el) => (
            <CardInfoItem key={el.title}>
              <CardInfoTitle>{el.title}:</CardInfoTitle> {el.description}
            </CardInfoItem>
          ))}
        </CardInfo>
      </CardBody>
    </Wrapper>
  );
}
