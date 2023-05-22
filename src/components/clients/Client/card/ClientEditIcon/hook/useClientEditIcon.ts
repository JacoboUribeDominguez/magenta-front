import React, { useContext } from 'react'
import { ClientContext } from '../../../../../../stageManagement/context/clients/client/ClientContext';

const useClientEditIcon = () => {

    const client_context = useContext(ClientContext);

    const isEditing = client_context ? client_context.isEditing : false
    const handleIsEditing = client_context ? client_context.handleIsEditing : () => null;

    return {
        isEditing,
        handleIsEditing
    }
}

export default useClientEditIcon