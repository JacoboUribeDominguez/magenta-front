import React from 'react'
import { Client } from '../../../../models/commonClient'

interface Props {
    client?: Client;
}
const ContentDefault = ({ client }: Props) => {
    return client ? (
        <>
            <div className="text-2xl font-semibold">
                {client.nombre.split(' ').map((clientName: string) => (
                    <div className="">
                        {clientName}
                    </div>
                ))}
            </div>
            <div className="flex flex-col opacity-50">
                <p>
                    {client.identificacion}
                </p>
                <p>
                    {client.correo}
                </p>
            </div>
        </>
    ): <></>
}

export default ContentDefault