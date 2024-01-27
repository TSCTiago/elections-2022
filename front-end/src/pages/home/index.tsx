import React from 'react';
import * as S from './styles';
import img from '../../assets/img/slogan.png';
import { Link } from 'react-router-dom';
export default function Home() {
  return (
    <S.Section>
      <div>
        <div className="slogan">
          <S.StyledImg src={img} alt="img" />
        </div>
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
      </div>
    </S.Section>
  );
}
