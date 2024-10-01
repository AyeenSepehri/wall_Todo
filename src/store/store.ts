// src/store/store.ts
import { configureStore, Middleware } from '@reduxjs/toolkit';
import worksReducer from './states/worksSlice';
import { checkDelayedTodos } from './middleware/checkDelayedTodos';

// Type for the store configuration
const middleware: Middleware[] = getDefaultMiddleware => getDefaultMiddleware().concat(checkDelayedTodos);

// Create the store
export const store = configureStore({
    reducer: {
        works: worksReducer,
    },
    middleware,
});

export type RootState = ReturnType<typeof store.getState>;
