import styled from 'styled-components';
import background from '../assets/img/background-image.png';
export const PagesSection = styled.section`
  /* height: 100; */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  overflow-x: hidden;
  background-size: cover;
  background-image: linear-gradient(rgba(0, 0, 0, 0.685), rgba(0, 0, 0, 0.822)), url(${background});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: 100% 45%;
`;

export const PageTitle = styled.h1`
  font-family: GothamBold;
  text-transform: uppercase;
  font-size: 2.5rem;
  /* color: #3c389e; */
  color: white;
  margin-bottom: 50px;
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
