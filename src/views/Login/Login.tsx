import React from 'react'
import { IconFacebook, IconGoogle, IconPassword, IconUser } from '../../const/icons'
import Title from '../../components/Login/Title'
import Input from '../../components/Login/Input'
import Button from '../../components/Login/Button'
import Subtitle from '../../components/Login/Subtitle'

const Login = () => {
    return (
        <div className="bg-gradinat-primary-lr h-screen flex flex-col justify-center items-center">
            <div className="bg-white border rounded-md w-[30rem] py-10 px-5 flex flex-col justify-center items-center shadow-2xl">
                <Title value="Inicia Sesión" />
                <Input
                    label='Usuario:'
                    icon={IconUser}
                    placeholder='Digita tu usuario'
                />
                <Input
                    label='Contraseña:'
                    icon={IconPassword}
                    placeholder='Digita tu contraseña'
                />
                <Button
                    value="Iniciar sesión"
                />
                <Subtitle value="Iniciar sesión usando" />
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