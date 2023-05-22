import { useSelector } from 'react-redux'
import { RootState } from '../stageManagement/store'
import { Client } from '../models/commonClient'
import { Packages } from '../models/commonPackage'

const useRedux = () => {

    //obtener estado global de la app
    const state = useSelector((state: RootState) => {
        return state
    })

    //métodos para obtener el estado
    //hostings
    const getHostings = () => {
        return state.hosting.hostings
    }

    //clients
    const getClients = (): Client[] | [] | null => {
        return state.client.clients
    }

    const getFilteredClients = (): Client[] | [] | null => {
        return state.client.filtered_clients
    }

    //packages
    const getPackages = (): Packages[] | [] | null => {
        return state.package.packages
    }

    return {
        getHostings,
        getClients,
        getFilteredClients,
        getPackages
    }
}

export default useRedux