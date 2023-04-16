import VerClients from "../../components/clients/VerClients"
import useClient from "./hook/useClient"

const Client: React.FC = () => {

    useClient()

    return (
        <div className="client-container">
            <h1 className="client-title">Clients</h1>
            <input className="client-input" placeholder="Buscar cliente" />
            <VerClients />
        </div>
    )
}

export default Client