import { createSlice } from '@reduxjs/toolkit';

interface DarkModeState {
  isDarkMode: boolean;
}

const getInitialState = (): DarkModeState => {
  const savedMode = localStorage.getItem('darkMode');
  return {
    isDarkMode: savedMode === 'true' || false,
  };
};

const darkModeSlice = createSlice({
  name: 'darkMode',
  initialState: getInitialState(),
  reducers: {
    toggleDarkMode: (state) => {
      state.isDarkMode = !state.isDarkMode;
      localStorage.setItem('darkMode', JSON.stringify(state.isDarkMode));
      document.documentElement.classList.toggle('dark', state.isDarkMode);
    },
  },
});

export const { toggleDarkMode } = darkModeSlice.actions;
export default darkModeSlice.reducer;
