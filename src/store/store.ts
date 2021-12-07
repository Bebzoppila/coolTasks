import { configureStore } from "@reduxjs/toolkit";
import TodoSlice from "./slices/TodoSlice";
import TableSlice from "./slices/TableSlice";
import PharmacySlice from "./slices/PharmacySlice";
export const store = configureStore({
    reducer: {
        todos: TodoSlice,
        table: TableSlice,
        pharmacy: PharmacySlice,
    },
});

export type stateType = ReturnType<typeof store.getState>
export type dispatchType = typeof store.dispatch

console.log();