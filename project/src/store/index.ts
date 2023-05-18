import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { redirect } from './middlewares/redirect';
import { createAPI } from '../services/api';
import { dataProcess } from './data-process/data-process';
import { userProcess } from './user-process/user-process';
import { mainProcess } from './main-process/main-process';

const api = createAPI();

export const rootReducer = combineReducers({
  [NameSpace.Data]: dataProcess.reducer,
  [NameSpace.User]: userProcess.reducer,
  [NameSpace.Main]: mainProcess.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }).concat(redirect),
});
