import React from 'react'
import If from '../../../common/If/If'
import Then from '../../../common/If/Then'
import Else from '../../../common/If/Else'
import useSelectClient from './hook/useSelectClient'
import ForEach from '../../../common/ForEach/ForEach'
import { Client } from '../../../../models/commonClient'

interface Props {
    selectClient: (client: Client) => void;
}
const SelectClient = ({selectClient}: Props) => {

    const {
        classClients,
        clients,
        clientsExist,
        navigate,
    } = useSelectClient();

    return (
        <>
            <h1 className="w-full text-center font-semibold text-3xl mb-5">Selecciona un cliente:</h1>
            <div className={classClients}>
                <If predicate={clientsExist()}>
                    <Then>
                        <>
                            <div
                                onClick={() => navigate('/createClient')}
                                className="bg-gradinat-primary-lr px-4 py-4 text-2xl text-white rounded-xl flex flex-col hover-bg-gradinat-secondary-lr cursor-pointer h-full items-center justify-center"
                            >
                                <div className="text-center text-5xl">
                                    +
                                </div>
                            </div>
                            <ForEach
                                array={clients ? clients : []}
                                renderElement={(client: Client) => (
                                    <div
                                        className="bg-gradinat-primary-lr px-4 py-4 text-2xl text-white rounded-xl flex flex-col hover-bg-gradinat-secondary-lr cursor-pointer"
                                        onClick={() => selectClient(client)}
                                    >
                                        {client.nombre.split(' ').map(clientName => (
                                            <div className="text-center">
                                                {clientName}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            />
                        </>
                    </Then>
                    <Else>
                        <div className="flex flex-col items-center">
                            <p className="text-lg opacity-60">
                                No tienes ningún cliente! :(
                            </p>
                            <button
                                className="bg-gradinat-primary-lr text-white py-2 px-4 rounded-md cursor-pointer mt-3"
                                onClick={() => navigate('createClient')}
                            >Crea un cliente!</button>
                        </div>
                    </Else>
                </If>
            </div>
        </>
    )
}

export default SelectClient