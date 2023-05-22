import ClientsContent from "../../components/clients/ClientsContent/ClientsContent"
import ClientsHeader from "../../components/clients/ClientsHeader/ClientsHeader"

const Clients: React.FC = () => {

    return (
        <div className="client-container">
            <ClientsHeader />
            <ClientsContent />
        </div>
    )
}

export default Clients