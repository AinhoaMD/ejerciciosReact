export default function Contadores({ casa, parque }){
    return(
        <div>
            <p>Niños en Casa: <span>{casa}</span></p>
            <p>Niños en Parque: <span>{parque}</span></p>
        </div>
    )
}