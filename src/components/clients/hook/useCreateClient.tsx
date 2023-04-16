import { useState } from "react";
import useNavigateClient from "../../../hooks/useNavigateClient";
import useRedux from "../../../hooks/useRedux";

const useCreateClient = (id: string = '') => {
    const { getClients } = useRedux()
    const obtenerDataInicial = () => {
        if (id) {
            const cliente = getClients()?.find((client) => client.id_cliente === id)
            if (cliente !== undefined) {
                return {
                    nombre: cliente.nombre,
                    direccion: cliente.direccion,
                    identificacion: cliente.identificacion,
                    telefono: cliente.telefono,
                    ciudad: cliente.ciudad,
                    correo: cliente.correo
                }
            }
        }
        return {
            nombre: '',
            direccion: '',
            identificacion: '',
            telefono: '',
            ciudad: '',
            correo: ''
        }
    }
    const [data, setData] = useState(obtenerDataInicial())

    console.log(getClients)


    const navegarVolver = useNavigateClient()
    const { redireccionarVolver } = navegarVolver;

    const modificarData = (name: string, value: string) => {
        setData({
            ...data,
            [name]: value
        })
    }

    const modificarCliente = async () => {

        await fetch('http://localhost:3000/clients/modificar', {
            method: 'PUT',
            body: JSON.stringify({
                ...data,
                id: id
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        redireccionarVolver()
    }

    const crearCliente = async () => {
        const valoresVacios = Object.values(data).find((name) => name.length === 0)
        if (valoresVacios === '') {
            console.log(valoresVacios)
            return
        }

        //crear cliente
        await fetch('http://localhost:3000/clients/crear', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        redireccionarVolver();
    }

    return ({
        modificarData: modificarData,
        data,
        crearCliente,
        modificarCliente
    })
}

export default useCreateClient