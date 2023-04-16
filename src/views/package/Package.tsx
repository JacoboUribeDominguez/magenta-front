import React from 'react'
import Paquete from '../../components/package/Paquete'
import CrearPaquete from '../../components/package/CrearPaquete/CrearPaquete'
import usePackage from './hook/usePackage'
import UpdatePackage from '../../components/package/UpdatePackage/UpdatePackage'

const Package = () => {

    const { 
        packageSelected,
        setPackageSelected
    } = usePackage();

    return (
        <div className="h-screen pt-6 flex flex-col">
            <h1 className="general-title">Paquetes</h1>
            <div className="px-20 py-5 grid grid-cols-4 gap-5 h-[55em] overflow-y-auto gap-y-9">
                <Paquete onClick={() => setPackageSelected('')}/>
                <Paquete onClick={() => setPackageSelected('')}/>
                <Paquete onClick={() => setPackageSelected('')}/>
                <Paquete onClick={() => setPackageSelected('')}/>
                <Paquete onClick={() => setPackageSelected('')}/>
                <Paquete onClick={() => setPackageSelected('')}/>
                <Paquete onClick={() => setPackageSelected('')}/>
                <Paquete onClick={() => setPackageSelected('')}/>
                <Paquete onClick={() => setPackageSelected('')}/>
                <Paquete onClick={() => setPackageSelected('')}/>
            </div>
            {
                (packageSelected) ? <UpdatePackage /> : <CrearPaquete />
            }
            
        </div>
    )
}

export default Package