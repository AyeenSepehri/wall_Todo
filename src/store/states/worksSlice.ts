import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TodoState {
    id: string;
    title: string;
    registrationDate: string;
    deadline: string;
    status: string;
    isDelayed: boolean;
    startDate?: null | string | undefined;
    endDate?: null | string | undefined;
}

const initialState: TodoState[] = [];

const worksSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addOrUpdateTodo: (state, action: PayloadAction<TodoState>) => {
            const index = state.findIndex((todo) => todo.id === action.payload.id);
            if (index !== -1) {
                state[index] = action.payload;
            } else {
                state.push(action.payload);
            }
        },
    },
});

export const { addOrUpdateTodo } = worksSlice.actions;
export default worksSlice.reducer;
