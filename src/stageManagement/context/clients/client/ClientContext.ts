import { createContext } from "react";
import { ClientUpdated } from "../../../../models/clients/clients_models";

interface Context {
    isEditing: boolean,
    handleIsEditing: () => void,
    updateClient: (client: ClientUpdated) => Promise<void>,
    clientUpdated: ClientUpdated,
    handleChange: (index: string, value: string) => void
}
export const ClientContext = createContext<Context | null>(null);
