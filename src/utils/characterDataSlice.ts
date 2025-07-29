import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { DefaultCharacterData } from "./defaultCharacterData";
import type { CharacterDataType } from "@/types/characterDataType";

const characterDataSlice = createSlice({
    name: 'characterData',
    initialState: new DefaultCharacterData() as CharacterDataType,
    reducers: {
        setField<K extends keyof CharacterDataType>(
            state: CharacterDataType,
            action: PayloadAction<{ key: K; value: CharacterDataType[K] }>
        ) {
            state[action.payload.key] = action.payload.value;
        },
    },
});

export const { setField } = characterDataSlice.actions;
export default characterDataSlice.reducer;
