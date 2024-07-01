import styled from "styled-components";


const Wrapper = styled.article``;

const CardImage = styled.img``;

const CardBody = styled.div``;

const CardTitle = styled.h3``;

const CardInfo = styled.ul``;

const CardInfoItem = styled.li``;

export default function Card({ img, name, info = [], onClick }) {
  

  return (
    <Wrapper>
      <CardImage />
      <CardBody>
        <CardTitle>{name}</CardTitle>
        <CardInfo>
          {info.map((el) => (
            <CardInfoItem key={el.title}>
              <b>{el.title}</b>: {el.description}
            </CardInfoItem>
          ))}
        </CardInfo>
      </CardBody>
    </Wrapper>
  );
}
