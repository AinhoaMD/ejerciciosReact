import { useEffect, useState } from "react";

export function useClock(){
    const [ahora, setAhora] = useState(new Date())
    const [input, setInputTime] = useState("")

    function updateInputTime(e) {
        setInputTime(e.currentTarget.value)
    }

    useEffect(() => {
        const clockInterval = setInterval(() => {
            setAhora(new Date())
        }, 1000)

        return () => clearInterval(clockInterval)
    }, [])

    return {ahora, input, updateInputTime}
}