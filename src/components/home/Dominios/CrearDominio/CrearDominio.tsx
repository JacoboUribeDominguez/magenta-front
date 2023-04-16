import ReactDOM from 'react-dom';
import useCreateHosting from '../../hook/useCreateHosting';

interface Props {
    cerrar: Function
}

const CrearDominio = ({ cerrar }: Props) => {

    const { modificarDataHosting, dataHostings, crearHosting } = useCreateHosting();
    const { url, usuario, contrasena, fecha_vencimiento, notas } = dataHostings;

    return ReactDOM.createPortal(
        <div className="absolute w-[45rem] rounded-md border bg-white top-20 right-5 z-10 pt-5">
            <div className="flex justify-between px-5">
                <h1 className="text-primary-500 font-bold text-2xl">Crea tu nuevo hosting!</h1>
                <button className="bg-primary-500 rounded-full px-3 text-white" onClick={() => cerrar()}>
                    x
                </button>
            </div>
            <div className="mt-3 flex flex-col px-24 bg-primary-500 pb-5">
                <input 
                    name="url"
                    className="my-4 border border-b-white border-t-0 border-l-0 border-r-0 placeholder:text-white bg-transparent px-2" 
                    type="text" placeholder="Digita la url" 
                    onChange={(e) => modificarDataHosting(e.target.name, e.target.value)} value={url}
                />
                {/* <input className="my-4 border border-b-white border-t-0 border-l-0 border-r-0 placeholder:text-white bg-transparent px-2" type="text" placeholder="Selecciona un cliente" /> */}
                <input 
                    name="usuario"
                    className="my-4 border border-b-white border-t-0 border-l-0 border-r-0 placeholder:text-white bg-transparent px-2" 
                    type="text" placeholder="Digita el usuario" 
                    onChange={(e) => modificarDataHosting(e.target.name, e.target.value)} value={usuario}
                />
                <input 
                    name="contrasena"
                    className="my-4 border border-b-white border-t-0 border-l-0 border-r-0 placeholder:text-white bg-transparent px-2" 
                    type="text" placeholder="Digita la contraseña" 
                    onChange={(e) => modificarDataHosting(e.target.name, e.target.value)} value={contrasena}
                />
                {/* <input className="my-4 border border-b-white border-t-0 border-l-0 border-r-0 placeholder:text-white bg-transparent px-2" type="text" placeholder="Selecciona el paquete" /> */}
                <input 
                    name="fecha_vencimiento"
                    className="my-4 border border-b-white border-t-0 border-l-0 border-r-0 placeholder:text-white bg-transparent px-2" 
                    type="text" 
                    placeholder="Digita la fecha de vencimiento" 
                    onChange={(e) => modificarDataHosting(e.target.name, e.target.value)} value={fecha_vencimiento}
                />
                <input 
                    name="notas"
                    className="my-4 border border-b-white border-t-0 border-l-0 border-r-0 placeholder:text-white bg-transparent px-2" 
                    type="text" 
                    placeholder="Notas"
                    onChange={(e) => modificarDataHosting(e.target.name, e.target.value)} value={notas}
                />
                <button 
                    className="text-white border border-white rounded-md"
                    onClick={() => crearHosting()}
                >
                    Crear!
                </button>
            </div>
        </div>,
        document.getElementById('modal')!
    )
}

export default CrearDominio