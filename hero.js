function Hero () {
    // just snippet: access movie and replace in jsx

    return (
        <section>
            <div>
                <h2>{movie.Title}</h2>
                <h3>Genre: {movie.Genre}</h3>
                <p>{movie.Plot}</p>
            </div>
            <div>
                <img src={movie.Poster} alt={movie.Title}></img>
            </div>
        </section>
    )
}