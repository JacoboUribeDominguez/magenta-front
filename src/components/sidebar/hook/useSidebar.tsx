import { useNavigate } from "react-router-dom"
//diferencia, tiene {}, retorna un objeto
const useSidebar = () => {

    const navigate = useNavigate()
    
    const user = localStorage.getItem('user');

    const redireccionar = (route: string) => {
        navigate(`${route}`)
    }

    const volver = () => {
        navigate("/")
    }

    return {

        redireccionar: redireccionar,
        volver: volver,
        user

    }
}

export default useSidebar