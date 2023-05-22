import React from 'react'
import { useDispatch } from 'react-redux';
import { filterClients } from '../../../../stageManagement/reducers/clientReducer';
import useRedux from '../../../../hooks/useRedux';

const useClientsHeader = () => {

    const dispatch = useDispatch();
    const { getClients } = useRedux();

    const [search, setSearch] = React.useState('');

    const onChangeInput = (value: string) => {
        setSearch(value)
        const clients = getClients();
        if(clients){
            dispatch(filterClients(clients.filter(client => client.nombre.toLowerCase().includes(value.toLowerCase()))))
        }
    }

    return {
        search,
        onChangeInput
    }
}

export default useClientsHeader