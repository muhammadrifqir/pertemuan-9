import { useState } from "react";

function Home () {
    const [movies, setMovies] = useState(data);
    return (
        <>
        <Hero />
        {/**mengirim props: state movies */}
        <Movies movies={movies} setMovies={setMovies}/>
        <AddMovieForm movies={movies} setMovies={setMovies} />
        <h1>Halaman Home</h1>
        </>
    );
}

export default Home;