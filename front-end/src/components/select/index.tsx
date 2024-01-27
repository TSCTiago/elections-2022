import { useEffect, useState } from 'react';
import * as S from './styles';
import axios from 'axios';

interface SelectProps {
  placeholder: string;
  name: string;
  id: string;
  onchange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}
export default function Select({ placeholder, name, id, onchange }: SelectProps) {
  const [data, setData] = useState([]);
  const baseUrl = `http://localhost:5000/populate_select?name=${name}`;

  useEffect(() => {
    axios.get(baseUrl).then((response) => {
      setData(response.data);
    });
  }, [baseUrl]);

  return (
    <S.SelectArea>
      <S.Select name={name} id={id} onChange={onchange}>
        <option value="">{placeholder}</option>
        {data.map((elem, i) => (
          <option key={i} value={elem.id}>
            {elem.nome}
          </option>
        ))}
      </S.Select>
    </S.SelectArea>
  );
}
