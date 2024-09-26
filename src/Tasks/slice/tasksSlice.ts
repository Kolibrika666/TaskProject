import {
  asyncThunkCreator,
  buildCreateSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";
import { IFilterTasks, ITask } from "../models";
import { TaskApi } from "../api/TasksApi";
import { TaskList } from "../ui";
import { loadFromLocalStorage, saveToLocalStorage } from "../../store";

interface IState {
  isLoad: boolean;
  isError: boolean;
  change: number;
  taskList: ITask[];
  favoruteList: ITask[];
  filterStatus?: string;
  hasMore: boolean;
  index: number;
  favoriteSet: Set<ITask>;

}

const initialState: IState = {
  isLoad: false,
  isError: false,
  change: 0,
  taskList: [
    { id: 0, attributes: { name: "Дело 1", description: "Описание дела",  status: 'Невыполнено' } },
  ],
  favoruteList: [],
  hasMore: true,
  index: 2,
  favoriteSet: new Set([...loadFromLocalStorage()]),
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
          state.isLoad = false;
          state.isError = true;
        },
        fulfilled: (state, { payload: taskList }) => {
          state.taskList = taskList;
          state.isLoad = false;
        },
      }
    ),
    getMoreTaskList: creator.asyncThunk(
      (request: { params: IFilterTasks }, { rejectWithValue }) =>
        TaskApi.getList(request.params)
          .then((r) => r.data.data)
          .catch((r) => rejectWithValue(r)),
      {
        pending: (state) => {
          state.isLoad = true;
        },
        rejected: (state) => {
          state.isLoad = false;
          state.isError = true;
        },
        fulfilled: (state, { payload: taskList }) => {
          state.taskList.push(...taskList);
          taskList.length > 0 ? state.hasMore = true : state.hasMore = false;
          state.isLoad = false;
          ++state.index
        },
      }
    ),
    addFavoriteSet: creator.reducer((state, actions: PayloadAction<ITask>) => {
        state.favoriteSet.add(actions.payload)
        saveToLocalStorage(state.favoriteSet)
    }),
    deleteFavoriteSet: creator.reducer((state, actions: PayloadAction<ITask>) => {
      state.favoriteSet.has(actions.payload) 
  }),
    setIsLoad: creator.reducer((state, actions: PayloadAction<boolean>) => {
      state.isLoad = actions.payload;
    }),
    setIsError: creator.reducer((state, actions: PayloadAction<boolean>) => {
      state.isError = actions.payload;
    }),
    setChange: creator.reducer((state, actions: PayloadAction<number>) => {
      ++state.change;
    }),
    setFilterStatus: creator.reducer((state, actions: PayloadAction<string | undefined>) => {
      state.filterStatus = actions.payload;
    }),

    
  }),
  selectors: {
    isLoad: (state) => state.isLoad,
    isError: (state) => state.isError,
    change: (state) => state.change,
    taskList: (state) => state.taskList,
    filterStatus: (state) => state.filterStatus,
    index: (state) => state.index,
    hasMore: (state) => state.hasMore,
    favoriteSet: (state) => state.favoriteSet,
  },
});

export const tasksReducer = tasksSlice.reducer;
export const tasksActions = tasksSlice.actions;
export const tasksSelectors = tasksSlice.selectors;
