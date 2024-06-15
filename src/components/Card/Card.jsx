import { Link } from "react-router-dom"
import { useFavoritosContext } from "../../context/FavoritosContext"
import styles from "./Card.module.css"
import iconFavorito from "./icon-favorito.png"
import iconNoFavorito from "./icon-no-favorito.png"

export const Card = ({id, capa, titulo}) => {

    const {favorito, agregarFavorito} = useFavoritosContext();
    const isFavorito = favorito.some( fav => fav.id === id);
    const icon = isFavorito ? iconFavorito : iconNoFavorito;

    return (
        <div className={styles.container}>
            <Link className={styles.link} to={`/${id}`}>
            <img src={capa} alt={titulo} className={styles.image}/>
            <h2>{titulo}</h2>
            </Link>
            <img 
            src={icon} 
            alt="icono favorito" 
            onClick={()=> agregarFavorito({id,titulo,capa})}/>
        </div>
    )
}