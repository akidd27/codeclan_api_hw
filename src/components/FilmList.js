const FilmList = ({ films }) => {

    const listItems = films.map((film, index) => {
        return (
            <li key={index}>
                <h3>{film.title} ({film.release_date})</h3>
                <p>{film.description}</p>
            </li>
        )
    })

    return(
        <ul>
            {listItems}
        </ul>
    );
};

export default FilmList;