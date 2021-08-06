import { configureStore } from '@reduxjs/toolkit';

import app from './slice';

const store = configureStore({ reducer: { app } });

export default store;