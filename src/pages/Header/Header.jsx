import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { currentTheme, toggleTheme } from "../../slices/themeSlice";
import { getCountries } from "../../slices/countriesSlice/countriesSlice";
import { ContentContainer } from "../../components/Container";
import {
  HeaderElement,
  Wrapper,
  Title,
  ThemeSwitcher,
  MoonOutline,
  Moon,
} from "./HeaderStyled";

export default function Header() {
  const theme = useSelector(currentTheme);
  const dispatch = useDispatch();

  console.log(theme);

  function handleCountriesReset() {
    dispatch(getCountries());
  }

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <HeaderElement>
      <ContentContainer>
        <Wrapper>
          <Title onClick={handleCountriesReset}>Where in the world?</Title>
          <ThemeSwitcher onClick={() => dispatch(toggleTheme())}>
            {theme === "light" ? (
              <MoonOutline size="16px" />
            ) : (
              <>
                <Moon size="16px" />
              </>
            )}
            <span>{theme} Theme</span>
          </ThemeSwitcher>
        </Wrapper>
      </ContentContainer>
    </HeaderElement>
  );
}
