import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchTodo = createAsyncThunk(
    "todo/fetchTodo",
    async(limit, { rejectWithValue }) => {
        try {
            const response = await fetch(
                `https://jsonplaceholder.typicode.com/todos?_limit=${limit}`
            );

            if (!response.ok) {
                throw Error("Произошла ошибка");
            }
            return await response.json();
        } catch (Error) {
            return rejectWithValue([]);
        }
    }
);

const TodoSlice = createSlice({
    name: "todo",

    initialState: {
        todos: [],
        erors: null,
    },

    reducers: {
        addTodo: (state, action) => {
            state.todos.push(action.payload);
        },

        updateComplitedTodo: (state, action) => {
            let id = action.payload;
            state.todos = state.todos.map((todoItem) =>
                todoItem.id === id ? {...todoItem, completed: !todoItem.completed } :
                todoItem
            );
        },
    },

    extraReducers: (builder) => {
        builder.addCase(fetchTodo.fulfilled, (state, action) => {
            state.todos = action.payload
        })
    }
})

export default TodoSlice.reducer;

export const { addTodo, updateComplitedTodo } = TodoSlice.actions;