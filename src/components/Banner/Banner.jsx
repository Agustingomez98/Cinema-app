import styles from "./Banner.module.css"

export const Banner = ({img,color}) => {
    return (
        <div className={styles.banner} style={{backgroundImage: `url("/img/banner-${img}.png")`}}>
            <div className={styles.gradient} style={{background:`${color}`}}></div>
        </div>

    )
}