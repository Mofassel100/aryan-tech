import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  Processor: null,
  Motherboard: null,
  RAM: null,
  Monitor: null,
  Storage_Device: null,
  Power_Supply_Unit: null,
  Others: null

};

const builderSlice = createSlice({
  name: 'builder',
  initialState,
  reducers: {
    setComponent: (state, action) => {
      const { category, component } = action.payload;
      state[category] = component;
    },
  },
});

export const { setComponent } = builderSlice.actions;
export default builderSlice.reducer;