import styled from "styled-components";
import { Container } from "./Container";
import { IoMoon, IoMoonOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { currentTheme, setTheme, toggleTheme } from "../slices/toggleSlice";
import { useEffect } from "react";

const HeaderElement = styled.header`
  box-shadow: var(--shadow);
  background-color: var(--colors-ui-base);
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 0;
`;

const Title = styled.a.attrs({
  href: "/",
})`
  color: var(--colors-text);
  font-size: var(--fs-md);
  font-weight: var(--fw-bold);
  text-decoration: none;
`;

const ThemeSwitcher = styled.div`
  display: flex;
  align-items: center;
  color: var(--colors-text);
  cursor: pointer;
  font-size: var(--fs-sm);
  font-weight: var(--fw-normal);
  text-transform: capitalize;
`;

const Moon = styled(IoMoon)`
  margin-right: 7px;
`;

const MoonOutline = styled(IoMoonOutline)`
  margin-right: 7px;
`;

export default function Header() {
  const theme = useSelector(currentTheme);
  const dispatch = useDispatch();

  console.log(theme);

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <HeaderElement>
      <Container>
        <Wrapper>
          <Title>Where in the world?</Title>
          <ThemeSwitcher onClick={() => dispatch(toggleTheme())}>
            {theme === "light" ? (
              <MoonOutline size="16px"/>
            ) : (
              <>
                <Moon size="16px"/>
              </>
            )}
            <span>{theme} Theme</span>
          </ThemeSwitcher>
        </Wrapper>
      </Container>
    </HeaderElement>
  );
}