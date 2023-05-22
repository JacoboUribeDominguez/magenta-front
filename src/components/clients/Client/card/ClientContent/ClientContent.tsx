import React from 'react'
import { useLocation } from 'react-router-dom';
import If from '../../../../common/If/If';
import useClientContent from './hook/useClientContent';
import Then from '../../../../common/If/Then';
import Else from '../../../../common/If/Else';

const ClientContent = () => {


    const {
        isEditing,
        clientUpdated,
        client,
        handleChange,
    } = useClientContent();


    return (
        <div className="my-10 mx-8 flex flex-col justify-center">
            <If predicate={isEditing}>
                <Then>
                    <h4 className="text-3xl font-semibold text-black-500">
                        <input 
                            className='outline-none shadow-lg rounded-lg px-4 py-1'
                            value={clientUpdated.name} 
                            onChange={(e) => handleChange('name', e.target.value)}
                        />
                    </h4>
                    <h5 className="text-xl italic thin mt-1 opacity-50">
                        <input 
                            className='outline-none shadow-lg rounded-lg px-4 py-1'
                            value={clientUpdated.email} 
                            onChange={(e) => handleChange('email', e.target.value)}
                        />
                    </h5>
                    <h5 className="text-lg mt-4">
                        Telefono: 
                        <input 
                            className='ml-4 outline-none shadow-lg rounded-lg px-4 py-1'
                            value={clientUpdated.phone} 
                            onChange={(e) => handleChange('phone', e.target.value)}
                        />
                    </h5>
                    <h5 className="text-lg mt-1">
                        Identificación:
                        <input 
                            className='ml-4 outline-none shadow-lg rounded-lg px-4 py-1'
                            value={clientUpdated.identification} 
                            onChange={(e) => handleChange('identification', e.target.value)}
                        />
                    </h5>
                    <div className="flex items-center">
                        <h5 className="text-lg mt-1">
                            <input 
                                className='outline-none shadow-lg rounded-lg px-4 py-1'
                                value={clientUpdated.city} 
                                onChange={(e) => handleChange('city', e.target.value)}
                            />
                        </h5>
                        <h5 className="text-lg mt-1 ml-4">-</h5>
                        <h5 className="text-lg mt-1 mx-4">
                            <input 
                                className='outline-none shadow-lg rounded-lg px-4 py-1'
                                value={clientUpdated.address} 
                                onChange={(e) => handleChange('address', e.target.value)}
                            />
                        </h5>
                    </div>
                </Then>
                <Else>
                    <h4 className="text-3xl font-semibold text-black-500">{client.nombre}</h4>
                    <h5 className="text-xl italic thin mt-1 opacity-50">{client.correo}</h5>
                    <h5 className="text-lg mt-4">Telefono: {client.telefono}</h5>
                    <h5 className="text-lg mt-1">Identificación: {client.identificacion}</h5>
                    <div className="flex">
                        <h5 className="text-lg mt-1">{client.ciudad}</h5>
                        <h5 className="text-lg mt-1 ml-4">-</h5>
                        <h5 className="text-lg mt-1 mx-4">{client.direccion}</h5>
                    </div>
                </Else>
            </If>
        </div>
    )
}

export default ClientContent