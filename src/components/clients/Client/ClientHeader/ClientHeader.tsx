import React from 'react'
import { IconLeft } from '../../../../const/icons'
import useClientHeader from './hook/useClientHeader';

const ClientHeader = () => {

    const { removeUser, navigate } = useClientHeader();

    return (
        <div className="mb-8 flex">
            <button 
                className="mx-2 flex justify-center items-center px-4 py-1 rounded-xl bg-gradinat-primary-lr text-white text-lg"
                onClick={() => navigate('/client')}
            >
                <div className="mr-2">
                    {IconLeft}
                </div>
                Volver
            </button>
            <button className="mx-2 hover:text-red-500" onClick={() => removeUser()}>Eliminar este cliente</button>
        </div>
    )
}

export default ClientHeader