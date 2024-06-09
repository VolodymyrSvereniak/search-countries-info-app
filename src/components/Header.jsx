import styled from "styled-components";
import { Container } from "./Container";
import { IoMoon, IoMoonOutline } from "react-icons/io5";
import { useDispatch, useSelector} from "react-redux";
import { currentTheme, setTheme, toggleTheme } from "../slices/toggleSlice";
import { useEffect } from "react";

const HeaderElement = styled.header`
  box-shadow: var(--shadow);
  background-color: var(--colors-ui-base);
`;

const Wrapper = styled.div``;

const Title = styled.a.attrs({
  href: "/",
})``;

const ThemeSwitcher = styled.div``;


export default function Header() {
  const theme = useSelector(currentTheme);
  const dispatch = useDispatch();

  console.log(theme);

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme])

  return (
    <HeaderElement>
      <Container>
        <Wrapper>
          <Title >Where in the world?</Title>
          <ThemeSwitcher>
            <IoMoon />
            Light Mode
          </ThemeSwitcher>
        </Wrapper>
      </Container>
    </HeaderElement>
  );
}
