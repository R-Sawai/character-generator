import { configureStore } from '@reduxjs/toolkit';
import charaDataReducer from './characterDataSlice';

export const characterDataStore = configureStore({
    reducer: {
        characterData: charaDataReducer
    }
});

export type RootState = ReturnType<typeof characterDataStore.getState>;
export type AppDispatch = typeof characterDataStore.dispatch;
