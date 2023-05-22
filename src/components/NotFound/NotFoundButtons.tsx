import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFoundButtons = () => {

  const navigate = useNavigate();

  return (
    <div className="flex mt-4">
        <button className="mx-3 px-2 py-1 rounded-lg text-white bg-gradinat-primary-lr" onClick={() => navigate('/')}>
            Volver a intentar
        </button>
        <button className="mx-3 px-2 py-1 rounded-lg text-white bg-gradinat-secondary-lr">
            Contactar a T.I.
        </button>
    </div>
  )
}

export default NotFoundButtons