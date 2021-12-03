import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { TableItemType } from "../../types/store"

export const fetchTable = createAsyncThunk(
    'table/fetchTable',
    async(limit: number = 5, { rejectWithValue }) => {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`)

            if (!response.ok) {
                throw Error('Произошла ошибка')
            }
            return await response.json()
        } catch (Error) {
            return rejectWithValue([])
        }
    }
)

interface TableType {
    table: Array<TableItemType>,
    tableTitile: string,
}

const initialState: TableType = {
    table: [],
    tableTitile: 'Пользователи'
} 


const tableSlice = createSlice({
    name: 'table',

    initialState,

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