import React from 'react'
import ClientEditIcon from './ClientEditIcon/ClientEditIcon';
import ClientPhoto from './ClientPhoto/ClientPhoto';
import ClientContent from './ClientContent/ClientContent';

const ClientCard = () => {

    return (
        <div className="flex p-5 rounded-lg bg-white shadow-2xl relative">
            <ClientEditIcon />
            <ClientPhoto />
            <ClientContent />
        </div>
    )
}

export default ClientCard