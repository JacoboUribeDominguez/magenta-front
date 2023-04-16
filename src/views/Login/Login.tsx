import React from 'react'
import { IconFacebook, IconGoogle, IconPassword, IconUser } from '../../const/icons'

const Login = () => {
    return (
        <div className="bg-gradinat-primary-lr h-screen flex flex-col justify-center items-center">
            <div className="bg-white border rounded-md w-[30rem] py-10 px-5 flex flex-col justify-center items-center">
                <h1 className="text-3xl text-black mb-10 font-semibold">
                    Inicia Sesión
                </h1>
                <div className="flex flex-col w-full justify-center px-4 my-4">
                    <label className="mr-4">Usuario:</label>
                    <div className="flex items-end border border-gray-600 border-t-0 border-l-0 border-r-0 py-3 px-3">
                        <div className="text-2xl text-gray-600">
                            { IconUser }
                        </div>
                        <input className="pl-2 w-full placeholder:text-gray-600" placeholder='Digita tu usuario' type="text" />
                    </div>
                </div>
                <div className="flex flex-col w-full justify-center px-4 my-4">
                    <label className="mr-4">Contraseña:</label>
                    <div className="flex items-end border border-gray-600 border-t-0 border-l-0 border-r-0 py-3 px-3">
                        <div className="text-2xl text-gray-600">
                            { IconPassword }
                        </div>
                        <input className="pl-2 w-full placeholder:text-gray-600" placeholder='Digita tu contraseña' type="text" />
                    </div>
                </div>
                <button className="bg-gradinat-primary-lr text-white px-4 py-2 rounded-2xl mt-8">Iniciar sesión</button>
                <h2 className="text-xl text-black mt-12">
                    Iniciar sesión usando
                </h2>
                <div className="icons mt-5 flex">
                    <div className="bg-[#3b5998] text-white px-3 py-3 rounded-full mx-3 text-xl">
                        { IconFacebook }
                    </div>
                    <div className="bg-[#DB4437] text-white px-3 py-3 rounded-full mx-3 text-xl">
                        { IconGoogle }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login