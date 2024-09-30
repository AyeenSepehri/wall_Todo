import {configureStore} from "@reduxjs/toolkit";
import worksReducer from "./states/worksSlice"

export const store = configureStore({
    reducer: {
        works: worksReducer,
    },
});
export type RootState = ReturnType<typeof store.getState>;