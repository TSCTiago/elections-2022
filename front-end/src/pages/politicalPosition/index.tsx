import { useState } from 'react';
import * as S from '../../styles/pages';
import Select from '../../components/select';
import axios from 'axios';
import { NavBar } from '../../components/navBar';

type MapType = {
  [id: string]: any;
};

export default function PoliticalPosition() {
  const [data, setData] = useState([]);
  const baseUrl = 'http://localhost:5000/search_data_candidate_by_cargo';
  const handleChange = (e: any) => {
    const selectedIndex = e.target.selectedIndex;
    const text = e.target.options[selectedIndex].text;
    console.log(text);
    searchDataPolicalPosition(text);
  };

  function searchDataPolicalPosition(selectedText: string) {
    axios.get(`${baseUrl}?cargo=${selectedText}`).then((response) => {
      setData(response.data);
      console.log(response.data);
    });
  }

  return (
    <>
      <NavBar />
      <S.PagesSection>
        <div>
          <S.PageTitle>Ver resultados por Cargo</S.PageTitle>
        </div>
        <Select name="cargo" id="cargo" placeholder="Selecione um cargo" onchange={handleChange} />
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
