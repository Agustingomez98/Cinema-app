import styles from "./Favoritos.module.css"
import videos from "../../data/db.json"
import { Banner } from "../../components/Banner/Banner";
import { Titulo } from "../../components/Titulo/Titulo";
import { Card } from "../../components/Card/Card";
import { useFavoritosContext } from "../../context/FavoritosContext";

export const Favoritos = () => {

    const {favorito} = useFavoritosContext()
    return (<>
        <Banner img={"favoritos"} color="#rgba(0, 191, 99, 0.24)" />
        <Titulo>
            <h1>Favoritos</h1>
        </Titulo>
        <section className={styles.container}>
            {
                favorito.map((fav) => {
                    return <Card {...fav} key={fav.id} />
                })
            }
        </section>
    </>)
}