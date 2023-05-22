import React from 'react'
import If from '../../common/If/If'
import Then from '../../common/If/Then'
import Else from '../../common/If/Else'
import useCreateHosting from './hook/useCreateHosting'
import SelectClient from './SelectClient/SelectClient'
import { Calendar } from 'primereact/calendar';
import { InputTextarea } from 'primereact/inputtextarea';

const CreateHosting = () => {

    const {
        clientSelected,
        selectClient
    } = useCreateHosting();

    return (
        <>
            <If predicate={(clientSelected === null)}>
                <Then>
                    <SelectClient selectClient={selectClient} />
                </Then>
                <Else>
                    <div className="h-full p-6 w-full justify-center flex flex-col">
                        <div className="w-full flex">
                            <div className="bg-gradinat-primary-lr p-5 rounded-md text-white">
                                <h1 className="text-3xl font-semibold">Crea tu hosting</h1>
                                <div className="px-5">
                                    <div className="flex flex-col mt-5 mb-9">
                                        <label className="mb-2">
                                            Url del hosting:
                                        </label>
                                        <input 
                                            className="bg-transparent border-b border-b-white p-1 w-full placeholder:text-white"
                                            placeholder="Digita la url" 
                                        />
                                    </div>
                                    <div className="flex my-4">
                                        <div className="flex justify-center items-center px-4">
                                            <label className="mr-4">
                                                Usuario:
                                            </label>
                                            <input 
                                                className="bg-transparent border-b border-b-white p-1 placeholder:text-white"
                                                placeholder="Digita el usuario" 
                                            />
                                        </div>
                                        <div className="flex justify-center items-center px-4">
                                            <label className="mr-4">
                                                Contraseña:
                                            </label>
                                            <input 
                                                className="bg-transparent border-b border-b-white p-1 placeholder:text-white"
                                                placeholder="Digita la contraseña" 
                                            />
                                        </div>
                                    </div>
                                    <div className="flex mb-4 mt-6">
                                        <div className="flex justify-center items-center px-4">
                                            <label className="mr-4">
                                                Fecha de vencimiento:
                                            </label>
                                            <Calendar className="input-date" showIcon placeholder='dd/mm/yyyy' />
                                        </div>
                                    </div>
                                    <div className="flex my-4">
                                        <div className="flex flex-col px-4">
                                            <label className="mb-2">
                                                Notas:
                                            </label>
                                            <InputTextarea autoResize rows={5} cols={60} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full flex flex-col justify-around px-7">
                                <div className="bg-gradinat-secondary-lr px-5 py-4 text-white shadow-2xl">
                                    <h5>
                                        Cliente seleccionado
                                    </h5>
                                    <h1 className="text-2xl font-semibold">
                                        {
                                            clientSelected?.nombre
                                        }
                                    </h1>
                                    <button className="bg-white text-secondary-500 px-4 rounded-3xl mt-4">
                                        Cambiar
                                    </button>
                                </div>
                                <div className="w-full flex justify-center">
                                    <button className="bg-gradinat-secondary-lr px-6 py-3 text-white rounded-3xl">
                                        Crear dominios
                                    </button>
                                    <button className="ml-4">
                                        Cancelar
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Else>
            </If>
        </>
    )
}

export default CreateHosting