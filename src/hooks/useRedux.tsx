import { useSelector } from 'react-redux'
import { RootState } from '../stageManagement/store'
import { Clients } from '../models/commonClient'
import { Packages } from '../models/commonPackage'

const useRedux = () => {

    //obtener estado global de la app
    const state = useSelector((state: RootState) => {
        return state
    })

    //métodos para obtener el estado
    const getHostings = () => {
        return state.hosting.hostings
    }

    const getClients = (): Clients[] | [] | null => {
        return state.client.clients
    }

    const getPackages = (): Packages[] | [] | null => {
        return state.package.packages
    }

    return {
        getHostings,
        getClients,
        getPackages
    }
}

export default useRedux