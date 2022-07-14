import { ReactComponent as Logo } from "../assets/logo.svg";
import { useState } from "react";
import styled from "styled-components";

export const Navbar = () => {
  const [navbar, SetNavBar] = useState("isActive");
  const changeBackground = () => {
    if (window.scrollY >= 90) {
      SetNavBar(true);
    } else SetNavBar(false);
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <Container isActive={navbar}>
      <NavBar>
        <Logo />
      </NavBar>
    </Container>
  );
};

const Container = styled.div`
  background: ${({ isActive }) =>
    isActive === true ? " white" : "transparent"};
  border-bottom: ${({ isActive }) =>
    isActive === true ? "gray" : "transparent"};
  min-height: 15vh;
  display: flex;
  align-items: center;
  position: sticky;
  top: 0%;
  z-index: 100;
  svg {
    width: 13%;
    height: 13%;
    @media (max-width: 768px) {
      width: 100px;
    }
  }
`;
const NavBar = styled.nav`
  margin: 0px 100px;
  @media (max-width: 1024px) {
    margin: 0px 50px;
  }
  @media (max-width: 425px) {
    margin: 0px 20px;
  }
`;
