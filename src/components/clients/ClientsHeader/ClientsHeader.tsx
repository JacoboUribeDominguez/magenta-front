import React from 'react'
import useClientsHeader from './hook/useClientsHeader'

const ClientsHeader = () => {

    const {
        search,
        onChangeInput
    } = useClientsHeader();

    return (
        <div className="flex w-full justify-between mb-3">
            <h1 className="client-title">Clients</h1>
            <div className="flex items-center w-full justify-end">
                <input 
                    className="flex w-[20rem] mt-4 ml-4 px-4 py-2 rounded-3xl shadow-lg mr-5 outline-none" 
                    placeholder="Buscar cliente" 
                    onChange={(e) => onChangeInput(e.target.value)}
                    value={search}
                />
            </div>
        </div>
    )
}

export default ClientsHeader