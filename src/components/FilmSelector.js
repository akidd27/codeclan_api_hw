const FilmSelector = ({ films, onFilmSelected }) => {

    const filmOptions = () => {
        return films.map((film, index) => {
            return(
                <option key={index} value={index}>{film.title}</option>
            );
        });
    };

    const handleChange = (event) => {
        const chosenFilm = films[event.target.value];
        onFilmSelected(chosenFilm);
    }

    return(
        <select defaultValue="" onChange={handleChange}>
            <option>Choose a film...</option>
            {filmOptions()}
        </select>
    );
};

export default FilmSelector;