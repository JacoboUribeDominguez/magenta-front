import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialStatePackages, Packages } from "../../models/commonPackage";

const initialState: initialStatePackages = {
    packages: []
}

export const packageSlice = createSlice({
    name: 'package',
    initialState,
    reducers: {
        setPackages: (state, { payload }: PayloadAction<Packages[]>) => {
            state.packages = payload
        }
    }
})

export const { setPackages } = packageSlice.actions
