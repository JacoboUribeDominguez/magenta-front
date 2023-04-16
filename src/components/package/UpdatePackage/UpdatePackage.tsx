import React from 'react'

const UpdatePackage = () => {
    return (
        <div className="bg-[#201E06] h-full p-10 flex flex-col justify-center relative">
            <div className="absolute top-0 x right-0 bg-white mr-5 mt-5 px-3 py-1 rounded-full">
                x
            </div>
            <h1 className="text-white text-3xl text-center font-bold">
                Modifica nombre paquete!
            </h1>
            <div className="w-full flex justify-center py-10">
                <input className="mx-4 py-3 px-2 bg-transparent border-b-white border-b placeholder:text-white" type="text" placeholder='Digita el nombre' />
                <input className="mx-4 py-3 px-2 bg-transparent border-b-white border-b placeholder:text-white" type="text" placeholder='Digita el precio' />
            </div>
            <div className="flex justify-center">
                <button className="text-bg-black-500 bg-white px-5 py-1 rounded text-lg">Modificar</button>
            </div>
        </div>
    )
}

export default UpdatePackage