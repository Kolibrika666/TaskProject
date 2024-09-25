import {
  asyncThunkCreator,
  buildCreateSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";
import { IFilterTasks, ITask } from "../models";
import { TaskApi } from "../api/TasksApi";

interface IState {
  isLoad: boolean;
  isError: boolean;
  change: number;
  taskList: ITask[];
}

const initialState: IState = {
  isLoad: false,
  isError: false,
  change: 0,
  taskList: [
    { id: 0, attributes: { name: "Дело 1", description: "Описание дела",  status: 'Невыполнено' } },
  ],
};

export const buildAppSlice = buildCreateSlice({
  creators: { asyncThunk: asyncThunkCreator },
});

export const tasksSlice = buildAppSlice({
  name: "tasks",
  initialState,
  reducers: (creator) => ({
    getTaskList: creator.asyncThunk(
      (request: { params: IFilterTasks }, { rejectWithValue }) =>
        TaskApi.getList(request.params)
          .then((r) => r.data.data)
          .catch((r) => rejectWithValue(r)),
      {
        pending: (state) => {
          state.isLoad = true;
        },
        rejected: (state) => {
          state.isError = true;
        },
        fulfilled: (state, { payload: taskList }) => {
          state.taskList = taskList;
          state.isLoad = false;
        },
      }
    ),

    setIsLoad: creator.reducer((state, actions: PayloadAction<boolean>) => {
      state.isLoad = actions.payload;
    }),
    setIsError: creator.reducer((state, actions: PayloadAction<boolean>) => {
      state.isError = actions.payload;
    }),
    setChange: creator.reducer((state, actions: PayloadAction<number>) => {
      ++state.change;
    }),
  }),
  selectors: {
    isLoad: (state) => state.isLoad,
    isError: (state) => state.isError,
    change: (state) => state.change,
    taskList: (state) => state.taskList,
  },
});

export const tasksReducer = tasksSlice.reducer;
export const tasksActions = tasksSlice.actions;
export const tasksSelectors = tasksSlice.selectors;
