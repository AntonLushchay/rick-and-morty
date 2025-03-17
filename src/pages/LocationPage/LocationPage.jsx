import axios from 'axios';
import { useEffect, useState } from 'react';
import s from './LocationPage.module.css';

export const LocationPage = () => {
    const [locations, setLocations] = useState([]);
    const [info, setInfo] = useState({
        count: 0,
        pages: 0,
        next: null,
        prev: null,
    });
    const [error, setError] = useState(null);

    useEffect(() => {
        axios
            .get(`https://rickandmortyapi.com/api/location`)
            .then((res) => {
                setLocations(res.data.results);
                setInfo(res.data.info);
                setError(null);
            })
            .catch((error) => {
                setError(error.response.data.error);
            });
    }, []);

    const nextLocationPageHandler = () => {
        axios
            .get(info.next)
            .then((res) => {
                setLocations(res.data.results);
                setInfo(res.data.info);
                setError(null);
            })
            .catch((error) => {
                setError(error.response.data.error);
            });
    };

    const previousLocationPageHandler = () => {
        axios
            .get(info.prev)
            .then((res) => {
                setLocations(res.data.results);
                setInfo(res.data.info);
                setError(null);
            })
            .catch((error) => {
                setError(error.response.data.error);
            });
    };

    return (
        <div className={'pageContainer'}>
            <h2 className={'pageTitle'}>Location Page</h2>
            {error && <div className={'errorMessage'}>{error}</div>}
            {!error && locations.length && (
                <div>
                    {locations.map((location) => {
                        return (
                            <div key={location.id}>
                                <ul className={s.locationList}>
                                    <li>
                                        Название локации: <span className={s.locationSpanProps}>{location.name}</span>
                                    </li>
                                    <li>
                                        Тип локации: <span className={s.locationSpanProps}>{location.type}</span>
                                    </li>
                                    <li>
                                        Измерение, в котором находится местоположение:{' '}
                                        <span className={s.locationSpanProps}>{location.dimension}</span>
                                    </li>
                                    <li>
                                        Количество персонажей, которых видели в данной локации:{' '}
                                        <span className={s.locationSpanProps}>{location.residents.length}</span>
                                    </li>
                                </ul>
                            </div>
                        );
                    })}
                </div>
            )}
            <div className={'buttonContainer'}>
                <button className={'linkButton'} disabled={info.prev === null} onClick={previousLocationPageHandler}>
                    Previous
                </button>
                <button className={'linkButton'} disabled={info.next === null} onClick={nextLocationPageHandler}>
                    Next
                </button>
            </div>
        </div>
    );
};
