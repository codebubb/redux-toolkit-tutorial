import { configureStore } from '@reduxjs/toolkit'
import  catsSlice from './features/catsSlice';

export const store = configureStore({
  reducer: catsSlice,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
