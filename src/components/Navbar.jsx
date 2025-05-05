import React, { useState } from "react";
import { Link as LinkR } from "react-router-dom";
import styled, { useTheme } from "styled-components";
import { Bio } from "../data/constants";
import { MenuRounded } from "@mui/icons-material";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Nav = styled.div`
  background-color: ${({ theme }) => theme.bg};
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0;
  z-index: 10;
`;
const NavLogo = styled.a`
  font-weight: bold;
  text-transform: uppercase;
  color: ${({ theme }) => theme.primary};
  font-family: sans-serif;
  font-size: 0.8rem;        // smaller than before
  letter-spacing: 1px;    // more subtle spacing
  padding: 0 10px;
  text-decoration: none;
`;

const NavbarContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 0 24px;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
`;

const NavItems = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  list-style: none;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 16px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const IconButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.primary};
  font-size: 25px;
  transition: 0.3s ease all;
  &:hover {
    color: ${({ theme }) => theme.primary};
    transform: scale(1.1);
  }
`;

const MobileIcon = styled.div`
  display: none;
  color: ${({ theme }) => theme.text_primary};
  @media screen and (max-width: 768px) {
    display: block;
    justify-self: end;
  }
`;

const MobileMenu = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 12px 40px 24px 40px;
  background: ${({ theme }) => theme.card + "F2"};
  position: absolute;
  top: 80px;
  right: 0;
  width: 100%;
  transform: ${({ isOpen }) =>
    isOpen ? "translateY(0)" : "translateY(-100%)"};
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  transition: all 0.6s ease-in-out;
  border-radius: 0 0 20px 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  z-index: ${({ isOpen }) => (isOpen ? "1000" : "-1000")};
  list-style: none;
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useTheme();

  return (
    <Nav>
      <NavbarContainer>
      <NavLogo href="#About">SARA</NavLogo>
 



        <MobileIcon onClick={() => setIsOpen(!isOpen)}>
          <MenuRounded style={{ color: "inherit" }} />
        </MobileIcon>


        <NavItems>
          <NavLink href="#About">About</NavLink>
          <NavLink href="#Skills">Skills</NavLink>
          <NavLink href="#Projects">Projects</NavLink>
          <NavLink href="#Experience">Experience</NavLink>
          <NavLink href="#Education">Education</NavLink>
          
          <NavLink href="#Testimonials">Testimonials </NavLink>
          <NavLink href="#Contact">Contact</NavLink>
        </NavItems>

        <ButtonContainer>
          <IconButton href={Bio.github} target="_blank" aria-label="GitHub">
            <GitHubIcon fontSize="inherit" />
          </IconButton>
          <IconButton href={Bio.Youtube} target="_blank" aria-label="YouTube">
            <YouTubeIcon fontSize="inherit" />
          </IconButton>
          <IconButton href={Bio.linkedin} target="_blank" aria-label="LinkedIn">
    <LinkedInIcon fontSize="inherit" />
  </IconButton>
        </ButtonContainer>

        <MobileIcon onClick={() => setIsOpen(!isOpen)}>
          <MenuRounded style={{ fontSize: 30 }} />
        </MobileIcon>

        {isOpen && (
          <MobileMenu isOpen={isOpen}>
            <NavLink onClick={() => setIsOpen(false)} href="#About">About</NavLink>
            <NavLink onClick={() => setIsOpen(false)} href="#Skills">Skills</NavLink>
            <NavLink onClick={() => setIsOpen(false)} href="#Projects">Projects</NavLink>
            <NavLink onClick={() => setIsOpen(false)} href="#Experience">Experience</NavLink>
            <NavLink onClick={() => setIsOpen(false)} href="#Education">Education</NavLink>
            <NavLink onClick={() => setIsOpen(false)} href="#Testimonials">Testimonials</NavLink>
            <NavLink onClick={() => setIsOpen(false)} href="#Contact">Contact</NavLink>
            <IconButton href={Bio.github} target="_blank">
              <GitHubIcon fontSize="inherit" />
            </IconButton>
            <IconButton href={Bio.Youtube} target="_blank">
              <YouTubeIcon fontSize="inherit" />
            </IconButton>
          </MobileMenu>
        )}
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
