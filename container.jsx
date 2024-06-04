import styles from "./container.modules.css";

/**
 * membuat component container
 * menggunakan teknik composition: children
 */
function Container({ children }) {
    return (
        <div className={styles.container}>
            {children}
        </div>
    )
}

export default Container;