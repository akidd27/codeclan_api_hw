import React, { useState, useEffect } from 'react';

import FilmSelector from "../components/FilmSelector";
import FilmList from '../components/FilmList';
import FilmDetail from '../components/FilmDetail';

import './FilmContainer.css'

const FilmContainer = () => {

    const [films, setFilms] = useState([]);
    const [selectedFilm, setSelectedFilm] = useState(null);

    useEffect(() => {
        getFilms();
    }, []);

    const getFilms = () => {
        fetch('https://ghibliapi.herokuapp.com/films')
        .then(result => result.json())
        .then(films => setFilms(films))
    };

    const onFilmSelected = (film) => {
        setSelectedFilm(film);
    };

    return(
        <div className='main-container'>
            <FilmSelector films={films} onFilmSelected={onFilmSelected}/>
            {selectedFilm && <FilmDetail selectedFilm={selectedFilm}/>}
            <h2>All Films</h2>
            <FilmList films={films}/>
        </div>
    );
};

export default FilmContainer;