import { useState } from "react"

const useCreateHosting = () => {

    const obtenerDataInicial = () => {
        return {
            url: '',
            usuario: '',
            contrasena: '',
            fecha_vencimiento: '',
            notas: ''
        }
    }

    const [dataHostings, setDataHostings] = useState(obtenerDataInicial())

    const modificarDataHosting = (name: string, value: string) => {
        setDataHostings({
            ...dataHostings,
            [name]: value
        })
    }

    const crearHosting = async () => {
        const valoresVacios = Object.values(dataHostings).find((name) => name.length === 0)
        if (valoresVacios === '') {
            console.log(valoresVacios)
            return
        }

        await fetch('http://localhost:3000/crear', {
            method: 'POST',
            body: JSON.stringify(dataHostings),
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }


    return {
        modificarDataHosting: modificarDataHosting,
        dataHostings: dataHostings,
        crearHosting: crearHosting
    }
}

export default useCreateHosting