import React from 'react'
import ReactDOM from 'react-dom';

interface Props {
    cerrar: Function
}

const CrearDominio = ( {cerrar} : Props) => {
  return ReactDOM.createPortal(
    <div className="absolute w-[45rem] rounded-md border bg-white top-20 right-5 z-10 pt-5">
        <div className="flex justify-between px-5">
            <h1 className="text-primary-500 font-bold text-2xl">Crea tu nuevo hosting!</h1>
            <button className="bg-primary-500 rounded-full px-3 text-white" onClick={() => cerrar()}>
                x
            </button>
        </div>
        <div className="mt-3 flex flex-col px-24 bg-primary-500 pb-5">
            <input className="my-4 border border-b-white border-t-0 border-l-0 border-r-0 placeholder:text-white bg-transparent px-2" type="text" placeholder="Digita la url" />
            {/* <input className="my-4 border border-b-white border-t-0 border-l-0 border-r-0 placeholder:text-white bg-transparent px-2" type="text" placeholder="Selecciona un cliente" /> */}
            <input className="my-4 border border-b-white border-t-0 border-l-0 border-r-0 placeholder:text-white bg-transparent px-2" type="text" placeholder="Digita el usuario" />
            <input className="my-4 border border-b-white border-t-0 border-l-0 border-r-0 placeholder:text-white bg-transparent px-2" type="text" placeholder="Digita la contraseña" />
            {/* <input className="my-4 border border-b-white border-t-0 border-l-0 border-r-0 placeholder:text-white bg-transparent px-2" type="text" placeholder="Selecciona el paquete" /> */}
            <input className="my-4 border border-b-white border-t-0 border-l-0 border-r-0 placeholder:text-white bg-transparent px-2" type="text" placeholder="Digita la fecha de vencimiento" />
            <input className="my-4 border border-b-white border-t-0 border-l-0 border-r-0 placeholder:text-white bg-transparent px-2" type="text" placeholder="Notas:" />
            <button className="text-white border border-white rounded-md">Crear!</button>
        </div>
    </div>,
    document.getElementById('modal')!
  )
}

export default CrearDominio