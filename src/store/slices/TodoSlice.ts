import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TodoItemType } from "../../types/store";

export const fetchTodo = createAsyncThunk(
  "todo/fetchTodo",
  async (limit: number = 5, { rejectWithValue }) => {
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

interface todosType {
  todos: Array<TodoItemType>;
  erors: null | Error;
}

const initialState:todosType = {
    todos: [],
    erors: null,
}

const TodoSlice = createSlice({
  name: "todo",

  initialState,

  reducers: {
    addTodo: (state, action: PayloadAction<TodoItemType>) => {
      console.log(action.payload);
      state.todos.push(action.payload);
    },

    updateComplitedTodo: (state, action: PayloadAction<number>) => {
      let id = action.payload;
      state.todos = state.todos.map((todoItem) =>
        todoItem.id === id
          ? { ...todoItem, completed: !todoItem.completed }
          : todoItem
      );
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchTodo.fulfilled, (state, action) => {
      state.todos = action.payload;
    });
  },
});

export default TodoSlice.reducer;

export const { addTodo, updateComplitedTodo } = TodoSlice.actions;
