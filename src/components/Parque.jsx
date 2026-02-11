// Para el ejercicio del parque ver Parque.jsx, 
// Contadores.jsx, Tarjeta.jsx y Tarjetas.jsx

import { useEffect, useState } from "react"
// import useFetch from "../hooks/useFetch"
import Contadores from "./Contadores";
import Tarjetas from "./Tarjetas";

const url = "https://jsonplaceholder.typicode.com/users"

export default function Parque(){
    const [ninesParque, setNinesParque] = useState([]);
    const [ninesCasa, setNinesCasa] = useState([]);

    // DOS MANERAS DE HACER FETCH DES/COMENTAR

    // 1. MANERA SENCILLA:
    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => setNinesCasa(data))
        console.log(ninesCasa)
    }, [])

    // 2. CON UN HOOK (des/comentar import)
    // const { data } = useFetch(url);
    // useEffect(() => {
    //     if (data) {
    //         setNinesCasa(data);
    //     }
    //     console.log(ninesCasa)
    // }, [data])

    function irParque(){
        // Si no hay niños en casa no se peude ejecutar
        if (ninesCasa.length == 0) return;

        // Seleccionamos un niño aleatorio para patear
        const indiceAleatorio = Math.floor(Math.random() * ninesCasa.length);
        const nineAleatorio = ninesCasa[indiceAleatorio]

        // No se debe alterar el array original, so
        // creamos otro, FILTRANDO y escogiendo todos menos el aleatorio
                                    // n es cada uno de los niños del array
        setNinesCasa(ninesCasa.filter(n => n.id != nineAleatorio.id))
        // actualizamos los niños pateados
        setNinesParque([...ninesParque, nineAleatorio])
    }

    // aquí pateamos a un niño en concreto pa que se vaya a su casa
    function irCasa(ninePateado){
        setNinesParque(ninesParque.filter(n => n.id != ninePateado.id));
        setNinesCasa([...ninesCasa, ninePateado])
    }

    return (
        <>
            <h1>Parque</h1>
            <Contadores casa={ninesCasa.length} parque={ninesParque.length} />

            <Tarjetas nines={ninesParque} funcion={irCasa} />

            {/* Este botón patea a un niño pal parque */}
            <button onClick={irParque}>Ir Parque</button>
        </>
    )
}