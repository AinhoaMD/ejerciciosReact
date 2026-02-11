export default function Tarjeta({nine, funcion}){
    return (
        <div className="tarjeta" onClick={funcion}>
            <h3>{nine.name}</h3>
        </div>
    )
}