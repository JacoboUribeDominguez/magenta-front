import useCreateClient from "./hook/useCreateClient";
import { IconAtrasClient } from "../../const/icons";
import useNavigateClient from "../../hooks/useNavigateClient";
import { useParams, useActionData } from "react-router-dom";


const CreateClient = () => {

    const { id } = useParams();
    const { modificarData, data, createCliente, updateClient } = useCreateClient(id ? id : '');
    const { nombre, direccion, identificacion, telefono, ciudad, correo } = data
    const redireccion = useNavigateClient()
    const { redireccionarVolver } = redireccion;

    return (
        <div className="flex flex-col items-center justify-around h-screen">
            <div className="flex w-full justify-center relative">
                <h1 className="text-5xl my-5 font-bold text-primary-800">{id ? 'Modifica el cliente' : 'Crea tu cliente'}</h1>
            </div>
            <div className="flex justify-center mb-5">
                <div className="flex flex-col">
                    <input 
                        name="nombre"
                        onChange={(event) => modificarData(event.target.name, event.target.value)} 
                        value={nombre}
                        className="mt-5 ml-5 border-b border-b-black-500 border-opacity-30 shadow-md placeholder-opacity-60 placeholder-black-500 px-3 py-2 w-[25rem] rounded-md outline-none"
                        placeholder='Escriba el nombre del cliente' />
                    <input 
                        name="identificacion"
                        onChange={(event) => modificarData(event.target.name, event.target.value)} 
                        value={identificacion}
                        className="mt-5 ml-5 border-b border-b-black-500 border-opacity-30 shadow-md placeholder-opacity-60 placeholder-black-500 px-3 py-2 w-[25rem] rounded-md outline-none"
                        placeholder='Escriba la identificación' />
                    <input 
                        name="ciudad"
                        onChange={(event) => modificarData(event.target.name, event.target.value)} 
                        value={ciudad}
                        className="mt-5 ml-5 border-b border-b-black-500 border-opacity-30 shadow-md placeholder-opacity-60 placeholder-black-500 px-3 py-2 w-[25rem] rounded-md outline-none"
                        placeholder='Escriba la ciudad' />
                </div>
                <div className="flex flex-col">
                    <input 
                        name="direccion"
                        onChange={(event) => modificarData(event.target.name, event.target.value)} 
                        value={direccion}
                        className="mt-5 ml-5 border-b border-b-black-500 border-opacity-30 shadow-md placeholder-opacity-60 placeholder-black-500 px-3 py-2 w-[25rem] rounded-md outline-none"
                        placeholder='Escriba la direccion' />
                    <input 
                        name="telefono"
                        onChange={(event) => modificarData(event.target.name, event.target.value)} 
                        value={telefono}
                        className="mt-5 ml-5 border-b border-b-black-500 border-opacity-30 shadow-md placeholder-opacity-60 placeholder-black-500 px-3 py-2 w-[25rem] rounded-md outline-none"
                        placeholder='Escriba la telefono' />
                    <input 
                        name="correo"
                        onChange={(event) => modificarData(event.target.name, event.target.value)} 
                        value={correo}
                        className="mt-5 ml-5 border-b border-b-black-500 border-opacity-30 shadow-md placeholder-opacity-60 placeholder-black-500 px-3 py-2 w-[25rem] rounded-md outline-none"
                        placeholder='Escriba la correo' />
                </div>
            </div>
            <div className="mb-5 flex">
                <button 
                    onClick={() => redireccionarVolver()}
                    className="px-5 py-3 bg-gradinat-secondary-lr rounded-md text-white w-[10rem] mr-10 shadow-xl">
                    Volver
                </button>  
                <button className="px-5 py-3 bg-gradinat-primary-lr rounded-md text-white w-[10rem] shadow-xl"
                    onClick={() => id ? updateClient() : createCliente()}
                >
                    {id ? 'Modificar cliente' : 'Crear cliente'}
                </button>
            </div>
        </div>
    )
}

export default CreateClient