import { useState } from 'react';
// import { useLocation } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { FaXmark } from 'react-icons/fa6';
import logo from '../../assets/img/logo.png';
import * as S from './styles';

export function NavBar() {
  const [extendNavbar, setExtendNavbar] = useState(false);

  return (
    <S.Header>
      <S.NavbarContainer open={extendNavbar}>
        <S.BackButton to="/">
          <S.Img src={logo} alt="eleições" />
        </S.BackButton>

        <S.NavbarLinkContainer>
          <S.NavbarLink to="/candidate">Candidato</S.NavbarLink>
          <S.NavbarLink to="/political-position">Cargo</S.NavbarLink>
          <S.NavbarLink to="/city">Município</S.NavbarLink>
          <S.NavbarLink to="/general-result">Resultado Geral</S.NavbarLink>
          <S.ButtonLink onClick={() => setExtendNavbar((curr) => !curr)}>{extendNavbar ? <FaXmark /> : <FaBars />}</S.ButtonLink>
        </S.NavbarLinkContainer>
        {extendNavbar && (
          <S.ExtendedNavbar>
            <S.NavbarLinkExtended to="/candidate">Candidato</S.NavbarLinkExtended>
            <S.NavbarLinkExtended to="/political-position">Cargo</S.NavbarLinkExtended>
            <S.NavbarLinkExtended to="/city">Município</S.NavbarLinkExtended>
            <S.NavbarLinkExtended to="/general-result">Resultado Geral</S.NavbarLinkExtended>
          </S.ExtendedNavbar>
        )}
      </S.NavbarContainer>
    </S.Header>
  );
}
