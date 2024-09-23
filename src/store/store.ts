import { configureStore } from "@reduxjs/toolkit";
import { tasksReducer } from "../Tasks/slice/tasksSlice";

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: true, serializableCheck: false }),
});

export type RootState = ReturnType<typeof store.getState>;
