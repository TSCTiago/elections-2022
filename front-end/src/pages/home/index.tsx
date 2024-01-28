import React from 'react';
import * as S from './styles';
import img from '../../assets/img/slogan.png';
import { Link } from 'react-router-dom';
export default function Home() {
  return (
    <S.Section>
      <S.StyledImg src={img} alt="img" />

      <S.Results>Ver resultados ◈ Piauí</S.Results>
      <S.Links>
        <Link to="/candidate">
          <S.StyledButton>Por Candidato</S.StyledButton>
        </Link>
        <Link to="/political-position">
          <S.StyledButton>Por Cargo</S.StyledButton>
        </Link>
        <Link to="/city">
          <S.StyledButton>Por Município</S.StyledButton>
        </Link>
        <Link to="/general-result">
          <S.StyledButton>Resultado Geral</S.StyledButton>
        </Link>
      </S.Links>
    </S.Section>
  );
}
