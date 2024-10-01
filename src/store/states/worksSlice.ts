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
        deleteTodo: (state, action: PayloadAction<string>) => {
            return state.filter((todo) => todo.id !== action.payload);
        },
        updateTodoStatus: (state, action) => {
            const { id, status } = action.payload;
            const todo = state.find(item => item.id === id);
            if (todo) {
                todo.status = status;
            }
        },
        setStartEndDate: (state, action) => {
            const todo = state.find(item => item.id === action.payload.id);
            if (todo) {
                todo.startDate = action.payload.startDate ? action.payload.startDate : null;
                todo.endDate = action.payload.endDate ? action.payload.endDate : null;
            }
        }
    },
});

export const {
    addOrUpdateTodo,
    deleteTodo ,
    updateTodoStatus,
    setStartEndDate
} = worksSlice.actions;
export default worksSlice.reducer;
