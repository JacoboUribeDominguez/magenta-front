import { Card } from "primereact/card"
import useVerClients from "./hook/useVerClients"
import useNavigateClient from "../../hooks/useNavigateClient"
import { IconAdd } from "../../const/icons"

const VerClients: React.FC = () => {

    const { clients } = useVerClients()
    const redirecionar = useNavigateClient();
    const { redireccionarCrear, redireccionarVer } = redirecionar;
    
    return (

        <div>
            <Card
                className="icon-card"
                title={IconAdd}
                onClick={redireccionarCrear}
            />
            {
                clients ? clients.map(client => (
                    <Card
                        title={client.nombre}
                        className="client-card"
                        onClick={() => redireccionarVer(client.id_cliente)}
                    >
                        <p>{client.identificacion}</p>
                        <p>{client.correo}</p>
                    </Card>
                )) : <></>
            }
        </div>
    )

}

export default VerClients