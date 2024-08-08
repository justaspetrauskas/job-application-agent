import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { loginUser, registerUser } from '../api/userApi';

interface UserState {
  user: null | { token: string; email: string };
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: UserState = {
  user: null,
  status: 'idle',
  error: null,
};

// Thunks for API calls
export const login = createAsyncThunk(
  'user/login',
  async (credentials: { email: string; password: string }) => {
    const response = await loginUser(credentials.email, credentials.password);
    return response;
  }
);

export const register = createAsyncThunk(
  'user/register',
  async (credentials: { email: string; password: string }) => {
    const response = await registerUser(credentials.email, credentials.password);
    return response;
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Login failed';
      })
      .addCase(register.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(register.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
      })
      .addCase(register.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Registration failed';
      });
  },
});

export default userSlice.reducer;