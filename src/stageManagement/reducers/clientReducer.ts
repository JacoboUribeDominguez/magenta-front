import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialStateClients, Clients } from "../../models/commonClient";

const initialState: initialStateClients = {
    clients: []
}

export const clientSlice = createSlice({
    name: 'client',
    initialState,
    reducers: {
        setClients: (state, { payload }: PayloadAction<Clients[]>) => {
            state.clients = payload
        }
    }
})

export const { setClients } = clientSlice.actions
