import { useEffect } from "react"
import { setClients } from "../../../stageManagement/reducers/clientReducer";
import { useDispatch } from "react-redux"

const useClient = () => {

    const dispatch = useDispatch();

    const getClients = async () => {
        const data = await fetch('http://localhost:3000/clients')
        const result = await data.json()
        dispatch(setClients(result.clients))
    }

    useEffect(() => {
        getClients()
    }, [])

}

export default useClient