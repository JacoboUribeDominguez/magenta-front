import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialStateHostings, Hostings } from "../../models/common";

const initialState: initialStateHostings = {
    hostings: []
}

export const hostingSlice = createSlice({
    name: 'hosting',
    initialState,
    reducers: {
        setHostings: (state, { payload }: PayloadAction<Hostings[]>) => {
            state.hostings = payload
        }
    }
})

export const { setHostings } = hostingSlice.actions
