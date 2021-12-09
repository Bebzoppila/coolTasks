import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  DiseasesItemType,
  MedicationsType,
  MedicaInfType,
} from "../../types/store";

export const fetchDiseases = createAsyncThunk(
  "phamancy/fetchDiseases",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(`http://a0606635.xsph.ru/diseases/`);

      if (!response.ok) {
        throw Error("Произошла ошибка");
      }
      return await response.json();
    } catch (Error) {
      return rejectWithValue([]);
    }
  }
);

export const fetchMedicametions = createAsyncThunk(
  "phamancy/fetchMedicametions",
  async (namePhamancy: string, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `http://a0606635.xsph.ru/diseases/?pharmacy=${namePhamancy}`
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

export const fetchMedicametionInfo = createAsyncThunk(
  '"phamancy/fetchMedicametionInfo",',
  async (nameMed: string, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `http://a0606635.xsph.ru/sideeffects/?medication=${nameMed}`
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

interface PhamancyType {
  diseases: Array<DiseasesItemType>;
  activeMedicametions: Array<MedicationsType>;
  medicationInf: MedicaInfType;
}

const initialState: PhamancyType = {
  diseases: [],
  activeMedicametions: [],
  medicationInf: {manufacturer:'', price:0, sideeffects:[]},
};

const PharmacySlice = createSlice({
  name: "phamancy",
  initialState,

  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchDiseases.fulfilled, (state, action) => {
      state.diseases = action.payload;
    });
    builder.addCase(fetchMedicametions.fulfilled, (state, action) => {
      state.activeMedicametions = action.payload;
      state.medicationInf = {manufacturer:'', price:0, sideeffects:[]}
    });

    builder.addCase(fetchMedicametionInfo.fulfilled, (state, action) => {
      state.medicationInf = action.payload;
    });
  },
});

export default PharmacySlice.reducer;

// export const {} = tableSlice.actions
