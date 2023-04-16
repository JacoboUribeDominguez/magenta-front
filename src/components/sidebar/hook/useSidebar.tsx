import { useNavigate } from "react-router-dom"
//diferencia, tiene {}, retorna un objeto
const useSidebar = () => {

    const navigate = useNavigate()

    const redireccionar = () => {
        navigate("/client")
    }

    const volver = () => {
        navigate("/")
    }

    return {

        redireccionar: redireccionar,
        volver: volver

    }
}

export default useSidebar