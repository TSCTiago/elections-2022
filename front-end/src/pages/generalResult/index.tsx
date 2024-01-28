import { useState } from 'react';
import axios from 'axios';
import { Select } from '../../components/select/styles';
import { NavBar } from '../../components/navBar';
import Table from '../../components/table';
import * as S from '../../styles/pages';
import { generalResult } from '../../baseUrls';

export default function GeneralResult() {
  const [data, setData] = useState([]);

  const handleChange = (e: any) => {
    setData([]);
    const selectedText = e.target.value;

    axios.get(`${generalResult}?value=${selectedText}`).then((response) => {
      setData(response.data);
      console.log(response.data);
    });
  };

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
        <Table data={data} />
      </S.PagesSection>
    </>
  );
}
