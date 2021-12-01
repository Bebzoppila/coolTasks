import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTable = createAsyncThunk(
    'table/fetchTable',
    async(limit = 5, { rejectWithValue }) => {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users?_limit=${limit}`)

            if (!response.ok) {
                throw Error('Произошла ошибка')
            }
            return await response.json()
        } catch (Error) {
            return rejectWithValue([])
        }
    }
)
const tableSlice = createSlice({
    name: 'table',

    initialState: {
        table: [],
        tableTitile: 'Пользователи'
    },

    reducers: {
        addTable: (state) => {

        }

    },
    extraReducers: (builder) => {
        builder.addCase(fetchTable.fulfilled, (state, action) => {
            state.table = action.payload
        })
    },
})

export default tableSlice.reducer

// export const {} = tableSlice.actions