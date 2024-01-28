import { useState } from 'react';
import axios from 'axios';
import { NavBar } from '../../components/navBar';
import Table from '../../components/table';
import Select from '../../components/select';
import { city } from '../../baseUrls';
import * as S from '../../styles/pages';

export default function City() {
  const [data, setData] = useState([]);

  const handleChange = (e: any) => {
    setData([]);
    const selectedText = e.target.options[e.target.selectedIndex].text;

    axios.get(`${city}?municipio=${selectedText}`).then((response) => {
      setData(response.data);
    });
  };

  return (
    <>
      <NavBar />
      <S.PagesSection>
        <S.PageTitle>Ver resultados por Município</S.PageTitle>

        <Select name="municipio" id="municipio" placeholder="Selecione um município" onchange={handleChange} />
        <Table data={data} />
        <S.Div />
      </S.PagesSection>
    </>
  );
}
