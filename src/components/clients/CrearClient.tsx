import useCreateClient from "./hook/useCreateClient";
import { IconAtrasClient } from "../../const/icons";
import useNavigateClient from "../../hooks/useNavigateClient";
import { useParams } from "react-router-dom";


const CrearClient = () => {

    const { id } = useParams();
    const { modificarData, data, crearCliente, modificarCliente } = useCreateClient(id ? id : '');
    const { nombre, direccion, identificacion, telefono, ciudad, correo } = data
    const redireccion = useNavigateClient()
    const { redireccionarVolver } = redireccion;
    return (
        <div className="flex flex-col items-center justify-around h-screen">
            <div>
                <div
                    onClick={() => redireccionarVolver()}
                >
                    {IconAtrasClient}
                </div>
                <h1 className="text-5xl my-5 font-bold text-primary-800">{id ? 'Modifica el cliente' : 'Crea tu cliente'}</h1>
            </div>
            <div className="flex justify-center mb-5">
                <div className="flex flex-col">
                    <input name="nombre" onChange={(event) => modificarData(event.target.name, event.target.value)} value={nombre} className="mt-5 ml-5 border border-primary-500 placeholder-opacity-60 placeholder-primary-500 px-3 py-2 w-[25rem] rounded-md" placeholder='Escriba el nombre del cliente' />
                    <input name="identificacion" onChange={(event) => modificarData(event.target.name, event.target.value)} value={identificacion} className="mt-5 ml-5 border border-primary-500 placeholder-opacity-60 placeholder-primary-500 px-3 py-2 w-[25rem] rounded-md" placeholder='Escriba la identificación' />
                    <input name="ciudad" onChange={(event) => modificarData(event.target.name, event.target.value)} value={ciudad} className="mt-5 ml-5 border border-primary-500 placeholder-opacity-60 placeholder-primary-500 px-3 py-2 w-[25rem] rounded-md" placeholder='Escriba la ciudad' />
                </div>
                <div className="flex flex-col">
                    <input name="direccion" onChange={(event) => modificarData(event.target.name, event.target.value)} value={direccion} className="mt-5 ml-5 border border-primary-500 placeholder-opacity-60 placeholder-primary-500 px-3 py-2 w-[25rem] rounded-md" placeholder='Escriba la direccion' />
                    <input name="telefono" onChange={(event) => modificarData(event.target.name, event.target.value)} value={telefono} className="mt-5 ml-5 border border-primary-500 placeholder-opacity-60 placeholder-primary-500 px-3 py-2 w-[25rem] rounded-md" placeholder='Escriba la telefono' />
                    <input name="correo" onChange={(event) => modificarData(event.target.name, event.target.value)} value={correo} className="mt-5 ml-5 border border-primary-500 placeholder-opacity-60 placeholder-primary-500 px-3 py-2 w-[25rem] rounded-md" placeholder='Escriba la correo' />
                </div>
            </div>
            <button className="m-5 px-5 py-3 bg-primary-500 rounded-md text-white w-[10rem]"
                onClick={() => id ? modificarCliente() : crearCliente()}
            >
                {id ? 'Modificar cliente' : 'Crear cliente'}
            </button>
        </div>
    )
}

export default CrearClient