import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getUser = createAsyncThunk('app/getUser', async () => {
  const response = await fetch('/user', { method: 'GET' });
  const json = await response.json();
  return json.user;
});

const appSlice = createSlice({
  name: 'app',
  initialState: {
    user: '',
  },
  extraReducers: {
    [getUser.fulfilled]: (state, action) => {
      state.user = action.payload;
    },
  },
});

export default appSlice.reducer;
