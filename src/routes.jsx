import { Routes, Route } from "react-router-dom";
import { Inicio } from "./pages/Inicio/Inicio.jsx";
import { Favoritos } from "./pages/favoritos/Favoritos.jsx";
import { Player } from "./pages/Player";
import { NotFound } from "./pages/NotFound/NotFount.jsx";
import { PaginaBase } from "./pages/PaginaBase";

export const AppRoutes = () => {
    return (<>
        <Routes>
            <Route path="/" element={<PaginaBase />}>
                <Route index element={<Inicio />} />
                <Route path="favoritos" element={<Favoritos />} />
                <Route path=":id" element={<Player />} />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    </>)
}
    ;