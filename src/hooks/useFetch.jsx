import { useEffect, useState } from "react";

export default function useFetch(url) {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(datos => setData(datos))
    }, [url])

    return {data}
}