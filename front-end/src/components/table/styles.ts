import styled from 'styled-components';

export const TableWrapper = styled.div`
  width: 70%;
  display: flex;
  align-items: center;
  overflow-x: auto;
  justify-content: center;

  @media (max-width: 700px) {
    width: 100%;
  }
`;

export const StyledTable = styled.table`
  width: 100%;

  border-collapse: collapse;
  margin: 25px 0;
  font-size: 1.1rem;
  font-family: sans-serif;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  @media (max-width: 700px) {
    font-size: 0.9rem;
  }
`;

export const TableHead = styled.thead`
  background-color: #3c389e;
  color: #fff;
`;

export const TableBody = styled.tbody`
  background: #fff;
  color: #000;
  font-weight: bold;
  padding: 10px;
`;

export const TableRow = styled.tr`
  font-family: GothamBold;
  text-align: left;
`;

export const TableHeaderCell = styled.th`
  padding: 8px 15px;
`;

export const TableCell = styled.td`
  padding: 8px 15px;
`;
