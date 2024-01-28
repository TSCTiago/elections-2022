import { useState } from 'react';
import axios from 'axios';
import { NavBar } from '../../components/navBar';
import Table from '../../components/table';
import Select from '../../components/select';
import { candidate } from '../../baseUrls';
import * as S from '../../styles/pages';
// import { ScaleLoader } from 'react-spinners';

type MapType = {
  [id: string]: any;
};

export default function Candidate() {
  const [data, setData] = useState<MapType>([]);

  const handleChange = (e: any) => {
    setData([]);
    const selectedText = e.target.options[e.target.selectedIndex].text;

    axios.get(`${candidate}?name=${selectedText}`).then((response) => {
      setData([response.data]);
    });
  };

  return (
    <>
      <NavBar />
      <S.PagesSection>
        <div>
          <S.PageTitle>Ver resultados por Candidato</S.PageTitle>
        </div>
        <Select name="candidato" id="candidato" placeholder="Selecione o candidato" onchange={handleChange} />
        <Table data={data} />
        <S.Div />
      </S.PagesSection>
    </>
  );
}
