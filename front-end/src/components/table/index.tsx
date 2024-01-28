import React from 'react';
import ScaleLoader from 'react-spinners/ScaleLoader';

import * as S from './styles';

interface TableProps {
  data: any;
}

type MapType = {
  [id: string]: any;
};

export default function Table({ data }: TableProps) {
  return data.length === 0 ? (
    <ScaleLoader color="#ff5863" />
  ) : (
    <S.TableWrapper>
      <S.StyledTable className="styled-table">
        <S.TableHead>
          <S.TableRow>
            <S.TableHeaderCell id="inicio-th">Nome</S.TableHeaderCell>
            <S.TableHeaderCell>Cargo</S.TableHeaderCell>
            <S.TableHeaderCell>Votação</S.TableHeaderCell>
            <S.TableHeaderCell id="final-th">Status</S.TableHeaderCell>
          </S.TableRow>
        </S.TableHead>
        <S.TableBody className="table-body">
          {data.map((candidate: MapType, index: any) => (
            <S.TableRow key={index}>
              <S.TableCell>{candidate.cand_nome}</S.TableCell>
              <S.TableCell>{candidate.cargo_nome}</S.TableCell>
              <S.TableCell>{Intl.NumberFormat('pt-br').format(candidate.cand_votos)}</S.TableCell>
              <S.TableCell>{candidate.cand_status === 1 ? 'Eleito' : 'Não Eleito'}</S.TableCell>
            </S.TableRow>
          ))}
        </S.TableBody>
      </S.StyledTable>
    </S.TableWrapper>
  );
}
