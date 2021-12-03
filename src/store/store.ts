import { configureStore } from "@reduxjs/toolkit";
import TodoSlice from "./slices/TodoSlice";
import TableSlice from "./slices/TableSlice";

export const store = configureStore({
    reducer: {
        todos: TodoSlice,
        table: TableSlice,
    },
});

export type stateType = ReturnType<typeof store.getState>
export type dispatchType = typeof store.dispatch

console.log();