import { useSelector } from 'react-redux'
import { RootState } from '../stageManagement/store'
import { Clients } from '../models/commonClient'

const useRedux = () => {

    //obtener estado global de la app
    const state = useSelector((state: RootState) => state)

    //métodos para obtener el estado
    const getHostings = () => {
        return state.hosting.hostings
    }

    const getClients = () : Clients[] | [] | null => {
        return state.client.clients
    }

    return {
        getHostings,
        getClients
    }
}

export default useRedux