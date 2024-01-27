import styled from 'styled-components';

export const SelectArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Select = styled.select`
  padding: 10px 20px;
  margin-bottom: 20px;
  font-size: 1rem;
  font-family: 'GothamBold';
  border: 2px solid #ffa334;
  width: 70%;

  option {
    font-family: GothamLight;
  }
`;
