import { useState } from "react"
import useNavigatePackage from "../../../hooks/useNavigatePackage"
import useRedux from "../../../hooks/useRedux"

const useCreatePackage = (id: string = '') => {

  const { getPackages } = useRedux()

  const obtenerDataInicial = () => {
    if (id) {
      const paquete = getPackages()?.find((paquete) => paquete.id_paquete === id)
      if (paquete !== undefined) {
        return {
          nombre: paquete.nombre,
          precio: paquete.precio
        }
      }
    }
    return {
      nombre: '',
      precio: ''
    }
  }

  const [dataPackage, setDataPackage] = useState(obtenerDataInicial())

  const navegarVolver = useNavigatePackage()
  const { redireccionarVolver } = navegarVolver

  const modificarData = (name: string, value: string) => {
    setDataPackage({
      ...dataPackage,
      [name]: value
    })

  }

  const modificarPackage = async () => {

    await fetch('http://localhost:3000/packages/modificar', {
      method: 'PUT',
      body: JSON.stringify({
        ...dataPackage,
        id: id
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    redireccionarVolver()
  }



  const crearPackage = async () => {
    const valoresVacios = Object.values(dataPackage).find((name) => name === 0)

    if (valoresVacios === '') {
      console.log(valoresVacios)
      return;
    }

    await fetch('http://localhost:3000/packages/crear', {
      method: 'POST',
      body: JSON.stringify(dataPackage),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    redireccionarVolver()

  }

  return {
    modificarData: modificarData,
    modificarPackage: modificarPackage,
    dataPackage: dataPackage,
    crearPackage: crearPackage

  }
}

export default useCreatePackage