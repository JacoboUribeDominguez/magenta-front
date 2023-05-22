import React, { useContext } from 'react'
import { ClientContext } from '../../../../../../stageManagement/context/clients/client/ClientContext';
import { useLocation } from 'react-router-dom';
import { ClientUpdated } from '../../../../../../models/clients/clients_models';

const useClientContent = () => {

    const client_context = useContext(ClientContext);
    const location = useLocation();

    const client = location.state;

    const isEditing = client_context ? client_context.isEditing : false

    const updateClient = client_context ? client_context.updateClient : () => null

    const clientUpdated = client_context ? client_context.clientUpdated : {}

    const handleChange = client_context ? client_context.handleChange : () => null

    return {
        isEditing,
        client,
        clientUpdated,
        updateClient,
        handleChange
    }
}

export default useClientContent