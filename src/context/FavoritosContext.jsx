import { createContext, useContext, useState } from "react";

//TODO Creacion del contexto para los favoritos
export const FavoritosContext = createContext();

// Nombre de visualizacion (opcional)
FavoritosContext.displayName = "Favoritos";

//! Componente proveedor del contexto
export const FavoritosProvider = ({ children }) => {
    //Estado local para almacenar la lista de favoritos
    const [favorito, setFavorito] = useState([]);

    // El componente Provider provee el valor del contexto a sus hijos
    return <FavoritosContext.Provider value={{ favorito, setFavorito }} >
        {children}
    </FavoritosContext.Provider>;
}

//TODO Hook personalizado oara usar el contexto de favoritos
export const useFavoritosContext = () => {
    //*Obtener le valor del contexto (deestructuracion)
    const {favorito, setFavorito} = useContext(FavoritosContext);

    //? Funcion para agregar o quitar un favorito

    function agregarFavorito(nuevoFavorito) {
        //* Verificar si el nuevo favorito ya esta en la lista
        const favoritoRepetido = favorito.some(item => item.id === nuevoFavorito.id);

        let nuevaLista = [...favorito];
        if (!favoritoRepetido) {
            //* Si no esta repetido, se agrega el nuevo favorito a la lista
            nuevaLista.push(nuevoFavorito);
            return setFavorito(nuevaLista);
        }

        //* Si esta repetido, se elimina de la lista
        nuevaLista = favorito.filter(item => item.id !== nuevoFavorito.id);
        return setFavorito(nuevaLista);
    }

    //* Devolvemos la lista de favoritos y la funcion para agregar y quitar favoritos
    return{favorito, agregarFavorito};
}