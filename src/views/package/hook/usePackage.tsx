import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPackages } from "../../../stageManagement/reducers/packageReducer";


const usePackage = () => {

    const dispatch = useDispatch()

    const getPackages = async () => {
        console.log('i join packages')
        const data = await fetch('http://localhost:3000/packages')
        const result = await data.json()
        dispatch(setPackages(result.packages))
    }

    useEffect(() => {
        getPackages()
    }, [])
}

export default usePackage