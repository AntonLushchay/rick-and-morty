import { CharacterPage } from './pages/CharacterPage/CharacterPage';
import { Character } from './pages/CharacterPage/Character/Charecter';
import { HomePage } from './pages/HomePage/HomePage';
import { LocationPage } from './pages/LocationPage/LocationPage';
import { EpisodePage } from './pages/EpisodePage/EpisodePage';
import { Header } from './common/components/Header/Header';
import { Routes, Route } from 'react-router';

function App() {
    return (
        <div>
            <Header />
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/characters' element={<CharacterPage />} />
                <Route path='/characters/:id' element={<Character />} />
                <Route path='/locations' element={<LocationPage />} />
                <Route path='/episodes' element={<EpisodePage />} />
            </Routes>
        </div>
    );
}

export default App;
