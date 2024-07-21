import styled from "styled-components";
import { IoMoon, IoMoonOutline } from "react-icons/io5";
import { Link } from "react-router-dom";


export const HeaderElement = styled.header`
  box-shadow: var(--shadow);
  background-color: var(--colors-ui-base);
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 0;
`;

export const Title = styled(Link).attrs({
  to: "/",
})`
  color: var(--colors-text);
  font-size: var(--fs-md);
  font-weight: var(--fw-bold);
  text-decoration: none;
`;

export const ThemeSwitcher = styled.div`
  display: flex;
  align-items: center;
  color: var(--colors-text);
  cursor: pointer;
  font-size: var(--fs-sm);
  font-weight: var(--fw-normal);
  text-transform: capitalize;
`;

export const Moon = styled(IoMoon)`
  margin-right: 7px;
`;

export const MoonOutline = styled(IoMoonOutline)`
  margin-right: 7px;
`;