import useRedux from "../../../hooks/useRedux"

const useVerClients = () => {

    const { getClients } = useRedux()
    return {
        clients: getClients()
    }
}

export default useVerClients