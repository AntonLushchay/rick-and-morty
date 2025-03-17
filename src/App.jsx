import { CharacterPage } from './pages/CharacterPage/CharacterPage';
import { Character } from './pages/CharacterPage/Character/Charecter';
import { HomePage } from './pages/HomePage/HomePage';
import { LocationPage } from './pages/LocationPage/LocationPage';
import { EpisodePage } from './pages/EpisodePage/EpisodePage';
import { Header } from './common/components/Header/Header';
import { Route, Routes } from 'react-router';

function App() {
    return (
        <div>
            <Header />
            <Routes>
                <Route path='/rick-and-morty/' element={<HomePage />} />
                <Route path='/rick-and-morty/characters' element={<CharacterPage />} />
                <Route path='/rick-and-morty/characters/:id' element={<Character />} />
                <Route path='/rick-and-morty/locations' element={<LocationPage />} />
                <Route path='/rick-and-morty/episodes' element={<EpisodePage />} />
            </Routes>
        </div>
    );
}

export default App;
