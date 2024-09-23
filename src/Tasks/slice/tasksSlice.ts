import {
  asyncThunkCreator,
  buildCreateSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";

interface IState {
isLoad: boolean
}

const initialState: IState = {
  isLoad: false
 
};

export const buildAppSlice = buildCreateSlice({
  creators: { asyncThunk: asyncThunkCreator },
});

export const tasksSlice = buildAppSlice({
  name: "tasks",
  initialState,
  reducers: (creator) => ({
    setIsLoad(state, actions: PayloadAction<boolean>) {
state.isLoad = actions.payload
    }
      }
    ),
    selectors: {
      isLoad: (state) => state.isLoad,
      },
  })

export const tasksReducer = tasksSlice.reducer;
export const tasksActions = tasksSlice.actions;
export const tasksSelectors = tasksSlice.selectors;
