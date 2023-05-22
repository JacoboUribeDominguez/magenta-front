import { useEffect, useState } from 'react'
import { setHostings } from '../../../stageManagement/reducers/hostingReducer'
import { useDispatch } from 'react-redux'
import useRedux from '../../../hooks/useRedux'

const useHome = () => {

    const dispatch = useDispatch()
    const { 
        getHostings: getHostingsRedux
    } = useRedux()


    const [isOpen, setIsOpen] = useState(false);

    const [openCreateHosting, setOpenCreateHosting] = useState(false);

    const getHostings = async() => {
        try{
            const res = await fetch('http://localhost:3000/');
            const new_hostings = await res.json();
            dispatch(setHostings(new_hostings.hostings))
        }catch(err){
            console.log('hubo un error')
            console.log(err);
        }
    }

    useEffect(() => {
        getHostings();
    }, [])


    return {
        isOpen,
        openCreateHosting,
        hostings: getHostingsRedux(),
        setIsOpen,
        setOpenCreateHosting
    }
}

export default useHome