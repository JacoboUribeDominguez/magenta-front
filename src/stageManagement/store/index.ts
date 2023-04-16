import { configureStore } from '@reduxjs/toolkit';
import { hostingSlice } from '../reducers/hostingReducer';
import { clientSlice } from '../reducers/clientReducer';

const store = configureStore({
    reducer: {
        hosting: hostingSlice.reducer,
        client: clientSlice.reducer
    }
})

export default store

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch