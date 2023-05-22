import React from 'react'
import { ClientContext } from './ClientContext'
import { ProviderProps } from '../../../../models/context/Providers'
import { ClientUpdated } from '../../../../models/clients/clients_models';
import { useLocation, useNavigate } from 'react-router-dom';

const ClientProvider = ({ children }: ProviderProps) => {

  const location = useLocation();
  const navigate = useNavigate();

  const client = location.state;

  const [isEditing, setIsEditing] = React.useState(false);

  const [clientUpdated, setClientUpdated] = React.useState<ClientUpdated>({
    name: client.nombre,
    email: client.correo,
    phone: client.telefono,
    identification: client.identificacion,
    city: client.ciudad,
    address: client.direccion,
    id_client: client.id_cliente
  });

  const handleIsEditing = () => {
    if (isEditing) {
      updateClient();
      navigate(`/client/${clientUpdated.name.replace(' ','')}`, {state:{
        nombre: clientUpdated.name,
        correo:  clientUpdated.email,
        telefono: clientUpdated.phone,
        identificacion: clientUpdated.identification,
        ciudad: clientUpdated.city,
        direccion: clientUpdated.address,
        id_cliente: clientUpdated.id_client,
      }})
    }
    setIsEditing(!isEditing)
  }

  const handleChange = (index: string, value: string) => {
    setClientUpdated({
      ...clientUpdated,
      [index]: value
    })
  }

  const updateClient = async () => {
    await fetch('http://localhost:3000/clients/', {
      method: 'PUT',
      body: JSON.stringify(clientUpdated),
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

  return (
    <ClientContext.Provider value={{
      isEditing,
      clientUpdated,
      handleIsEditing,
      updateClient,
      handleChange
    }}>
      {children}
    </ClientContext.Provider>
  )
}

export default ClientProvider