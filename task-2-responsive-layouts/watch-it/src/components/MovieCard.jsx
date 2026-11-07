const MovieCard = ({movie}) => {
    return (
        <article className="movie-card">
            <img src={movie.image} alt={`${movie.title} poster`} />

            <div className="movie-card-content">
                <p>{movie.description}</p>

                <button type="button" aria-label={`Watch ${movie.title}`}>
                    WATCH NOW
                </button>
            </div>
        </article>
    )
}

export default MovieCard