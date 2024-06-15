import { Cabecera } from "../../components/Cabecera/Cabecera"
import { Container } from "../../components/Container/Container"
import { Footer } from "../../components/Footer/Footer"
import { FavoritosProvider } from "../../context/FavoritosContext"
import { Outlet } from "react-router-dom"

export const PaginaBase = () => {

    return (
        <main>
            <Cabecera/>
            <FavoritosProvider>
                <Container>
                    <Outlet/>
                </Container>
            </FavoritosProvider>
            <Footer/>
        </main>
    )
}