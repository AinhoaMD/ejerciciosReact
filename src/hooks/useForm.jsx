import { useState } from "react";

export default function useForm() {
    const [formData, setFormData] = useState({
        nombre: "",
        edad: 0,
        direccion: "",
        telefono: "",
        clase: "",
        alergenos: [],
    })

    // Esto lo usaremos pa guardar errores 
    const [formErrores, setFormErrores] = useState({
        nombre: "",
        edad: null,
        direccion: "",
        telefono: "",
        clase: "",
    })

    // Todas las funciones de validad returnean null si no hay errores
    function validarNombre(texto) {
        if (!texto.trim()) return "El nombre es obligatorio";
        if (texto.length < 3 || texto.length > 50)
            return "El nombre debe contar con entre 3 y 50 caracteres";
        return null;
    }

    function validarEdad(edad) {
        if (!edad) return "La edad es obligatoria";
        if (edad < 3 || edad > 5) return "La edad debe estar entre 3 y 5 años"
        return null;
    }

    function validarDireccion(direccion) {
        if (!direccion.trim()) return "La dirección es obligatoria";
        if (direccion.length > 50) return "Máximo 50 caracteres";
        return null;
    }

    function validarClase(clase) {
        if (!clase) return "Selecciona una clase";
        if (clase !== "rosas" && clase !== "girasoles" && clase !== "cerezos")
            return "Elige una clase válida";
        return null;
    }

    // Función manejadora de cambios
    function handleChange(e) {
        // El target nos devuelve el name del elemento activador y el value dado
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    // La mítica, al enviar el form primero nuestro querido e.preventDefault()
    function handleSubmit(e) {
        e.preventDefault();
        // Vemos si hay errores
        const nuevosErrores = {
            nombre: validarNombre(formData.nombre),
            edad: validarEdad(formData.edad),
            direccion: validarDireccion(formData.direccion),
            clase: validarClase(formData.clase),
        };
        // Convierte el objeto local en un array 
        // con solo los valores de los errores. Coge solo aquellos distintos a null
        const erroresFiltrados = Object.values(nuevosErrores).filter(
            (el) => el && el !== "",
        );

        console.log(erroresFiltrados);

        // Si este array es mayor que 0 significa que hay errores, 
        // asi que los seteamos
        if (erroresFiltrados.length > 0) {
            setFormErrores(erroresFiltrados)
            return;
        }
        alert("Formulario enviado");
        setFormErrores({});
    }

    function handleClassErrors(field, validator) {
        const baseClase = "w-full p-3 border rounded-lg border-gray-300 bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-100";

        // Valido el campo que sea (si no hay errores devuelve null, si hay errores existe)
        const isInvalid = validator(formData[field]);
        if (isInvalid)
            return ( baseClase + " border-red-500 bg-red-50 focus:ring-2 focus:ring-red-200");
        else {
            return baseClase
        }
    }

    return {
        formData,
        formErrores,
        validarNombre,
        validarEdad,
        validarDireccion,
        validarClase,
        handleChange,
        handleClassErrors,
        handleSubmit,
    };
}