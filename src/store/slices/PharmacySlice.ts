import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { PhamancyItemType } from "../../types/store"

export const fetchPhamancy = createAsyncThunk(
    'phamancy/fetchPhamancy',   
    async(_, { rejectWithValue }) => {
        try {
            const response = await fetch(`http://127.0.0.1:5000/api/diseases`)
            
            if (!response.ok) {
                throw Error('Произошла ошибка')
            }
            return await response.json()
        } catch (Error) {
            return rejectWithValue([])
        }
    }
)

interface PhamancyType {
    phamancy: Array<PhamancyItemType>,
}

const initialState: PhamancyType = {
    phamancy: [],
} 


const PharmacySlice = createSlice({
    name: 'phamancy',
    initialState,

    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(fetchPhamancy.fulfilled, (state, action) => {
            state.phamancy = action.payload
        })
    },
})

export default PharmacySlice.reducer

// export const {} = tableSlice.actions