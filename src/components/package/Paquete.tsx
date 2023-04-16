import React from 'react'
import { IconTrash } from '../../const/icons'

interface Props {
    onClick?: () => void
}

const Paquete = ({ onClick } : Props) => {
    return (
        <div onClick={onClick} className="package-card">
            <div className="absolute text-xl bg-black-500 text-white rounded-full px-1 py-1" style={{top:'-12px', right:'-12px'}}>{ IconTrash }</div>
            <h1 className="text-xl font-bold text-white">
                Paquete Completo
            </h1>
            <h5 className="mt-4 text-4xl text-white font-bold">
                25.000
            </h5>
        </div>
    )
}

export default Paquete