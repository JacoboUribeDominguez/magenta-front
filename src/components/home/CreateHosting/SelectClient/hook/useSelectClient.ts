import React, { useState } from 'react'
import useRedux from '../../../../../hooks/useRedux';
import { Client } from '../../../../../models/commonClient';
import { useNavigate } from 'react-router-dom';

const useSelectClient = () => {
    const {
        getClients,
    } = useRedux()


    const navigate = useNavigate();

    const clients = getClients();

    const classClients = "";

    const clientsExist = () => (clients !== null && clients.length > 0);

    return {
        clients: getClients(),
        classClients: clientsExist() ? 'bg-gray-500 px-4 py-4 w-[90%] grid grid-cols-4 gap-7 rounded-md' : 'bg-gray-500 px-4 py-4 min-w-[20rem] flex flex-col rounded-md',
        navigate,
        clientsExist
    }
}

export default useSelectClient