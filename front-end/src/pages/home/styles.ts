import styled from 'styled-components';
import background from '../../assets/img/background.png';
export const Section = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  height: 100vh;
  overflow-y: hidden;
  background-color: #1f1d1d0a;
  background-image: url(${background});
  background-repeat: repeat-x;
  background-position: bottom;
  @media (max-width: 1200px) {
    justify-content: start;
    margin-top: 100px;
  }
`;

export const StyledImg = styled.img`
  width: 30%;
`;

export const Results = styled.div`
  font-family: 'GothamLight';
  font-weight: bold;
  font-size: 1.5rem;
  color: #ff5863;
`;

export const Links = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  @media (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }
`;

export const StyledButton = styled.button`
  margin: 0 20px;
  background-color: #ffa334;
  padding: 10px;
  border: none;
  border-radius: 5px;
  width: 250px;
  font-family: 'GothamBold';
  font-size: 1.2rem;
  color: #3c389e;
  transition: all 0.5s ease-in-out;
  text-align: center;
  cursor: pointer;

  &:hover {
    background-color: #3c389e;
    color: #ffa334;
  }
`;
