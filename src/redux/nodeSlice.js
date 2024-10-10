import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  nodeStack: [],
  edgeStack: [],
};

export const nodeSlice = createSlice({
  name: 'node',
  initialState,
  reducers: {
    setNodeStack: (state, action) => {
      state.nodeStack = action.payload;
    },
    setEdgeStack: (state, action) => {
      state.edgeStack = action.payload;
    },
  },
});

export const { setNodeStack,setEdgeStack, } = nodeSlice.actions;

export const nodeReducer = nodeSlice.reducer;
