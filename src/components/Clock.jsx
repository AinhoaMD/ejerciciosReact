import { useMemo, useState } from "react";
import { useClock } from "../hooks/useClock"
import { formDate, calcularDiferencia } from "../utils/time"

export default function Clock() {
    const { ahora, input, updateInputTime } = useClock();
    const [horaAlarma, setHoraAlarma] = useState(null);

    // Guarda el resultado de un cambio y solo lo recalcula
    // cuando cambia algo
    const horaMerena = useMemo(() => {
        const hora = new Date();
        hora.setHours(17, 0, 0, 0);
        hora.setFullYear(
            ahora.getFullYear(),
            ahora.getMonth(),
            ahora.getDate()
        )
        return hora
    }, [ahora.getDate()])

    const diferencia = calcularDiferencia(ahora, horaMerena)

    function handleSubmit(e) {
        e.preventDefault();
        // Si se ha establecido una alarma
        if (input) {
            // Para formato fecha lolazo
            const fechaAlarma = new Date(input);
            setHoraAlarma(fechaAlarma);
        }
    }

    const alarma = horaAlarma ? calcularDiferencia(ahora, horaAlarma) : null

    return (
        <>
            <h3>{formDate(ahora)}</h3>
            {/* El && solo calcula la diferencia si existe */}
            {diferencia && (
                <p>
                    Tiempo hasta las 17:00{" "}
                    {String(diferencia.horas).padStart(2, "0") +
                        ":" + String(diferencia.minutos).padStart(2, "0") +
                        ":" + String(diferencia.segundos).padStart(2, "0")}
                </p>
            )}
            <form onSubmit={handleSubmit} >
                <input type="datetime-local" onChange={updateInputTime} />
                <button type="submit">ENVIAR</button>
            </form>
            {alarma && (
                <p>
                    Alarma:{" "}
                    {String(alarma.horas).padStart(2, "0") +
                        ":" + String(alarma.minutos).padStart(2, "0") +
                        ":" + String(alarma.segundos).padStart(2, "0")}
                </p>
            )}
        </>
    )
}