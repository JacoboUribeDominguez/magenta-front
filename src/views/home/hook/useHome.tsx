import { useEffect, useState } from 'react'
import { setHostings } from '../../../stageManagement/reducers/hostingReducer'
import { useDispatch } from 'react-redux'

const useHome = () => {

    const dispatch = useDispatch()

    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        console.log('i join')
        fetch('http://localhost:3000/hostings')
            .then((res) => res.json())
            .then((hostings) => {
                dispatch(setHostings(hostings))
            })
    }, [])

    return {
        isOpen,
        setIsOpen
    }
}

export default useHome