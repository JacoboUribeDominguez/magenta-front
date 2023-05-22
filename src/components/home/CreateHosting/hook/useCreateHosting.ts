import { useState } from "react";
import { Client } from "../../../../models/commonClient";

const useCreateHosting = () => {

    const [clientSelected, setClientSelected] = useState<Client | null>(null);

    const selectClient = (client: Client) => {
        setClientSelected(client)
    }

    return {
        clientSelected,
        selectClient
    }
}

export default useCreateHosting