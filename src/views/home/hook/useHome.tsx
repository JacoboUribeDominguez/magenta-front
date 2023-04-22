import { useEffect, useState } from 'react'
import { setHostings } from '../../../stageManagement/reducers/hostingReducer'
import { useDispatch } from 'react-redux'

const useHome = () => {

    const dispatch = useDispatch()

    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        fetch('http://localhost:3000/')
            .then((res) => res.json())
            .then((hostings) => {
                dispatch(setHostings(hostings.hostings))
            })
    }, [])

    return {
        isOpen,
        setIsOpen
    }
}

export default useHome