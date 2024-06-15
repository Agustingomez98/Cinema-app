import styles from "./NotFound.module.css"

export const NotFound = () => {

    return (
        <section className={styles.container}>
            <h2 className={styles.error}>404</h2>
            <p className={styles.message}>Pagina no encontrada</p>
        </section>
    )
}