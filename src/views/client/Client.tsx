import VerClients from "../../components/clients/VerClients"
import useClient from "./hook/useClient"

const Client: React.FC = () => {

    useClient()

    return (
        <div className="client-container">
            <h1 className="client-title">Clients</h1>
            <div className="flex justify-center items-center mr-5">
            </div>
            <input className="client-input" placeholder="Buscar cliente" />
            <VerClients />
        </div>
    )
}

export default Client