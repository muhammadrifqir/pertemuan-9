/**
 * import css module navbar
 * disimpan di object styles
 */
import styles from "./Navbar.module.css";
// import link dari react router
import { Link } from "react-router-dom";

/**
 * membuat link/navigasi 
 * menggunakan link component dari react router
 */
function Navbar() {
    /**
     * menggunakan styles yang sudah diimport
     * memanggilnya menggunakan expression
     */
    return (
        <div className={styles.container}>
            <nav className={styles.navbar}>
                <div>
                    <h1 className={styles.navbar__brand}>Movie App</h1>
                </div>
                <div>
                    <ul className="Navbar_navbar__list__6PC4T">
                        <li className="Navbar_navbar__item__rXPxp">
                            <a href="/">Home</a></li>
                        <li className="Navbar_navbar__item__rXPxp">
                            <a href="/movie/create">Add Movie</a></li>
                        <li className="Navbar_navbar__item__rXPxp">
                            <a href="/movie/popular">Popular</a></li>
                        <li className="Navbar_navbar__item__rXPxp">
                            <a href="/movie/now">Now Playing</a></li>
                        <li className="Navbar_navbar__item__rXPxp">
                            <a href="/movie/top">Top Rated</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;