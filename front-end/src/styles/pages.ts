import styled from 'styled-components';
import background from '../assets/img/background-image.png';
export const PagesSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  background-size: cover;
  background-image: linear-gradient(rgba(0, 0, 0, 0.685), rgba(0, 0, 0, 0.822)), url(${background});
  background-repeat: no-repeat;
  background-attachment: fixed;
  @media (max-width: 700px) {
    padding: 50px 10px;
  }
`;

export const PageTitle = styled.h1`
  text-align: center;
  font-family: GothamBold;
  text-transform: uppercase;
  font-size: 2rem;
  color: white;
  margin-bottom: 50px;
  @media (max-width: 700px) {
    font-size: 1.7rem;
  }
`;

export const TableWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  overflow-x: auto;
  justify-content: center;
`;

export const StyledTable = styled.table`
  width: 100%;

  border-collapse: collapse;
  margin: 25px 0;
  font-size: 0.9rem;
  font-family: sans-serif;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
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

export const Div = styled.div`
  height: 70vh;
  width: 1px;
`;
