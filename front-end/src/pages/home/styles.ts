// styles.ts
import styled from 'styled-components';
import background from '../../assets/img/background.png';
export const Section = styled.section`
  text-align: center;
  margin-top: 5%;
  display: flex;
  justify-content: center;
  align-content: center;
  padding: 0;
  margin: 0;
  height: 100vh;
  overflow-y: hidden;
  background-color: #1f1d1d0a;
  background-image: url(${background});
  background-repeat: repeat-x;
  background-position: bottom;
`;

export const StyledImg = styled.img`
  width: 30%;
`;

export const Results = styled.div`
  font-family: 'GothamLight';
  font-weight: bold;
  margin-top: 20px;
  font-size: 1.5rem;
  color: #ff5863;
`;

export const Links = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
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

export const ResponsiveStyles = styled.div`
  @media only screen and (max-width: 1136px) {
    ${StyledImg} {
      width: 50%;
    }

    ${Links} {
      display: flex;
      flex-direction: column;
      width: 300px;
      height: 280px;
      margin: auto;
      background-color: #f6f6f6;
      border-radius: 20px;
    }

    ${StyledButton} {
      margin: 10px;
    }
  }
`;
