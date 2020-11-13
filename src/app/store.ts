import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import categoryReducer from 'features/category/categorySlice'

export const store = configureStore({
  reducer: {
    category: categoryReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
