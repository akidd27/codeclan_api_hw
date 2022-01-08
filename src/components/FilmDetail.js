import './FilmDetail.css'

const FilmDetail = ({ selectedFilm }) => {

    return(
        <div id="film-detail">
            <h3>{selectedFilm.original_title} ({selectedFilm.title})</h3>
            <img src={selectedFilm.movie_banner}></img>
            <p>{selectedFilm.description}</p>
        </div>
    );
};

export default FilmDetail;