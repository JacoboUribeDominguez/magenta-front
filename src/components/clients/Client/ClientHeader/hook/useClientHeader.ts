import React, { useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import useFetch from '../../../../../hooks/useFetch';

const useClientHeader = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const { 
        deleteUrl
    } = useFetch();

    const client = location.state;

    const removeUser = async () => {
        await deleteUrl(`http://localhost:3000/clients/${client.id_cliente}`)
        navigate('/client')
    }

    return {
        removeUser,
        navigate
    }
}

export default useClientHeader