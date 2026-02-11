// Para este ejercicio, ver este archivo y useForm.jsx
import useForm from "../hooks/useForm";

export default function Formulario() {
    const {
        formData,
        formErrores,
        validarNombre,
        validarEdad,
        validarDireccion,
        validarClase,
        handleChange,
        handleClassErrors,
        handleSubmit
    } = useForm();

    return (
        <>
            <h1>Formulario</h1>
            <form onSubmit={handleSubmit}
                className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-lg"
                noValidate>
                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Nombre</label>
                    <input
                        type="text"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        placeholder="Introduce tu nombre"
                        className={handleClassErrors("nombre", validarNombre)}
                    />
                </div>

                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Edad</label>
                    <input
                        name="edad"
                        type="number"
                        value={formData.edad}
                        onChange={handleChange}
                        className={handleClassErrors("edad", validarEdad)}
                    />
                </div>

                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Dirección</label>
                    <input
                        name="direccion"
                        type="text"
                        value={formData.direccion}
                        onChange={handleChange}
                        placeholder="Introduce tu dirección"
                        className={handleClassErrors("direccion", validarDireccion)}
                    />
                </div>

                    {/* <label>Teléfono</label>
                <input
                    name="telefono"
                    type="tel"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Contraseña"
                /> */}

                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Clase</label>
                        <select
                            name="clase"
                            value={formData.clase}
                            onChange={handleChange}
                            className={handleClassErrors("clase", validarClase)}
                        >
                            <option value="">Selecciona una clase</option>
                            <option value="rosas">Rosas</option>
                            <option value="girasoles">Girasoles</option>
                            <option value="cerezos">Cerezos</option>
                        </select>
                    </div>

                    <button type="submit"
                    className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 disabled:bg-gray-400 disabled:cursor-not-allowed">
                        Enviar</button>
                    {/* <button type="reset">RESET</button> */}

                    {formErrores &&
                        // Lo convierte de nuevo a un array con indice y valor, 
                        // para poder mapearlo y recorrerlo
                        Object.values(formErrores).map((error, index) => (
                            <p key={index}>{error}</p>
                        ))}
            </form>
        </>
    )
}