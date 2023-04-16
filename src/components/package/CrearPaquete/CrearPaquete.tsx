import React from 'react'

const CrearPaquete = () => {
    return (
        <div className="bg-black-500 h-full p-10 flex flex-col justify-center">
            <h1 className="text-white text-3xl text-center font-bold">
                Crea tu paquete!
            </h1>
            <div className="w-full flex justify-center py-10">
                <input className="mx-4 py-3 px-2 bg-transparent border-b-white border-b placeholder:text-white" type="text" placeholder='Digita el nombre' />
                <input className="mx-4 py-3 px-2 bg-transparent border-b-white border-b placeholder:text-white" type="text" placeholder='Digita el precio' />
            </div>
            <div className="flex justify-center">
                <button className="text-bg-black-500 bg-white px-5 py-1 rounded text-lg">Crear</button>
            </div>
        </div>
    )
}

export default CrearPaquete