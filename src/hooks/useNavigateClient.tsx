import { useNavigate } from "react-router-dom"

const useNavigateClient = () => {

    const navigateClient = useNavigate();

    const redireccionarCrear = () => {
        navigateClient("/createClient")
    }

    const redireccionarVolver = () => {
        navigateClient(-1)
    }

    const redireccionarVer = (id: {}) => {
        navigateClient(`/updateClient/${id}`)
    }

    return {
        redireccionarCrear: redireccionarCrear,
        redireccionarVer: redireccionarVer,
        redireccionarVolver: redireccionarVolver
    }
}

export default useNavigateClient