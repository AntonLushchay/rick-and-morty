import { useEffect, useState } from 'react';
import axios from 'axios';
import s from './CharacterPage.module.css';
import { Link } from 'react-router';

export const CharacterPage = () => {
    const [characters, setCharacters] = useState([]);
    const [info, setInfo] = useState({
        count: 0,
        pages: 0,
        next: null,
        prev: null,
    });
    const [error, setError] = useState(null);

    const fetchData = (url) => {
        axios
            .get(url)
            .then((res) => {
                setCharacters(res.data.results);
                setInfo(res.data.info);
                setError(null);
            })
            .catch((error) => {
                setError(error.response.data.error);
            });
    };

    useEffect(() => {
        fetchData(`https://rickandmortyapi.com/api/character`);
    }, []);

    const previousPageHandler = () => {
        fetchData(info.prev);
    };

    const nextPageHandler = () => {
        fetchData(info.next);
    };

    const changeHendler = (e) => {
        fetchData(`https://rickandmortyapi.com/api/character/?name=${e.target.value}`);
    };

    return (
        <div className={'pageContainer'}>
            <h1 className={'pageTitle'}>Character Page</h1>
            <input className={s.search} type='search' placeholder='search...' onChange={changeHendler} />
            {error && <div className={'errorMessage'}>{error}</div>}
            {!error && characters.length && (
                <>
                    <div className={s.characters}>
                        {characters.map((character) => {
                            return (
                                <div className={s.character} key={character.id}>
                                    <Link to={`/rick-and-morty/characters/${character.id}`} className={s.characterLink}>
                                        {character.name}
                                    </Link>
                                    <img src={character.image} alt={`${character.name} avatar`} />
                                </div>
                            );
                        })}
                    </div>
                    <div className={'buttonContainer'}>
                        <button className={'linkButton'} disabled={info.prev === null} onClick={previousPageHandler}>
                            Previous
                        </button>
                        <button className={'linkButton'} disabled={info.next === null} onClick={nextPageHandler}>
                            Next
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};
