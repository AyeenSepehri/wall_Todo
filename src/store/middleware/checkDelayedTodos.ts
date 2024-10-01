// src/store/middleware/checkDelayedTodos.ts
import { Middleware } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { addOrUpdateTodo } from '../states/worksSlice';

export const checkDelayedTodos: Middleware<unknown, RootState> = store => next => action => {
    const result = next(action);

    // Get the current state of todos
    const state = store.getState().works;

    // Get current time
    const now = new Date().getTime();

    // Check each todo's deadline
    state.forEach(todo => {
        const deadlineTime = new Date(todo.deadline).getTime();
        if (!todo.isDelayed && deadlineTime < now) {
            // Dispatch action to update isDelayed if the deadline has passed
            store.dispatch(
                addOrUpdateTodo({
                    ...todo,
                    isDelayed: true,
                })
            );
        }
    });

    return result;
};
