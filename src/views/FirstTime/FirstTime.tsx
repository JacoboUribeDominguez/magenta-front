import React from 'react'

const FirstTime = () => {
  return (
    <div className="bg-gradinat-primary-lr text-white">
        <div className="flex flex-col justify-center items-center h-screen">
            <h1 className="text-5xl animation-default my-3">Hola</h1>
            <h2 className="text-3xl animation-default an-delay-2 my-3">Comencemos a crear!</h2>
            <button className="border border-white py-2 px-4 mt-4">Siguiente</button>
        </div>
        <div className="flex flex-col justify-center items-center h-screen an-delay-4 animation-transition2">
            <h1 className="text-5xl animation-default my-3">Crea tu primer cliente</h1>

        </div>
    </div>
  )
}

export default FirstTime