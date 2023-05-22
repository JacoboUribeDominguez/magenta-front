import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom"
import { setClients } from "../../../stageManagement/reducers/clientReducer";
import useFetch from "../../../hooks/useFetch";
import { Client } from "../../../models/commonClient";
import { SidebarOption } from "../../../models/enums/sidebar";

const useSidebar = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { get } = useFetch();
    const [loading, setLoading] = useState(true);
    const [optionActive, setOptionActive] = useState(0);
    
    const user = localStorage.getItem('user');

    const redirect = (route: string, newOptionActive: SidebarOption) => {
        navigate(`${route}`)
        setOptionActive(newOptionActive)
    }

    const getInformation = async() => {
        try{
            const data = await get('http://localhost:3000/clients');
            if(data && data.status === 200){
                const clients: Client[] = data.clients;
                dispatch(setClients(clients))
                setLoading(false)
            } else {
                navigate('/NotFound')
            }
        }catch(err){
            navigate('/NotFound')
        }
    }

    useEffect(() => {
        if(user){
            navigate("/login")
            return;
        }
        getInformation();
    }, [])

    return {
        user,
        loading,
        optionActive,
        redirect,
        setOptionActive,
    }
}

export default useSidebar