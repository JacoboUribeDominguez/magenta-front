import React from 'react'
import useRedux from '../../../../hooks/useRedux'
import { useNavigate } from 'react-router-dom';

const useClientsContent = () => {

    const navigate = useNavigate();

    const { getFilteredClients } = useRedux()

    return {
        clients: getFilteredClients(),
        navigate
    }
}

export default useClientsContent