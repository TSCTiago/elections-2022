import { useState } from 'react';
import axios from 'axios';
import Select from '../../components/select';
import { NavBar } from '../../components/navBar';
import Table from '../../components/table';
import * as S from '../../styles/pages';
import { politicalPosition } from '../../baseUrls';

export default function PoliticalPosition() {
  const [data, setData] = useState([]);
  const handleChange = (e: any) => {
    setData([]);
    const selectedText = e.target.options[e.target.selectedIndex].text;

    axios.get(`${politicalPosition}?cargo=${selectedText}`).then((response) => {
      setData(response.data);
    });
  };

  return (
    <>
      <NavBar />
      <S.PagesSection>
        <S.PageTitle>Ver resultados por Cargo</S.PageTitle>

        <Select name="cargo" id="cargo" placeholder="Selecione um cargo" onchange={handleChange} />
        <Table data={data} />

        <S.Div />
      </S.PagesSection>
    </>
  );
}
