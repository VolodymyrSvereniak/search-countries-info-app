import {
  Wrapper,
  CardImage,
  CardBody,
  CardTitle,
  CardInfo,
  CardInfoItem,
  CardInfoTitle
} from "./CardStyled";

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
