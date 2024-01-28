import { useState } from 'react';

import { Select } from '../../components/select/styles';

import * as S from '../../styles/pages';
import axios from 'axios';
import { NavBar } from '../../components/navBar';

type MapType = {
  [id: string]: any;
};

export default function GeneralResult() {
  const [data, setData] = useState([]);
  const baseUrl = 'http://localhost:5000/geral_result';

  const handleChange = (e: any) => {
    const selectedIndex = e.target.value;
    // const text = e.target.options[selectedIndex].text;
    console.log(selectedIndex);
    searchDataGeneralResult(selectedIndex);
  };

  function searchDataGeneralResult(selectedText: string) {
    axios.get(`${baseUrl}?value=${selectedText}`).then((response) => {
      setData(response.data);
      console.log(response.data);
    });
  }

  return (
    <>
      <NavBar />
      <S.PagesSection>
        <div>
          <S.PageTitle>Ver resultados Gerais</S.PageTitle>
        </div>
        <Select name="resultado" id="resultado" onChange={handleChange}>
          <option value="">Selecione um filtro</option>
          <option value="0">Todos</option>
          <option value="1">Eleitos</option>
          <option value="2">Não Eleitos</option>
        </Select>
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
              {data.map((candidate: MapType, index) => (
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
      </S.PagesSection>
    </>
  );
}
