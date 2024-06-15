import { Banner } from "../../components/Banner/Banner"
import styles from "./Player.module.css"
import { Titulo } from "../../components/Titulo/Titulo";
import { useParams } from "react-router-dom"
import videos from "../../data/db.json"
import { NotFound } from "../../pages/NotFound/NotFount";
import { useEffect, useState } from "react";


export const Player = () => {
    const [video,setVideos] = useState([]);

    const parametros = useParams();
    //const video = videos.find(video => video.id === Number(parametros.id));
    useEffect(() => {
        fetch(`https://my-json-server.typicode.com/agustingomez98/alura-cinema-api/videos?id=${parametros.id}`)
        .then(response=> response.json())
        .then(data=> setVideos(...data));
    },[]);

    if (!video) return <NotFound />
    return (<>
        <Banner img="player" color="#58B9AE" />
        <Titulo>
            <h1>Player</h1>
        </Titulo>
        <section className={styles.container}>
            <iframe
                width="100%" height="100%"
                src={video.link}
                title={video.titulo}
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </section>
    </>)
}