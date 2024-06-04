import { useState } from "react";
import Hello from "./Hello"
/**
 * Membuat component Main.
 * Component Main menampung konten utama.
 */

function Main() {
      /**
       * ini hanya snippet(potongan) code
       * kode yang lainnya tetap sama
       */

      /**
       * mengangkat stave movies: lifting state
       * dari component movies ke component home
       * agar bisa digunakan oleh component yang lain
       */
      const [movies, setMovies] = useState(data);

  return (
    <main>
      <Hero />
      {/**mengirim props: state movies */}
      <Movies movies={movies} setMovies={setMovies} />
      <AddMovieForm movies={movies} setMovies={setMovies} />
    </main>
  );
}

export default Main;
