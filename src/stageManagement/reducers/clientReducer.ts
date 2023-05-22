import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Client } from "../../models/commonClient";


interface initialStateClients {
    clients: Client[] | [] | null,
    filtered_clients: Client[] | [] | null
}

const initialState: initialStateClients = {
    clients: [],
    filtered_clients: [],
}

export const clientSlice = createSlice({
    name: 'client',
    initialState,
    reducers: {
        setClients: (state, { payload }: PayloadAction<Client[]>) => {
            state.clients = payload
            state.filtered_clients = payload
        },
        filterClients: (state, { payload }: PayloadAction<Client[]>) => {
            state.filtered_clients = payload
        }
    }
})

export const { setClients, filterClients } = clientSlice.actions
