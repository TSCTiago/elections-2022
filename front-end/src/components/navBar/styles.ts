import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

interface NavbarProps {
  open: boolean;
}

export const Header = styled.header`
  margin-bottom: 50px;
`;

export const BackButton = styled(Link)`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  color: white;

  &:hover {
    color: #3498db;
  }

  @media (max-width: 700px) {
    display: none;
  }
`;

export const NavbarContainer = styled.nav<NavbarProps>`
  top: 0;
  width: 100%;
  height: ${(props) => (props.open ? '30vh' : '80px')};
  background-color: #3c389e;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  position: fixed;
  transition: 0.5s;
  padding: 0 30px;
  z-index: 999;

  @media (min-width: 700px) {
    height: 70px;
  }

  @media (max-width: 700px) {
    flex-direction: column;
    justify-content: ${(props) => (props.open ? 'flex-start' : 'center')};
    align-items: normal;
  }
`;

export const Img = styled.img`
  max-width: 70px;

  @media (max-width: 700px) {
    display: none;
  }
`;

export const NavbarLinkContainer = styled.div`
  display: flex;
  gap: 30px;
`;

const LinkBaseStyle = css`
  color: white;
  font-size: 1.2rem;
  font-family: GothamBold;
  text-decoration: none;
  font-weight: bold;
  transition: 0.5s;
  text-transform: lowercase;

  &:hover {
    color: #ffa334;
  }

  @media (max-width: 700px) {
    margin: 5px 0;
  }
`;

export const NavbarLinkBase = styled(Link)`
  ${LinkBaseStyle}
`;

export const AnchorBase = styled.a`
  ${LinkBaseStyle};
`;

export const NavbarLinkExtended = styled(NavbarLinkBase)``;

export const AnchorLinkExtended = styled(AnchorBase)``;

export const NavbarLink = styled(NavbarLinkBase)`
  @media (max-width: 700px) {
    display: none;
  }
`;

export const Anchor = styled(AnchorBase)`
  @media (max-width: 700px) {
    display: none;
  }
`;

export const ButtonLink = styled.button`
  width: 70px;
  height: 50px;
  background: none;
  border: none;
  color: white;
  cursor: pointer;

  svg {
    font-size: 30px;
  }

  @media (min-width: 700px) {
    display: none;
  }
`;

export const ExtendedNavbar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 700px) {
    display: none;
  }
`;
