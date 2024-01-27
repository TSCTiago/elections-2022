import { Routes as RoutesContainer, Route } from 'react-router-dom';
import Home from './pages/home';
import Candidate from './pages/candidate';
import PoliticalPosition from './pages/politicalPosition';
import City from './pages/city';
import GeneralResult from './pages/generalResult';
// import NavBar from './components/NavBar';
export function Routes() {
  return (
    <>
      {/* <NavBar /> */}
      <RoutesContainer>
        <Route path="/" element={<Home />} />
        <Route path="/candidate" element={<Candidate />} />
        <Route path="/political-position" element={<PoliticalPosition />} />
        <Route path="/city" element={<City />} />
        <Route path="/general-result" element={<GeneralResult />} />
      </RoutesContainer>
    </>
  );
}
