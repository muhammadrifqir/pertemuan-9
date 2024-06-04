import { useEffect, useState } from "react";
import styles from "./Hero.module.css";

function Hero () {
    // membuat state movie
    const [movie, setMovie] = useState("");

    useEffect(() => {
        async function fetchMovie() {
            const url = "https://www.omdbapi.com/?apikey=fcf50ae6&i=tt2975590";

            // melakukan fetch data dari api omdb
            const response = await fetch(url);
            const data = await response.json();

            setMovie(data);
        }

        fetchMovie();
    }, []);

    // kode lainnya dibawah
    return (
        <div className={styles.container}>
            <section className={styles.hero}>
            <div className={styles.hero__left}>
                <h2 className={styles.hero__title}>Spiderman</h2>
                <h3 className={styles.hero__genre}>Genre: Thriller, Drama, Romance</h3>
                <p className={styles.hero__description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio itaque, dolore maiores soluta dicta quisquam, reiciendis voluptas mollitia dignissimos quis perspiciatis fuga, rerum laboriosam. Nostrum aliquid cupiditate eligendi vero ipsa?</p>
                <button className={styles.hero__button}>Watch</button>
            </div>
            <div className={styles.hero__right}>
                <img className={styles.hero__image} src="https://picsum.photos/536/354" alt="placeholder"></img>
            </div>
            </section>
        </div>
    );
}


export default Hero;