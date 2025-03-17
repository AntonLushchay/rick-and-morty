import React, { useEffect, useState } from 'react';
import axios from 'axios';
import s from './EpisodePage.module.css';

export const EpisodePage = () => {
    const [episodes, setEpisodes] = useState([]);
    const [info, setInfo] = useState({
        count: 0,
        pages: 0,
        next: null,
        prev: null,
    });
    const [error, setError] = useState(null);

    useEffect(() => {
        axios
            .get(`https://rickandmortyapi.com/api/episode`)
            .then((res) => {
                setEpisodes(res.data.results);
                setInfo(res.data.info);
                setError(null);
            })
            .catch((error) => {
                setError(error.response.data.error);
            });
    }, []);

    const nextEpisodesPageHandler = () => {
        axios
            .get(info.next)
            .then((res) => {
                setEpisodes(res.data.results);
                setInfo(res.data.info);
                setError(null);
            })
            .catch((error) => {
                setError(error.response.data.error);
            });
    };

    const previousEpisodesPageHandler = () => {
        axios
            .get(info.prev)
            .then((res) => {
                setEpisodes(res.data.results);
                setInfo(res.data.info);
                setError(null);
            })
            .catch((error) => {
                setError(error.response.data.error);
            });
    };

    return (
        <div className={'pageContainer'}>
            <h2 className={'pageTitle'}>Episods Page</h2>
            {error && <div className={'errorMessage'}>{error}</div>}
            {!error && episodes.length && (
                <div>
                    {episodes.map((episode) => {
                        return (
                            <div key={location.id}>
                                <ul className={s.episodeList}>
                                    <li>
                                        Эпизод: <span className={s.episodSpanProps}>{episode.episode}</span>
                                    </li>
                                    <li>
                                        Название эпизода: <span className={s.episodSpanProps}>{episode.name}</span>
                                    </li>
                                    <li>
                                        Дата выхода эпизода в эфир:{' '}
                                        <span className={s.episodSpanProps}>{episode.air_date}</span>
                                    </li>
                                    <li>
                                        Список персонажей, которые были замечены в эпизоде:{' '}
                                        <span className={s.episodSpanProps}>{episode.characters.length}</span>
                                    </li>
                                </ul>
                            </div>
                        );
                    })}
                </div>
            )}
            <div className={'buttonContainer'}>
                <button className={'linkButton'} disabled={info.prev === null} onClick={previousEpisodesPageHandler}>
                    Previous
                </button>
                <button className={'linkButton'} disabled={info.next === null} onClick={nextEpisodesPageHandler}>
                    Next
                </button>
            </div>
        </div>
    );
};
