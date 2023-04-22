import { useNavigate } from "react-router-dom"

const useNavigatePackage = () => {

    const navigatePackage = useNavigate();

    const redireccionarCrear = () => {
        navigatePackage("/crearPackage")
    }

    const redireccionarVolver = () => {
        navigatePackage("/package")
    }

    const redireccionarVer = (id: {}) => {
        navigatePackage(`/modificarPackage/${id}`)
    }

    return {
        redireccionarCrear: redireccionarCrear,
        redireccionarVer: redireccionarVer,
        redireccionarVolver: redireccionarVolver
    }
}

export default useNavigatePackage