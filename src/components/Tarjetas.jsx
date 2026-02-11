import Tarjeta from "./Tarjeta"

export default function Tarjetas({nines, funcion}){
    return (
        <div>
            {/* Por cada niño en niñes hay que hacer una tarjeta */}
            {nines.map(n => (
                <Tarjeta
                    key={n.id}
                    nine={n}
                    funcion={() => funcion(n)}
                    />
            ))}
        </div>
    )
}