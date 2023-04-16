import { useNavigate } from "react-router-dom"

const useNavigateClient = () => {

    const navigateClient = useNavigate();

    const redireccionarCrear = () => {
        navigateClient("/crearClient")
    }

    const redireccionarVolver = () => {
        navigateClient("/client")
    }

    const redireccionarVer = (id: {}) => {
        navigateClient(`/modificarClient/${id}`)
    }

    return {
        redireccionarCrear: redireccionarCrear,
        redireccionarVer: redireccionarVer,
        redireccionarVolver: redireccionarVolver
    }
}

export default useNavigateClient