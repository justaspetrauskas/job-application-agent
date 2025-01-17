import { configureStore } from '@reduxjs/toolkit';
import darkModeReducer from './darkModeSlice';
import  userReducer  from './userSlice';

const store = configureStore({
  reducer: {
    darkMode: darkModeReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;