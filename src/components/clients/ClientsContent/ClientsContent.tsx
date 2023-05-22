import React from 'react'
import { IconAdd } from '../../../const/icons';
import useClientsContent from './hook/useClientsContent';
import { Client } from '../../../models/commonClient';
import ClientCard from '../ClientCard/ClientCard';
import ForEach from '../../common/ForEach/ForEach';

const ClientsContent = () => {

    const { clients, navigate } = useClientsContent()

    return (

        <div className="grid grid-cols-4 px-5 py-5 gap-10">
            <ClientCard
                isCreate={true}
                onClick={() => navigate('/createClient')}
            />
            <ForEach
                array={clients ? clients : []}
                renderElement={
                    (client: Client) => <ClientCard client={client} isCreate={false} onClick={() => navigate(`/client/${client.nombre.replace(' ','')}`, {state:client})} />
                }
            />
        </div>
    )
}

export default ClientsContent