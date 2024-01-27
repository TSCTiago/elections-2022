import * as S from '../../styles/pages';
import Select from '../../components/select';
import { useState } from 'react';
import axios from 'axios';
import { NavBar } from '../../components/navBar';

export default function Candidate() {
  const [data, setData] = useState([]);
  const baseUrl = 'http://localhost:5000/search_data_candidate';

  const handleChange = (e) => {
    const selectedIndex = e.target.selectedIndex;
    const text = e.target.options[selectedIndex].text;
    console.log(text);
    searchDatacandidate(text);
  };

  function searchDatacandidate(selectedText: string) {
    axios.get(`${baseUrl}?name=${selectedText}`).then((response) => {
      setData(response.data);
      console.log(response.data);
    });
  }

  return (
    <>
      <NavBar />
      <S.PagesSection>
        <div>
          <S.PageTitle>Ver resultados por Candidato</S.PageTitle>
        </div>
        <Select name="candidato" id="candidato" placeholder="Selecione o candidato" onchange={handleChange} />
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
              {
                <S.TableRow>
                  <S.TableCell>{data.cand_nome}</S.TableCell>
                  <S.TableCell>{data.cargo_nome}</S.TableCell>
                  <S.TableCell>{Intl.NumberFormat('pt-br').format(data.cand_votos)}</S.TableCell>
                  <S.TableCell>{data.cand_status == 1 ? 'Eleito' : 'Não Eleito'}</S.TableCell>
                </S.TableRow>
              }
            </S.TableBody>
          </S.StyledTable>
        </S.TableWrapper>
      </S.PagesSection>
    </>
  );
}