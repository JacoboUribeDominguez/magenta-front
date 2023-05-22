import useCreatePackage from "./hook/useCreatePackage";
import useNavigatePackage from "../../hooks/useNavigatePackage";
import { useParams } from "react-router-dom";

const CrearPackage = () => {

    const { id } = useParams()
    const { modificarData, modificarPackage, dataPackage, crearPackage } = useCreatePackage(id ? id : '')
    const { nombre, precio } = dataPackage
    const redireccionar = useNavigatePackage()
    const { redireccionarVolver } = redireccionar

    return (
        <div className="bg-[#201E06] h-full p-10 flex flex-col justify-center relative">
            <div
                className="absolute top-0 x right-0 bg-white mr-5 mt-5 px-3 py-1 rounded-full"
                onClick={() => redireccionarVolver()}
            >
                x
            </div>
            <h1 className="text-white text-3xl text-center font-bold">
                {id ? 'Modifica el Paquete' : 'Crea tu Paquete'}
            </h1>
            <div className="w-full flex justify-center py-10">
                <input
                    name="nombre"
                    className="outline-none text-white mx-4 py-3 px-2 bg-transparent border-b-white border-b placeholder:text-white"
                    type="text"
                    placeholder='Digita el nombre'
                    onChange={(e) => modificarData(e.target.name, e.target.value)} value={nombre}
                />
                <input
                    name="precio"
                    className="outline-none text-white mx-4 py-3 px-2 bg-transparent border-b-white border-b placeholder:text-white"
                    type="text"
                    placeholder='Digita el precio'
                    onChange={(e) => modificarData(e.target.name, e.target.value)} value={precio}
                />
            </div>
            <div className="flex justify-center">
                <button
                    className="text-bg-black-500 bg-white px-5 py-1 rounded text-lg"
                    onClick={() => id ? modificarPackage() : crearPackage()}
                >
                    {id ? 'Modificar' : 'Crear'}
                </button>
            </div>
        </div>
    )
}

export default CrearPackage;